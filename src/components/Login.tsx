import { auth, provider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { Button, Center } from "@chakra-ui/react";
import { useAppContext } from "../App";
import { useEffect } from "react";

const Login = () => {
  const { isAuth, setIsAuth, navigate } = useAppContext();

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, []);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
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
