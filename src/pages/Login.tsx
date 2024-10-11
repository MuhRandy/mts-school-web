import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, Center, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import clsx from "clsx";
import { useAppStatusDispatchContext } from "../services/state/AppStatusContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppStatusDispatchContext();

  function changeIsAuth(newIsAuth: boolean) {
    dispatch({
      type: "changed_is_auth",
      isAuth: newIsAuth,
    });
  }

  function changeWantToLogin(newWantToLogin: boolean) {
    dispatch({
      type: "changed_want_to_login",
      wantToLogin: newWantToLogin,
    });
  }

  function changeUser(userData: { email: string | null; uid: string | null }) {
    dispatch({
      type: "change_user",
      user: userData,
    });
  }

  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const signIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      localStorage.setItem("IS_AUTH", "true");
      localStorage.setItem("USER_UID", user.uid);

      if (user.email) localStorage.setItem("USER_EMAIL", user.email);

      const userData = {
        email: user.email,
        uid: user.uid,
      };

      changeUser(userData);

      changeIsAuth(true);
      changeWantToLogin(false);
      navigate("/");
    } catch (error) {
      alert("Email atau Password yang Anda Masukkan Salah!");
      console.log(error);
    }
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
