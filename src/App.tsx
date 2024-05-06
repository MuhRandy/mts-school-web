import { useEffect, useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import CreatePost from "./pages/CreatePost";
import Footer from "./components/Footer";
import SinglePost from "./pages/SinglePost";
import AddTeacher from "./pages/AddTeacher";
import { AppContext, initialState } from "./utils/context";
import { reducer } from "./utils/reducer";
import { GlobalAction, GlobalStateAction, NewsType } from "./utils/type";
import News from "./pages/News";
import { getNews } from "./utils/utils";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { news, isLoading, isAuth, renderCount, wantToLogin } = state;

  const initialDispatchValue: GlobalAction = {
    type: "",
    newNews: news,
    newIsLoading: isLoading,
    newIsAuth: isAuth,
    newWantToLogin: wantToLogin,
  };

  const changeNews = (newNews: NewsType) => {
    dispatch({
      ...initialDispatchValue,
      type: "changed_news",
      newNews,
    });
  };

  const incrementRenderCount = () => {
    dispatch({
      ...initialDispatchValue,
      type: "incremented_render_count",
    });
  };

  const changeIsAuth = (newIsAuth: boolean) => {
    dispatch({
      ...initialDispatchValue,
      type: "changed_is_auth",
      newIsAuth,
    });
  };

  const changeIsLoading = (newIsLoading: boolean) => {
    dispatch({
      ...initialDispatchValue,
      type: "changed_is_loading",
      newIsLoading,
    });
  };

  const changeWantToLogin = (newWantToLogin: boolean) => {
    dispatch({
      ...initialDispatchValue,
      type: "changed_want_to_login",
      newWantToLogin,
    });
  };

  const navigate = useNavigate();

  const globalStateAction: GlobalStateAction = {
    changeNews,
    incrementRenderCount,
    changeIsAuth,
    changeIsLoading,
    changeWantToLogin,
    navigate,
  };

  useEffect(() => {
    getNews(changeIsLoading, changeNews);
  }, [renderCount]);

  return (
    <ChakraProvider>
      <AppContext.Provider
        value={{
          state,
          globalStateAction,
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
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/edit-post" element={<CreatePost forEdit={true} />} />
          <Route path="/add-teacher" element={<AddTeacher />} />
          <Route path="/edit-teacher" element={<AddTeacher forEdit={true} />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </ChakraProvider>
  );
}

export default App;
