import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import React from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Redux provider */}
    {/* Routing for application */}

    <BrowserRouter>
      {/* Navbar for all routes */}
      <div className="navContainer">
        <Navbar />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* 
          
          <Route path="/resources" element={<Resources />} />
          <Route path="/article/:id" element={<Article />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  </StrictMode>
);
