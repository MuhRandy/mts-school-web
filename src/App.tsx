import { createContext, useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate, NavigateFunction } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./utils/firebase";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import Footer from "./components/Footer";
import SinglePost from "./pages/SinglePost";
import News from "./pages/News";

type GlobalContent = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  news: any;
  navigate: NavigateFunction;
};

const AppContext = createContext<GlobalContent>({
  isAuth: false,
  setIsAuth: () => {},
  news: [],
  navigate: () => {},
});

export const useAppContext = () => useContext(AppContext);

function App() {
  const [news, setNews] = useState<any[]>([]);
  const [isAuth, setIsAuth] = useState<boolean>(
    Boolean(localStorage.getItem("isAuth"))
  );

  const navigate = useNavigate();

  // get news data from firestore
  // --------

  // database ref
  const newsCollectionRef = collection(db, "news");

  // database query, order by timestamp and desc it
  const q = query(newsCollectionRef, orderBy("timestamp", "desc"));

  // get the data
  useEffect(() => {
    const getNews = async () => {
      const data = await getDocs(q);
      setNews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getNews();
  }, []);
  // --------

  return (
    <ChakraProvider>
      <AppContext.Provider value={{ isAuth, setIsAuth, news, navigate }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/berita-sekolah/detail" element={<SinglePost />} />
          <Route path="/news/informasi/detail" element={<SinglePost />} />
          <Route path="/news/pengumuman/detail" element={<SinglePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </ChakraProvider>
  );
}

export default App;
