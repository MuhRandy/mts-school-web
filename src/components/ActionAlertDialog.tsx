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

type ActionAlertDialogProps = {
  isOpen: boolean;
  isLoading: boolean;
  headerText: string;
  confirmationText: string;
  bodyText: string;
  buttonColor?: string;
  onClickHandler: () => void;
  onClose: () => void;
};

const ActionAlertDialog = ({
  isOpen,
  isLoading,
  headerText,
  bodyText,
  confirmationText,
  buttonColor = "lime",
  onClickHandler,
  onClose,
}: ActionAlertDialogProps) => {
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
            {headerText}
          </AlertDialogHeader>

          <AlertDialogBody>{bodyText}</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={postPathRef} onClick={onClose}>
              Batal
            </Button>
            <Button
              isDisabled={isLoading}
              isLoading={isLoading}
              size={{ base: "sm", sm: "md" }}
              color={"white"}
              bgColor={buttonColor}
              onClick={() => {
                onClickHandler();
                onClose;
              }}
              ml={3}
            >
              {confirmationText}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ActionAlertDialog;
