"use client";

import { Routes, Route, useNavigate, NavigateFunction } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Article from "./pages/Article";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Footer from "./components/Footer";
import NewsAndArticles from "./pages/NewsAndArticles";
import Login from "./components/Login";
import { createContext, useContext, useState } from "react";
import CreatePost from "./components/CreatePost";

type GlobalContent = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  navigate: NavigateFunction;
};

export const AppContext = createContext<GlobalContent>({
  isAuth: false,
  setIsAuth: () => {},
  navigate: () => {},
});

export const useAppContext = () => useContext(AppContext);

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  console.log(isAuth);
  return (
    <ChakraProvider>
      <AppContext.Provider value={{ isAuth, setIsAuth, navigate }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/news" element={<NewsAndArticles />} />
          <Route path="/article" element={<Article />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </ChakraProvider>
  );
}

export default App;
