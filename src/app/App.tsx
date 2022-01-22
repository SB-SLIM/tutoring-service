import React from "react";
import "../scss/main.scss";
import { Header, Footer } from "./layouts";
import { About, Home, OnBoarding } from "./pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="grid">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/on-boarding" element={<OnBoarding />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
