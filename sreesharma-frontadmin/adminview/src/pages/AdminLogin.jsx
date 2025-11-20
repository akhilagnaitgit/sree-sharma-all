import React, { useState } from "react";
import api from "../api/axiosConfig";

export default function AdminLogin() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const res = await api.post("/admin/login", { login, password });
      localStorage.setItem("adminToken", res.data.token);
      localStorage.setItem("adminData", JSON.stringify(res.data.admin));
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Invalid login");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>

          <input
            placeholder="Email, Phone or Username"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
