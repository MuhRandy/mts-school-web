import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Center, Input, VStack } from "@chakra-ui/react";
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
    <Center
      position={"fixed"}
      top={0}
      right={0}
      bottom={0}
      left={0}
      zIndex={50}
      className="bg-black/70"
    >
      <VStack gap={3} p={5} borderRadius={"10px"} className={clsx("bg-white")}>
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
        <div className="flex gap-2">
          <Button onClick={signIn} backgroundColor={"black"} color={"white"}>
            Login
          </Button>
          <Button
            onClick={() => {
              changeWantToLogin(false);
            }}
            backgroundColor={"black"}
            color={"white"}
          >
            Batal
          </Button>
        </div>
      </VStack>
    </Center>
  );
};

export default Login;
