import { UserProvider } from "app/context/user.Context";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
