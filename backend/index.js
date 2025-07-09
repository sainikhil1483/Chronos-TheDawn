import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";
const response = await fetch(
  `https://chronos-thedawn-backend.onrender.com${endpoint}`,
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }
);

await fetch(
  `https://chronos-thedawn-backend.onrender.com/api/auth/stats/${userId}`,
  {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }
);
