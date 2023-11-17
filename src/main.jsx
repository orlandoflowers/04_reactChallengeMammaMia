import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PizzaPageProvider } from "./context/MyContext.jsx";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <PizzaPageProvider>
          <App />
        </PizzaPageProvider>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
