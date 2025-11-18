import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import api from "../api/axiosConfig";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [error, setError] = useState("");

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await api.post("/auth/signup", form);

      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);

      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", background: "#f7f7ff" }}
    >
      <div className="card p-4 shadow-lg" style={{ width: "380px", borderRadius: "15px" }}>

        <h3 className="text-center mb-3" style={{ color: "#7a1fa2" }}>
          Create Account
        </h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={submit}>
          <label className="mb-1">Full Name</label>
          <input className="form-control mb-3" name="full_name" onChange={change} required />

          <label className="mb-1">Email</label>
          <input type="email" className="form-control mb-3" name="email" onChange={change} required />

          <label className="mb-1">Phone</label>
          <input className="form-control mb-3" name="phone" onChange={change} required />

          <label className="mb-1">Password</label>
          <input type="password" className="form-control mb-3" name="password" onChange={change} required />

          <button
            className="btn w-100 mt-2"
            style={{
              background: "linear-gradient(90deg, #9c27b0, #e91e63)",
              color: "white",
              fontWeight: "bold",
              borderRadius: "8px"
            }}
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/signin" className="fw-bold" style={{ color: "#9c27b0" }}>
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}
