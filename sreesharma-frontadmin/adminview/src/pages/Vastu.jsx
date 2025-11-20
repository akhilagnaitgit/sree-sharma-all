import React, { useEffect, useState, useMemo } from "react";
import AdminLayout from "../components/AdminLayout";
import api from "../api/axiosConfig";
import VastuForm from "../components/VastuForm";
import { Modal, Button } from "react-bootstrap";
import "../styles/homas.css";

export default function Vastu() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(null);

  const [showDelete, setShowDelete] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  const fetchItems = async () => {
    const res = await api.get("/vastu");
    setItems(res.data || []);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return items.filter(
      (i) =>
        i.title?.toLowerCase().includes(q) ||
        i.slug?.toLowerCase().includes(q)
    );
  }, [query, items]);

  const confirmDelete = (item) => {
    setToDelete(item);
    setShowDelete(true);
  };

  const doDelete = async () => {
    await api.delete(`/vastu/${toDelete.id}`);
    setShowDelete(false);
    fetchItems();
  };

  return (
    <AdminLayout>
      <div className="mh-header">
        <h2>Manage Vastu</h2>

        <div className="mh-controls">
          <input
            className="mh-search"
            placeholder="Search Vastu..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            className="mh-add-btn"
            onClick={() => {
              setSelected(null);
              setShowForm(true);
            }}
          >
            + Add Vastu
          </button>
        </div>
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
            {filtered.map((v) => (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.title}</td>
                <td>{v.slug}</td>
                <td>{v.price}</td>
                <td>
                  <button className="mh-edit" onClick={() => { setSelected(v); setShowForm(true); }}>
                    Edit
                  </button>
                  <button className="mh-delete" onClick={() => confirmDelete(v)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={5} style={{ textAlign: "center", padding: 30 }}>
                  No Vastu Records Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <VastuForm
        show={showForm}
        onHide={() => setShowForm(false)}
        item={selected}
        refresh={fetchItems}
      />

      <Modal show={showDelete} onHide={() => setShowDelete(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Vastu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Delete <b>{toDelete?.title}</b>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDelete(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={doDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </AdminLayout>
  );
}
