import React from "react";
import "../scss/main.scss";
import { Header, Footer } from "./layouts";
import { About, Home, OnBoarding, Login, FindTutor } from "./pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import PrivateRoute from "./pages/private.Route";

const App = () => {
  return (
    <div className="grid">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/on-boarding" element={<OnBoarding />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/find-tutor"
            element={<PrivateRoute component={FindTutor} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
