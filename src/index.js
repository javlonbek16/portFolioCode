import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Analytics } from "@vercel/analytics/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Analytics
      beforeSend={(event) => {
        if (event.url.includes("localhost")) {
          return null;
        }
        return event;
      }}
    />
  </React.StrictMode>
);
reportWebVitals();
