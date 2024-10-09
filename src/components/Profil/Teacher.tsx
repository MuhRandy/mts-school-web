import { EditIcon } from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Image,
  Text,
  IconButton,
  HStack,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { IconTrash } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import ActionAlertDialog from "../ActionAlertDialog";
import { useAppContext } from "../../utils/context";
import { deleteTeacherData } from "../../services/DeleteDataService";

type TeacherProps = {
  name: string;
  imgURL: any;
  imgPath: string;
  jabatan: string;
  dataID: string;
};

function Teacher({ name, imgURL, imgPath, jabatan, dataID }: TeacherProps) {
  // get state from App
  const { state, globalStateAction } = useAppContext();

  const { isAuth, isLoading } = state;
  const { changeIsLoading, incrementRenderCount } = globalStateAction;

  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Card rounded={"none"}>
        {isAuth && (
          <HStack position={"absolute"} right={0} top={0}>
            <Tooltip hasArrow label="Edit Data Guru">
              <Link to={`/edit-teacher?id=${dataID}`}>
                <IconButton
                  aria-label="Edit Data Guru"
                  colorScheme="teal"
                  icon={<EditIcon />}
                />
              </Link>
            </Tooltip>
            <Tooltip hasArrow label="Hapus Data Guru">
              <IconButton
                aria-label="Hapus Data Guru"
                colorScheme="red"
                onClick={onOpen}
                icon={<IconTrash />}
              />
            </Tooltip>
          </HStack>
        )}
        <div className="flex min-h-[70%] items-center">
          <Image src={imgURL} alt={name} />
        </div>
        <CardBody p={2}>
          <Stack gap={0}>
            <Heading fontSize={{ md: "md", lg: "lg" }} textAlign={"center"}>
              {name}
            </Heading>
            <Text textAlign={"center"} fontSize={{ md: "sm", lg: "md" }}>
              {jabatan}
            </Text>
          </Stack>
        </CardBody>
      </Card>
      <ActionAlertDialog
        isLoading={isLoading}
        isOpen={isOpen}
        onClose={onClose}
        headerText="Hapus Data Guru"
        bodyText="Apa Anda Yakin"
        buttonColor="red"
        confirmationText="Hapus"
        onClickHandler={() =>
          deleteTeacherData(
            dataID,
            changeIsLoading,
            incrementRenderCount,
            imgPath
          )
        }
      />
    </>
  );
}

export default Teacher;
