import { useAuth } from "@/ComponentProject/Context/AuthContext";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "./Spinner";

function PublicRoute({ children }) {
  const { CurrentUser, Loading } = useAuth();

  if (Loading) return <LoadingSpinner />;

  if (CurrentUser) {
    return <Navigate to={"/"} replace />;
  }

  return children;
}

export default PublicRoute;
