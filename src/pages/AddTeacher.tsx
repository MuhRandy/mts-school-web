import { useEffect, useState } from "react";
import Content from "../components/Content";
import DragNDrop from "../components/CreatePost/DragNDrop";
import {
  Button,
  Card,
  CardBody,
  Center,
  Editable,
  EditableInput,
  EditablePreview,
  Stack,
  VStack,
} from "@chakra-ui/react";
import {
  DocumentData,
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { auth, db, storage } from "../utils/firebase";
import { useAppContext } from "../App";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

type AddTeacherProps = {
  forEdit?: boolean;
};

const AddTeacher = ({ forEdit = false }: AddTeacherProps) => {
  // get state from App
  const {
    renderCount,
    isAuth,
    isLoading,
    setRenderCount,
    navigate,
    setIsLoading,
    getSingleData,
  } = useAppContext();

  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [dataEdited, setDataEdited] = useState<DocumentData>();
  const [imgUrl, setImgUrl] = useState<string>("");
  const [imgPath, setImgPath] = useState<string>("");

  // get data id from search params and store it at dataID
  const searchParams = new URLSearchParams(location.search);
  const dataID: string = searchParams.get("id")!;

  // add doc on firebase database on teacher data collection then navigate to profil
  const addTeacherData = async (imgUrl: string, imgPath: string) => {
    const teacherDataCollectionRef = collection(db, "teacherData");
    await addDoc(teacherDataCollectionRef, {
      name,
      position,
      imgUrl,
      imgPath,
      timestamp: serverTimestamp(),
      author: {
        id: auth.currentUser?.uid,
      },
    }).catch((err) => console.log(err));
    setRenderCount(renderCount + 1);
    navigate("/profil");
  };

  // upload image in storage and then save downloadUrl to referred doc on firestore
  const uploadData = () => {
    if (file === null) {
      alert("Please select an image");
      return;
    }

    setIsLoading(true);

    const imgPath = `teacher-data-image/${v4()}`;
    const imageRef = ref(storage, imgPath);

    uploadBytes(imageRef, file)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            addTeacherData(url, imgPath);
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    // avoid navigate here when user not login
    if (!isAuth) {
      navigate("/login");
    }

    // check is it for Edit
    if (forEdit) {
      getSingleData(setDataEdited, "teacherData", dataID);
    }
  }, []);

  useEffect(() => {
    setImgUrl(dataEdited?.imgUrl);
    setName(dataEdited?.name);
    setPosition(dataEdited?.position);
    setImgPath(dataEdited?.imgPath);
  }, [dataEdited]);

  // replace whatever change to the referred data id
  const updateData = async (imgURL: string, imgPath: string) => {
    const dataRef = doc(db, "teacherData", dataID);
    await setDoc(dataRef, {
      name,
      position,
      imgUrl: imgURL,
      imgPath,
      timestamp: serverTimestamp(),
      author: {
        id: auth.currentUser?.uid,
      },
    }).catch((err) => console.log(err));

    setRenderCount(renderCount + 1);
    navigate("/profil");
  };

  // Update data
  const updateTeacherData = () => {
    if (file === null && imgUrl == "") {
      alert("Please select an image");
      return;
    }

    setIsLoading(true);

    // if file exist replace old file with new file
    if (file !== null) {
      const imageRef = ref(storage, imgPath);

      uploadBytes(imageRef, file)
        .then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((url) => {
              updateData(url, imgPath);
            })
            .catch((error) => {
              console.log(error.message);
            });
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      updateData(imgUrl, imgPath);
    }
  };

  return (
    <Content title="Tambahkan Data Guru">
      <Center>
        <VStack>
          <Card rounded={"none"} w={"300px"}>
            <DragNDrop
              file={file}
              setFile={setFile}
              imgUrl={imgUrl}
              className="h-full w-full min-h-[400px] m-0"
            />
            <CardBody p={2}>
              <Stack>
                {/* // Click the text to edit */}
                <Editable
                  defaultValue="Nama"
                  value={name}
                  fontSize={{ md: "md", lg: "xl" }}
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  <EditablePreview />
                  <EditableInput onChange={(e) => setName(e.target.value)} />
                </Editable>
                {/* // Click the text to edit */}
                <Editable
                  defaultValue="Jabatan"
                  value={position}
                  textAlign={"center"}
                  fontSize={{ md: "sm", lg: "md" }}
                >
                  <EditablePreview />
                  <EditableInput
                    onChange={(e) => setPosition(e.target.value)}
                  />
                </Editable>
              </Stack>
            </CardBody>
          </Card>
          <Button
            bgColor={"lime"}
            textColor={"white"}
            onClick={forEdit ? updateTeacherData : uploadData}
            isLoading={isLoading}
          >
            {forEdit ? "Update Data" : "Tambah Data"}
          </Button>
        </VStack>
      </Center>
    </Content>
  );
};

export default AddTeacher;
