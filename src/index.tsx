import { TeacherProvider } from "app/context/teatcher.Context";
import { UserProvider } from "app/context/user.Context";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <TeacherProvider>
          <App />
        </TeacherProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
