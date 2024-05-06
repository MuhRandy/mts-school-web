import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import clsx from "clsx";
import { useAppContext } from "../utils/context";

const Login = () => {
  const { globalStateAction } = useAppContext();

  const { navigate, changeIsAuth, changeWantToLogin } = globalStateAction;

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        localStorage.setItem("IS_AUTH", "true");
        changeIsAuth(true);
        changeWantToLogin(false);
        navigate("/");
      })
      .catch((err) => {
        alert("Email atau Password yang Anda Masukkan Salah!");
        console.log(err);
      });
  };

  return (
    <VStack gap={3} color={"white"} p={5} className={clsx("bg-black/20")}>
      <Input
        type="email"
        placeholder="Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={signIn}>Login</Button>
    </VStack>
  );
};

export default Login;
