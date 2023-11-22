import { Routes, Route, useNavigate, NavigateFunction } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Article from "./pages/Article";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Footer from "./components/Footer";
import NewsAndArticles from "./pages/NewsAndArticles";
import Login from "./components/Login";
import { createContext, useContext, useEffect, useState } from "react";
import CreatePost from "./components/CreatePost";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./utils/firebase";

type GlobalContent = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  articles: any;
  navigate: NavigateFunction;
};

export const AppContext = createContext<GlobalContent>({
  isAuth: false,
  setIsAuth: () => {},
  articles: [],
  navigate: () => {},
});

export const useAppContext = () => useContext(AppContext);

function App() {
  const [articles, setArticles] = useState<any[]>([]);
  const [isAuth, setIsAuth] = useState(Boolean(localStorage.getItem("isAuth")));
  const navigate = useNavigate();

  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  return (
    <ChakraProvider>
      <AppContext.Provider value={{ isAuth, setIsAuth, articles, navigate }}>
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
