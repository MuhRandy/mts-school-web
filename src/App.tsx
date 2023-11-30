import { createContext, useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate, NavigateFunction } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import {
  DocumentData,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "./utils/firebase";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import Footer from "./components/Footer";
import SinglePost from "./pages/SinglePost";
import News from "./pages/News";
import AddTeacher from "./pages/AddTeacher";

type GlobalContent = {
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isAuth: boolean) => void;
  renderCount: number;
  setRenderCount: (renderCount: number) => void;
  news: any;
  navigate: NavigateFunction;
  getPost: (
    setState: (data: DocumentData) => void,
    postID: string
  ) => Promise<void>;
};

const AppContext = createContext<GlobalContent>({
  isAuth: false,
  setIsAuth: () => {},
  isLoading: false,
  setIsLoading: () => {},
  renderCount: 0,
  setRenderCount: () => {},
  news: [],
  navigate: () => {},
  getPost: async () => {},
});

export const useAppContext = () => useContext(AppContext);

function App() {
  const [news, setNews] = useState<any[]>([]);
  const [isAuth, setIsAuth] = useState<boolean>(
    Boolean(localStorage.getItem("isAuth"))
  );
  const [renderCount, setRenderCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      setIsLoading(true);
      const data = await getDocs(q);
      setNews(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    };

    getNews();
  }, [renderCount]);
  // --------

  // get post from firestore based on postID set state according to setState
  const getPost = async (
    setState: (data: DocumentData) => void,
    postID: string
  ) => {
    setIsLoading(true);
    const docRef = doc(db, "news", postID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setState(docSnap.data());
      setIsLoading(false);
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      setIsLoading(false);
    }
  };

  return (
    <ChakraProvider>
      <AppContext.Provider
        value={{
          isAuth,
          setIsAuth,
          isLoading,
          setIsLoading,
          renderCount,
          setRenderCount,
          news,
          navigate,
          getPost,
        }}
      >
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
          <Route path="/edit-post" element={<CreatePost forEdit={true} />} />
          <Route path="/add-teacher" element={<AddTeacher />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </ChakraProvider>
  );
}

export default App;
