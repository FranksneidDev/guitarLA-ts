import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";  // Asegúrate de que el archivo está en la carpeta correcta
import App from "./App";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
