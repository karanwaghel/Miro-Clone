import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/DashBoardPages/Home";
import NotFound from "./Pages/AuthPages/NotFound";
import LogInPage from "./Pages/AuthPages/LogIn";
import SignIn from "./Pages/AuthPages/Signin";
import ProtectedRoute from "./Pages/AuthPages/ProtectedRoute";
import { Toaster } from "./components/ui/sonner";
import ForgotPassword from "./Pages/AuthPages/ForgotPassword";
import PublicRoute from "./Pages/AuthPages/PublicRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LogInPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <PublicRoute>
                <SignIn />
              </PublicRoute>
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
