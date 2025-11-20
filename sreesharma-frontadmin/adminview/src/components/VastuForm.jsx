import React, { useEffect, useState } from "react";
import { Modal, Button, Form, ProgressBar } from "react-bootstrap";
import api from "../api/axiosConfig";

export default function VastuForm({ show, onHide, item, refresh }) {
  const empty = {
    title: "",
    slug: "",
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
  };

  const [form, setForm] = useState(empty);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (item) {
      setForm({
        ...empty,
        ...item,
        benefits: (item.benefits || []).join("\n"),
        programDetails: (item.programDetails || []).join("\n"),
      });
    } else {
      setForm(empty);
    }
  }, [item, show]);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleFile = (e) => {
    if (e.target.files?.[0]) setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) return alert("Select a file.");
    const fd = new FormData();
    fd.append("file", file);

    try {
      setUploading(true);
      const res = await api.post("/upload", fd, {
        onUploadProgress: (evt) =>
          setProgress(Math.round((evt.loaded / evt.total) * 100)),
      });

      if (res?.data?.url) setForm((p) => ({ ...p, img: res.data.url }));
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  const split = (txt) =>
    txt.split("\n").map((s) => s.trim()).filter(Boolean);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      benefits: split(form.benefits),
      programDetails: split(form.programDetails),
    };

    if (item) await api.put(`/vastu/${item.id}`, payload);
    else await api.post("/vastu", payload);

    refresh();
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{item ? "Edit Vastu" : "Add Vastu"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <div className="row g-3">
            
            <div className="col-md-6">
              <Form.Group className="mb-2">
                <Form.Label>Title *</Form.Label>
                <Form.Control name="title" value={form.title} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Slug *</Form.Label>
                <Form.Control name="slug" value={form.slug} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Image URL</Form.Label>
                <Form.Control name="img" value={form.img} onChange={handleChange} />
              </Form.Group>

              <div className="mb-2">
                <Form.Label>Upload Image</Form.Label>
                <div className="d-flex gap-2">
                  <Form.Control type="file" onChange={handleFile} />
                  <Button onClick={uploadFile} disabled={uploading}>
                    Upload
                  </Button>
                </div>
                {uploading && <ProgressBar now={progress} className="mt-2" />}
              </div>

              {form.img && (
                <img
                  src={form.img}
                  alt=""
                  style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 6 }}
                />
              )}

              <Form.Group className="mb-2">
                <Form.Label>Price</Form.Label>
                <Form.Control name="price" value={form.price} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Rating</Form.Label>
                <Form.Control name="rating" value={form.rating} onChange={handleChange} />
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group className="mb-2">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} name="description" value={form.description} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Why Perform</Form.Label>
                <Form.Control as="textarea" rows={2} name="whyPerform" value={form.whyPerform} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Benefits</Form.Label>
                <Form.Control as="textarea" rows={3} name="benefits" value={form.benefits} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Program Details</Form.Label>
                <Form.Control as="textarea" rows={3} name="programDetails" value={form.programDetails} onChange={handleChange} />
              </Form.Group>
            </div>
          
          </div>

          <Button type="submit" variant="success" className="mt-3">
            {item ? "Update" : "Save"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
