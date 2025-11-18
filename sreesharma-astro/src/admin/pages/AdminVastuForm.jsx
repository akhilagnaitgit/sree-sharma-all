// AdminVastuForm.jsx
import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import api from "../../api/axiosConfig";

export default function AdminVastuForm({ show, onHide, item = null, onSaved }) {
  const [form, setForm] = useState({
    slug: "",
    title: "",
    img: "",
    price: "",
    rating: "",
    participants: "",
    duration: "",
    description: "",
    whyPerform: "",
    benefits: "", // textarea JSON (one-per-line or JSON array)
    programDetails: "",
    prasadam: "",
    otherInfo: "",
  });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (item) {
      setForm({
        slug: item.slug ?? "",
        title: item.title ?? "",
        img: item.img ?? "",
        price: item.price ?? "",
        rating: item.rating ?? "",
        participants: item.participants ?? "",
        duration: item.duration ?? "",
        description: item.description ?? "",
        whyPerform: item.whyPerform ?? "",
        benefits: (item.benefits && Array.isArray(item.benefits)) ? item.benefits.join("\n") : "",
        programDetails: (item.programDetails && Array.isArray(item.programDetails)) ? item.programDetails.join("\n") : "",
        prasadam: item.prasadam ?? "",
        otherInfo: item.otherInfo ?? "",
      });
    } else {
      // reset
      setForm({
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
  }, [item, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const parseTextareaToArray = (text) => {
    if (!text) return [];
    // If JSON array string provided, try parse first
    try {
      const trimmed = text.trim();
      if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
        const parsed = JSON.parse(trimmed);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (err) {
      // ignore and fallback to line-split
    }
    // split by newline and filter empty lines
    return text.split("\n").map((s) => s.trim()).filter(Boolean);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    // prepare payload
    const payload = {
      slug: form.slug.trim(),
      title: form.title.trim(),
      img: form.img.trim(),
      price: form.price,
      rating: form.rating ? Number(form.rating) : null,
      participants: form.participants,
      duration: form.duration,
      description: form.description,
      whyPerform: form.whyPerform,
      benefits: parseTextareaToArray(form.benefits),
      programDetails: parseTextareaToArray(form.programDetails),
      prasadam: form.prasadam,
      otherInfo: form.otherInfo,
    };

    try {
      if (item && item.id) {
        await api.put(`/vastu/${item.id}`, payload);
        alert("Vastu item updated");
      } else {
        await api.post("/vastu", payload);
        alert("Vastu item added");
      }
      onSaved && onSaved();
    } catch (err) {
      console.error("Save error:", err);
      alert("Failed to save. Check console.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{item ? "Edit Vastu Item" : "Add New Vastu Item"}</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <div className="row g-3">
            <div className="col-md-6">
              <Form.Group className="mb-2">
                <Form.Label>Title *</Form.Label>
                <Form.Control name="title" value={form.title} onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Slug *</Form.Label>
                <Form.Control name="slug" value={form.slug} onChange={handleChange} required />
                <Form.Text className="text-muted">Unique slug used in URLs (no spaces)</Form.Text>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Image URL</Form.Label>
                <Form.Control name="img" value={form.img} onChange={handleChange} />
                {form.img && (
                  <div className="mt-2 text-center">
                    <img src={form.img} alt="preview" style={{ maxWidth: "100%", height: 120, objectFit: "cover", borderRadius: 6, border: "1px solid #ddd" }} />
                  </div>
                )}
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Price</Form.Label>
                <Form.Control name="price" value={form.price} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Rating</Form.Label>
                <Form.Control name="rating" value={form.rating} onChange={handleChange} type="number" step="0.1" min="0" max="5" />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Duration</Form.Label>
                <Form.Control name="duration" value={form.duration} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Participants</Form.Label>
                <Form.Control name="participants" value={form.participants} onChange={handleChange} />
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group className="mb-2">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={4} name="description" value={form.description} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Why Perform</Form.Label>
                <Form.Control as="textarea" rows={3} name="whyPerform" value={form.whyPerform} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Prasadam</Form.Label>
                <Form.Control name="prasadam" value={form.prasadam} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Other Info</Form.Label>
                <Form.Control as="textarea" rows={2} name="otherInfo" value={form.otherInfo} onChange={handleChange} />
              </Form.Group>
            </div>

            <div className="col-12">
              <Form.Group className="mb-2">
                <Form.Label>Benefits (one per line OR JSON array)</Form.Label>
                <Form.Control as="textarea" rows={3} name="benefits" value={form.benefits} onChange={handleChange} placeholder="e.g. Benefit one\nBenefit two" />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Program Details (one per line OR JSON array)</Form.Label>
                <Form.Control as="textarea" rows={3} name="programDetails" value={form.programDetails} onChange={handleChange} placeholder="e.g. Step 1\nStep 2" />
              </Form.Group>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide} disabled={saving}>Cancel</Button>
          <Button type="submit" variant="success" disabled={saving}>
            {saving ? "Saving..." : item ? "Update" : "Save"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
