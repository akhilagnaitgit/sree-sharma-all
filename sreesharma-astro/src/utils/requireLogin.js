import { useNavigate } from "react-router-dom";

export default function useRequireLogin() {
  const navigate = useNavigate();

  return (callback) => {
    const token = localStorage.getItem("userToken");

    if (!token) {
      const next = window.location.pathname;
      navigate("/login?next=" + encodeURIComponent(next));
      return;
    }

    if (callback) callback();
  };
}
