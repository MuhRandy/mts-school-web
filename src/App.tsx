import { createContext, useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate, NavigateFunction } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./utils/firebase";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import NewsAndArticles from "./pages/NewsAndArticles";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost/CreatePost";
import Footer from "./components/Footer";
import SinglePost from "./pages/SinglePost";

type GlobalContent = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  articles: any;
  news: any;
  navigate: NavigateFunction;
};

export const AppContext = createContext<GlobalContent>({
  isAuth: false,
  setIsAuth: () => {},
  articles: [],
  news: [],
  navigate: () => {},
});

export const useAppContext = () => useContext(AppContext);

function App() {
  const [articles, setArticles] = useState<any[]>([]);
  const [news, setNews] = useState<any[]>([]);
  const [isAuth, setIsAuth] = useState<boolean>(
    Boolean(localStorage.getItem("isAuth"))
  );

  const navigate = useNavigate();

  const articleCollectionRef = collection(db, "posts");
  const newsCollectionRef = collection(db, "news");

  useEffect(() => {
    const getArticles = async () => {
      const data = await getDocs(articleCollectionRef);
      setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getNews = async () => {
      const data = await getDocs(newsCollectionRef);
      setNews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getArticles();
    getNews();
    console.log("is it running");
  }, []);

  return (
    <ChakraProvider>
      <AppContext.Provider
        value={{ isAuth, setIsAuth, articles, news, navigate }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/news-and-articles" element={<NewsAndArticles />} />
          <Route path="/article" element={<SinglePost postType={articles} />} />
          <Route path="/news" element={<SinglePost postType={news} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </ChakraProvider>
  );
}

export default App;
