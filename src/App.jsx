import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import News from "./pages/News";
import Profil from "./pages/Profil";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/news" element={<News />} />
          <Route path="/article" element={<Article />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
