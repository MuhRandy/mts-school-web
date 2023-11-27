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
  uploadFile: (postType: string) => void;
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
            Publish Postingan
          </AlertDialogHeader>

          <AlertDialogBody>Pilih kategori postingan Anda.</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={postPathRef} onClick={onClose}>
              Batal
            </Button>
            <Button
              size={{ base: "sm", sm: "md" }}
              color={"white"}
              bgColor={"lime"}
              onClick={() => {
                uploadFile("posts");
                onClose;
              }}
              ml={3}
            >
              Artikel
            </Button>
            <Button
              size={{ base: "sm", sm: "md" }}
              color={"white"}
              bgColor={"lime"}
              onClick={() => {
                uploadFile("news");
                onClose;
              }}
              ml={3}
            >
              Berita
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default PostAlertDialog;
