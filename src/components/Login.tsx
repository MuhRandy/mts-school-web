import { useNavigate } from "react-router-dom";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { Button, Center } from "@chakra-ui/react";
import { useAppContext } from "../App";

const Login = () => {
  const navigate = useNavigate();

  const { setIsAuth } = useAppContext();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", "true");
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <Center className="min-h-screen">
      <Button onClick={signInWithGoogle} colorScheme="blackAlpha">
        Login With Google
      </Button>
    </Center>
  );
};

export default Login;
