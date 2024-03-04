import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
const rootContainer = document.querySelector("#root");

if (rootContainer === null) throw new Error("Can't find root container");

const root = createRoot(rootContainer);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
