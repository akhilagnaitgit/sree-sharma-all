import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div className="p-5 text-center">Loading...</div>;

  if (!user) return <Navigate to="/signin" replace />;

  return children;
}
