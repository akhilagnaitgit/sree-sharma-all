import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function CheckAuthRedirect() {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div className="p-5 text-center">Loading...</div>;

  // Not logged in → go to signin
  if (!user) return <Navigate to="/signin" replace />;

  // Logged in but user → homepage
  if (user.role === "user") return <Navigate to="/home" replace />;

  // Logged in admin → admin dashboard
  if (user.role === "admin") return <Navigate to="/admin" replace />;

  return null;
}
