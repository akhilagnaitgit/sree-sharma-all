import { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import api from "../../api/axiosConfig";

export default function AdminList() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => { load(); }, []);

  async function load() {
    const res = await api.get("/admin/admins");
    setAdmins(res.data);
  }

  return (
    <AdminLayout>
      <h2>Admins</h2>

      <table className="table mt-4 table-striped">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th>
            <th>Signup</th><th>Last Login</th><th>Status</th>
          </tr>
        </thead>

        <tbody>
          {admins.map((u) => (
            <tr key={u.id}>
              <td>{u.full_name}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
              <td>{new Date(u.created_at).toLocaleString()}</td>
              <td>{u.last_login ? new Date(u.last_login).toLocaleString() : "Never"}</td>
              <td>
                {u.is_online ? (
                  <span className="text-success fw-bold">Online</span>
                ) : (
                  <span className="text-muted">Offline</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
