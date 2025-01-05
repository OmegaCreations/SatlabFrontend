import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import React from "react";
import Footer from "@/components/Footer/Footer";
import Article from "@/pages/Article/Article";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Redux provider */}
    {/* Routing for application */}

    <BrowserRouter>
      {/* Navbar for all routes */}
      <nav>
        <div className="navContainer">
          <Navbar />
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article/:id" element={<Article />} />
          {/* 
          
          <Route path="/resources" element={<Resources />} />
           */}
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </BrowserRouter>
  </StrictMode>
);
