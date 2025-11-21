import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./auth.css";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const next = new URLSearchParams(location.search).get("next") || "/";

  const [form, setForm] = useState({ login: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/user/login", form);
      console.log("Login Response:", res.data);
      localStorage.setItem("userToken", res.data.token);
      localStorage.setItem("userData", JSON.stringify(res.data.user));

      navigate(next);
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="login-wrapper">
      <form className="login-box" onSubmit={handleSubmit}>
        <h2>User Login</h2>

        {error && <p className="error-msg">{error}</p>}

        <input
          type="text"
          name="login"
          placeholder="Email / Phone / Username"
          value={form.login}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p className="small-text">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
}
