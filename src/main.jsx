import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./ComponentProject/Context/AuthContext";
import WhiteBoardContextProvider from "./ComponentProject/Context/DashBoardContext";

createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <WhiteBoardContextProvider>
        <App />
      </WhiteBoardContextProvider>
    </AuthProvider>
  </>
);
