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
import { DocumentData } from "firebase/firestore";
import { getSingleData } from "../services/GetDataService";
import { updateTeacherData } from "../services/UpdateDataService";
import { uploadData } from "../services/UploadDataService";
import {
  useAppStatusContext,
  useAppStatusDispatchContext,
} from "../services/state/AppStatusContext";
import { useNavigate } from "react-router-dom";
import { isUserAdmin } from "../utils/utils";

type AddTeacherProps = {
  forEdit?: boolean;
};

const AddTeacher = ({ forEdit = false }: AddTeacherProps) => {
  const { isLoading, isAuth, user } = useAppStatusContext();
  const dispatch = useAppStatusDispatchContext();

  function changeIsLoading(newIsLoading: boolean) {
    dispatch({
      type: "changed_is_loading",
      isLoading: newIsLoading,
    });
  }

  function changeWantToLogin(newWantToLogin: boolean) {
    dispatch({
      type: "changed_want_to_login",
      wantToLogin: newWantToLogin,
    });
  }

  function incrementRenderCount() {
    dispatch({
      type: "incremented_render_count",
    });
  }

  const navigate = useNavigate();

  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [dataEdited, setDataEdited] = useState<DocumentData>();
  const [imgUrl, setImgUrl] = useState<string>("");
  const [imgPath, setImgPath] = useState<string>("");

  // get data id from search params and store it at dataID
  const searchParams = new URLSearchParams(location.search);
  const dataID: string = searchParams.get("id")!;

  useEffect(() => {
    // avoid navigate here when user not login
    if (!isAuth || !isUserAdmin(user.email, user.uid)) {
      navigate("/");
      changeWantToLogin(true);
    }

    // check is it for Edit
    if (forEdit) {
      getSingleData(setDataEdited, "teacherData", dataID, changeIsLoading);
    }
  }, []);

  useEffect(() => {
    setImgUrl(dataEdited?.imgUrl);
    setName(dataEdited?.name);
    setPosition(dataEdited?.position);
    setImgPath(dataEdited?.imgPath);
  }, [dataEdited]);

  const updateTeacherDataHandler = () => {
    updateTeacherData(
      dataID,
      name,
      position,
      imgUrl,
      imgPath,
      file,
      changeIsLoading,
      incrementRenderCount,
      navigate
    );
  };

  const uploadDataHandler = () => {
    uploadData(
      name,
      position,
      file,
      changeIsLoading,
      incrementRenderCount,
      navigate
    );
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
            onClick={forEdit ? updateTeacherDataHandler : uploadDataHandler}
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
