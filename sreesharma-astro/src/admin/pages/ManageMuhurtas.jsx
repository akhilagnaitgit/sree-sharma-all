import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import api from "../../api/axiosConfig";
import { Modal, Button, Form } from "react-bootstrap";

const ManageMuhurtas = () => {
  const [muhurtas, setMuhurtas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editMuhurta, setEditMuhurta] = useState(null);
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    img: "",
    price: "",
    rating: "",
    participants: "",
    duration: "",
    description: "",
    whyPerform: "",
    benefits: "",
    programDetails: "",
    prasadam: "",
    otherInfo: "",
  });

  const fetchMuhurtas = async () => {
    try {
      const res = await api.get("/muhurta");
      setMuhurtas(res.data);
    } catch (error) {
      console.error("Error fetching muhurtas:", error);
    }
  };

  useEffect(() => {
    fetchMuhurtas();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleShow = (muhurta = null) => {
    if (muhurta) {
      setEditMuhurta(muhurta);
      setFormData({
        ...muhurta,
        benefits: (muhurta.benefits || []).join(", "),
        programDetails: (muhurta.programDetails || []).join(", "),
      });
    } else {
      setEditMuhurta(null);
      setFormData({
        slug: "",
        title: "",
        img: "",
        price: "",
        rating: "",
        participants: "",
        duration: "",
        description: "",
        whyPerform: "",
        benefits: "",
        programDetails: "",
        prasadam: "",
        otherInfo: "",
      });
    }
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      benefits: formData.benefits.split(",").map((i) => i.trim()).filter(Boolean),
      programDetails: formData.programDetails.split(",").map((i) => i.trim()).filter(Boolean),
    };
    try {
      if (editMuhurta) {
        await api.put(`/muhurta/${editMuhurta.id}`, payload);
        alert("✅ Muhurta updated successfully!");
      } else {
        await api.post("/muhurta", payload);
        alert("✅ Muhurta added successfully!");
      }
      setShowModal(false);
      fetchMuhurtas();
    } catch (error) {
      console.error("Error saving muhurta:", error);
      alert("❌ Failed to save muhurta.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this muhurta?")) return;
    try {
      await api.delete(`/muhurta/${id}`);
      alert("🗑️ Deleted successfully!");
      fetchMuhurtas();
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  return (
    <AdminLayout>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Manage Muhurtas</h3>
        <Button variant="primary" onClick={() => handleShow()}>
          + Add New
        </Button>
      </div>

      {/* ✅ Table */}
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {muhurtas.map((m) => (
              <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.title}</td>
                <td>{m.slug}</td>
                <td>{m.price}</td>
                <td>{m.rating}</td>
                <td>{m.duration}</td>
                <td>{m.participants}</td>
                <td>
                  <Button variant="warning" size="sm" className="me-2" onClick={() => handleShow(m)}>
                    Edit
                  </Button>
                  <Button variant="danger" size="sm" onClick={() => handleDelete(m.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{editMuhurta ? "Edit Muhurta" : "Add Muhurta"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Title</Form.Label>
              <Form.Control name="title" value={formData.title} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Slug</Form.Label>
              <Form.Control name="slug" value={formData.slug} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Price</Form.Label>
              <Form.Control name="price" value={formData.price} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Rating</Form.Label>
              <Form.Control name="rating" value={formData.rating} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Benefits (comma separated)</Form.Label>
              <Form.Control
                name="benefits"
                value={formData.benefits}
                onChange={handleChange}
                placeholder="e.g., Peace of mind, Health, Prosperity"
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Program Details (comma separated)</Form.Label>
              <Form.Control
                name="programDetails"
                value={formData.programDetails}
                onChange={handleChange}
                placeholder="e.g., Ganapati Puja, Sankalp, Homa"
              />
            </Form.Group>

            <div className="text-center mt-3">
              <Button type="submit" variant="success">
                {editMuhurta ? "Update" : "Save"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </AdminLayout>
  );
};

export default ManageMuhurtas;
