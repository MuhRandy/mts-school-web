import { Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import CreatePost from "./pages/CreatePost";
import Footer from "./components/Footer";
import SinglePost from "./pages/SinglePost";
import AddTeacher from "./pages/AddTeacher";
import News from "./pages/News";
import { AppProvider } from "./services/state/AppProvider";

function App() {
  return (
    <ChakraProvider>
      <AppProvider>
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
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;
