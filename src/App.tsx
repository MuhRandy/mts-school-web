"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Article from "./pages/Article";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Footer from "./components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import NewsAndArticles from "./pages/NewsAndArticles";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/news" element={<NewsAndArticles />} />
          <Route path="/article" element={<Article />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
