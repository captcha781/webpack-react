import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

import "./index.css";
import "./styles/main.scss";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
