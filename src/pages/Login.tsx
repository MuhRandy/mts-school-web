import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useAppContext } from "../App";
import { useEffect, useState } from "react";

const Login = () => {
  const { isAuth, setIsAuth, navigate } = useAppContext();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, []);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("isAuth", "true");
        setIsAuth(true);
        navigate("/");
      })
      .catch((err) => {
        alert("Email atau Password yang Anda Masukkan Salah!");
        console.log(err);
      });
  };

  return (
    <Center className="min-h-screen">
      <VStack gap={3}>
        <FormControl>
          <HStack>
            <FormLabel whiteSpace={"nowrap"}>Email :</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </HStack>
        </FormControl>
        <FormControl>
          <HStack>
            <FormLabel whiteSpace={"nowrap"}>Password :</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </HStack>
        </FormControl>
        <Button onClick={signIn}>Login</Button>
      </VStack>
      {/* <Button onClick={signInWithGoogle} colorScheme="blackAlpha">
        Login With Google
      </Button> */}
    </Center>
  );
};

export default Login;
