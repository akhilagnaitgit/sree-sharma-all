import { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import api from "../../api/axiosConfig";

export default function AddAdmin() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [msg, setMsg] = useState("");

  const change = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setMsg("");

    try {
      await api.post("/admin/add-admin", form);
      setMsg("Admin added successfully!");
    } catch {
      setMsg("Error adding admin");
    }
  }

  return (
    <AdminLayout>
      <h2>Add Admin</h2>

      {msg && <div className="alert alert-info">{msg}</div>}

      <form onSubmit={submit} className="mt-4">
        <div className="mb-3">
          <label>Full Name</label>
          <input className="form-control" name="full_name" onChange={change} />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" name="email" type="email" onChange={change} />
        </div>

        <div className="mb-3">
          <label>Phone</label>
          <input className="form-control" name="phone" onChange={change} />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input className="form-control" type="password" name="password" onChange={change} />
        </div>

        <button className="btn btn-primary">Create Admin</button>
      </form>
    </AdminLayout>
  );
}
