import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Pages/DashBoardPages/Home";
import NotFound from "./Pages/AuthPages/NotFound";
import LogInPage from "./Pages/AuthPages/LogIn";
import SignIn from "./Pages/AuthPages/Signin";
import ProtectedRoute from "./Pages/AuthPages/ProtectedRoute";
import { Toaster } from "./components/ui/sonner";
import ForgotPassword from "./Pages/AuthPages/ForgotPassword";
import PublicRoutes from "./Pages/AuthPages/PublicRoutes";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
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
                <PublicRoutes>
                  <LogInPage />
                </PublicRoutes>
              }
            />
            <Route
              path="/signin"
              element={
                <PublicRoutes>
                  <SignIn />
                </PublicRoutes>
              }
            />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>

      <Toaster position="top-right" />
    </>
  );
}

export default App;
