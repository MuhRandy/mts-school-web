import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

type PostAlertDialogProps = {
  uploadFile: () => void;
  isOpen: boolean;
  onClose: () => void;
};

const PostAlertDialog = ({
  uploadFile,
  isOpen,
  onClose,
}: PostAlertDialogProps) => {
  const postPathRef = useRef<any>();

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={postPathRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Publish Berita
          </AlertDialogHeader>

          <AlertDialogBody>Apa Anda Yakin?</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={postPathRef} onClick={onClose}>
              Batal
            </Button>
            <Button
              size={{ base: "sm", sm: "md" }}
              color={"white"}
              bgColor={"lime"}
              onClick={() => {
                uploadFile();
                onClose;
              }}
              ml={3}
            >
              Publish
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default PostAlertDialog;
