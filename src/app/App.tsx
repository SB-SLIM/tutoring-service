import React from "react";
import "../scss/main.scss";
import { Header, Footer } from "./layouts";
import { Home } from "./pages";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
