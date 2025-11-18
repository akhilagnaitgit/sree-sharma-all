// AdminVastu.jsx
import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import api from "../../api/axiosConfig";
import AdminVastuForm from "./AdminVastuForm";
import { Button } from "react-bootstrap";

export default function AdminVastu() {
  const [vastuItems, setVastuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const fetchVastu = async () => {
    try {
      const res = await api.get("/vastu");
      setVastuItems(res.data || []);
    } catch (err) {
      console.error("Error fetching vastu items:", err);
      setVastuItems([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchVastu();
  }, []);

  const handleAddClick = () => {
    setEditItem(null);
    setShowForm(true);
  };

  const handleEditClick = (item) => {
    setEditItem(item);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      await api.delete(`/vastu/${id}`);
      fetchVastu();
      alert("Vastu item deleted.");
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete. See console.");
    }
  };

  const handleFormSaved = () => {
    setShowForm(false);
    setEditItem(null);
    fetchVastu();
  };

  return (
    <AdminLayout>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Manage Vastu</h3>
        <Button variant="primary" onClick={handleAddClick}>
          + Add New Vastu
        </Button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-light">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Slug</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Duration</th>
                <th>Participants</th>
                <th style={{ minWidth: 150 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vastuItems.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center">
                    No items found
                  </td>
                </tr>
              )}
              {vastuItems.map((v) => (
                <tr key={v.id}>
                  <td>{v.id}</td>
                  <td>{v.title}</td>
                  <td>{v.slug}</td>
                  <td>{v.price}</td>
                  <td>{v.rating ?? "-"}</td>
                  <td>{v.duration}</td>
                  <td>{v.participants}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => handleEditClick(v)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(v.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showForm && (
        <AdminVastuForm
          show={showForm}
          onHide={() => {
            setShowForm(false);
            setEditItem(null);
          }}
          item={editItem}
          onSaved={handleFormSaved}
        />
      )}
    </AdminLayout>
  );
}
