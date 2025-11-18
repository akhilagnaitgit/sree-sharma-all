import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import api from "../api/axiosConfig";
import { useNavigate, Link } from "react-router-dom";

export default function Signin() {

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function submit(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/auth/signin", form);
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);

      if (res.data.user.role === "admin") navigate("/admin");
      else navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#f7f7ff" }}
    >
      <div className="card p-4 shadow-lg" style={{ width: "380px", borderRadius: "15px" }}>
        
        <h3 className="text-center mb-3" style={{ color: "#7a1fa2" }}>
          Sign In
        </h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={submit}>
          <label className="mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="form-control mb-3"
            onChange={change}
            required
          />

          <label className="mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control mb-3"
            onChange={change}
            required
          />

          <button
            className="btn w-100 mt-2"
            style={{
              background: "linear-gradient(90deg, #9c27b0, #e91e63)",
              color: "white",
              fontWeight: "bold",
              borderRadius: "8px"
            }}
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-3">
          Don't have an account?{" "}
          <Link to="/signup" className="fw-bold" style={{ color: "#9c27b0" }}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
