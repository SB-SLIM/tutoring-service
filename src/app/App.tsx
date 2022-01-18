import React from "react";
import "../scss/main.scss";
import { Header, Footer } from "./layouts";
import { About, Home } from "./pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="grid">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
