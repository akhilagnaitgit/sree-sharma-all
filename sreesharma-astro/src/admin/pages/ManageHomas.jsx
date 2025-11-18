// src/admin/pages/ManageHomas.jsx
import React, { useEffect, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import api from "../../api/axiosConfig";
import { Modal, Button, Form } from "react-bootstrap";

const ManageHomas = () => {
  const [homas, setHomas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editHoma, setEditHoma] = useState(null);
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
    prasadam: "",
    otherInfo: "",
    benefits: [],
    programDetails: [],
  });

  //  Fetch All Homas
  const fetchHomas = async () => {
    try {
      const res = await api.get("/homas");
      setHomas(res.data);
    } catch (error) {
      console.error("Error fetching homas:", error);
    }
  };

  useEffect(() => {
    fetchHomas();
  }, []);

  //  Handle Form Input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  //  Open Modal (Add/Edit)
  const handleShow = (homa = null) => {
    if (homa) {
      setEditHoma(homa);
      setFormData(homa);
    } else {
      setEditHoma(null);
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
        prasadam: "",
        otherInfo: "",
        benefits: [],
        programDetails: [],
      });
    }
    setShowModal(true);
  };

  //  Add or Update Homa
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editHoma) {
        await api.put(`/homas/${editHoma.id}`, formData);
        alert(" Homa updated successfully!");
      } else {
        await api.post("/homas", formData);
        alert(" Homa added successfully!");
      }
      setShowModal(false);
      fetchHomas();
    } catch (error) {
      console.error("Error saving homa:", error);
      alert(" Failed to save homa. Check console for details.");
    }
  };

  //  Delete Homa
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this homa?")) return;
    try {
      await api.delete(`/homas/${id}`);
      alert(" Homa deleted successfully!");
      fetchHomas();
    } catch (error) {
      console.error("Error deleting homa:", error);
      alert(" Failed to delete homa.");
    }
  };

  return (
    <AdminLayout>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Manage Homas</h3>
        <Button variant="primary" onClick={() => handleShow()}>+ Add New</Button>
      </div>

      {/*  Table */}
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
            {homas.map((h) => (
              <tr key={h.id}>
                <td>{h.id}</td>
                <td>{h.title}</td>
                <td>{h.slug}</td>
                <td>{h.price}</td>
                <td>{h.rating}</td>
                <td>{h.duration}</td>
                <td>{h.participants}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleShow(h)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(h.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/*  Modal */}
<Modal show={showModal} onHide={() => setShowModal(false)} centered>
  <Modal.Header closeButton>
    <Modal.Title>{editHoma ? "Edit Homa" : "Add New Homa"}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label>Title</Form.Label>
        <Form.Control
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Slug</Form.Label>
        <Form.Control
          name="slug"
          value={formData.slug}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          name="img"
          value={formData.img}
          onChange={handleChange}
          placeholder="Enter or paste image URL"
        />
        {formData.img && (
          <div className="mt-2 text-center">
            <img
              src={formData.img}
              alt="Preview"
              style={{
                maxWidth: "100%",
                height: "120px",
                objectFit: "cover",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        )}
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Price</Form.Label>
        <Form.Control
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Duration</Form.Label>
        <Form.Control
          name="duration"
          value={formData.duration}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Participants</Form.Label>
        <Form.Control
          name="participants"
          value={formData.participants}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </Form.Group>

      <div className="text-center mt-3">
        <Button type="submit" variant="success">
          {editHoma ? "Update" : "Save"}
        </Button>
      </div>
    </Form>
  </Modal.Body>
</Modal>

    </AdminLayout>
  );
};

export default ManageHomas;
