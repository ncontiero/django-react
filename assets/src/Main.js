import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./containers/App";
import { darkTheme } from "@ace-ex/react";

const container = document.getElementById("react-app");
const html = document.querySelector("html");
html.setAttribute("class", darkTheme.className);

const root = createRoot(container);
root.render(<App />);
