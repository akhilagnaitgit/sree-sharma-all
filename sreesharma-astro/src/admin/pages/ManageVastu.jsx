import React, { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import { Link } from "react-router-dom";
import "../styles/manageVastu.css";

export default function ManageVastu() {
  const [vastu, setVastu] = useState([]);

  // Fetch Vastu from backend
  const fetchVastu = async () => {
    try {
      const res = await api.get("/vastu");
      setVastu(res.data);
    } catch (err) {
      console.error("Error fetching Vastu:", err);
    }
  };

  useEffect(() => {
    fetchVastu();
  }, []);

  // Delete handler
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this Vastu item?")) return;

    try {
      await api.delete(`/vastu/${id}`);
      fetchVastu(); // refresh
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Manage Vastu</h2>
        <Link to="/admin/vastu/add" className="btn btn-primary">Add New Vastu</Link>
      </div>

      {/* CARD GRID */}
      <div className="row g-4">
        {vastu.length === 0 && <p>No Vastu items found.</p>}

        {vastu.map((v) => (
          <div className="col-md-4 col-lg-3" key={v.id}>
            <div className="card shadow-sm h-100">

              <img
                src={v.image || "/no-image.png"}
                alt={v.title}
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title">{v.title}</h5>
                <p className="small text-muted">{v.price}</p>

                <p className="card-text" style={{ fontSize: "14px", height: "45px", overflow: "hidden" }}>
                  {v.description}
                </p>
              </div>

              <div className="card-footer d-flex justify-content-between">
                <Link to={`/admin/vastu/edit/${v.id}`} className="btn btn-sm btn-warning">
                  Edit
                </Link>
                <button onClick={() => handleDelete(v.id)} className="btn btn-sm btn-danger">
                  Delete
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
