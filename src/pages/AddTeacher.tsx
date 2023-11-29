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
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db, storage } from "../utils/firebase";
import { useAppContext } from "../App";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const AddTeacher = () => {
  // get state from App
  const {
    renderCount,
    isAuth,
    isLoading,
    setRenderCount,
    navigate,
    setIsLoading,
  } = useAppContext();

  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState<string>("");
  const [position, setPosition] = useState<string>("");

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

    const imgPath = `teacher-data-image/${name}/${v4()}`;
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
  }, []);

  return (
    <Content title="Tambahkan Data Guru">
      <Center>
        <VStack>
          <Card rounded={"none"} w={"300px"}>
            <DragNDrop
              file={file}
              setFile={setFile}
              className="h-full w-full min-h-[400px] m-0"
            />
            <CardBody p={2}>
              <Stack>
                {/* // Click the text to edit */}
                <Editable
                  defaultValue="Nama"
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
            onClick={uploadData}
            isLoading={isLoading}
          >
            Tambah Data
          </Button>
        </VStack>
      </Center>
    </Content>
  );
};

export default AddTeacher;
