import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import api from "../api/axiosConfig";
import HomaForm from "../components/HomaForm";
import "../styles/homas.css";

export default function Homas() {
  const [homas, setHomas] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(null);

  const fetchHomas = async () => {
    const res = await api.get("/homas");
    setHomas(res.data);
  };

  useEffect(() => {
    fetchHomas();
  }, []);

  return (
    <AdminLayout>
      <div className="mh-header">
        <h2>Manage Homas</h2>
        <button className="mh-add-btn" onClick={() => {setSelected(null); setShowForm(true);}}>
          + Add Homa
        </button>
      </div>

      <div className="mh-container">
      <table className="mh-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Slug</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {homas.map((h) => (
            <tr key={h.id}>
              <td>{h.id}</td>
              <td>{h.title}</td>
              <td>{h.slug}</td>
              <td>{h.price}</td>
              <td>
                <button
                  className="mh-edit"
                  onClick={() => { setSelected(h); setShowForm(true); }}
                >
                  Edit
                </button>
                <button className="mh-delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {/* Modal Form */}
      <HomaForm
        show={showForm}
        onHide={() => setShowForm(false)}
        item={selected}
        refresh={fetchHomas}
      />
    </AdminLayout>
  );
}
