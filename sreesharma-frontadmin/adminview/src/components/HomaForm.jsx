// src/components/HomaForm.jsx
import React, { useEffect, useState } from "react";
import { Modal, Button, Form, ProgressBar } from "react-bootstrap";
import api from "../api/axiosConfig";

export default function HomaForm({ show, onHide, item = null, refresh }) {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    img: "", // final image URL
    price: "",
    rating: "",
    participants: "",
    duration: "",
    description: "",
    whyPerform: "",
    benefits: "",
    programDetails: "",
  });

  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (item) {
      setForm({
        title: item.title || "",
        slug: item.slug || "",
        img: item.img || "",
        price: item.price || "",
        rating: item.rating || "",
        participants: item.participants || "",
        duration: item.duration || "",
        description: item.description || "",
        whyPerform: item.whyPerform || "",
        benefits: (item.benefits || []).join("\n"),
        programDetails: (item.programDetails || []).join("\n"),
      });
    } else {
      setForm({
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
      });
    }
    setFile(null);
    setUploading(false);
    setProgress(0);
  }, [item, show]);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  // handle file selection
  const handleFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  // upload file to server (endpoint should accept FormData and return { url })
  const uploadFile = async () => {
    if (!file) return alert("Choose a file first.");
    const fd = new FormData();
    fd.append("file", file);

    try {
      setUploading(true);
      setProgress(0);

      const res = await api.post("/upload", fd, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (evt) => {
          if (evt.total) setProgress(Math.round((evt.loaded / evt.total) * 100));
        },
      });

      // server must return image url in res.data.url
      if (res?.data?.url) {
        setForm((p) => ({ ...p, img: res.data.url }));
        setFile(null);
      } else {
        alert("Upload succeeded but server did not return a url.");
      }
    } catch (err) {
      console.error("uploadFile", err);
      alert("Upload failed");
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  const listify = (txt) => txt.split("\n").map((s) => s.trim()).filter(Boolean);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      benefits: listify(form.benefits),
      programDetails: listify(form.programDetails),
    };

    try {
      if (item) {
        await api.put(`/homas/${item.id}`, payload);
      } else {
        await api.post("/homas", payload);
      }
      refresh();
      onHide();
    } catch (err) {
      console.error("save", err);
      alert("Failed to save.");
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{item ? "Edit Homa" : "Add Homa"}</Modal.Title>
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
                <Form.Control
                  name="img"
                  value={form.img}
                  onChange={handleChange}
                  placeholder="Paste image URL or upload below"
                />
              </Form.Group>

              <div className="mb-2">
                <Form.Label>Upload Image</Form.Label>
                <div className="d-flex gap-2 align-items-center">
                  <Form.Control type="file" onChange={handleFile} />
                  <Button variant="outline-primary" onClick={uploadFile} disabled={uploading}>
                    {uploading ? "Uploading..." : "Upload"}
                  </Button>
                </div>
                {uploading && <ProgressBar now={progress} className="mt-2" />}
              </div>

              {form.img && (
                <div className="mb-2">
                  <img src={form.img} alt="preview" style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: 6 }} />
                </div>
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
                <Form.Control as="textarea" name="description" rows={3} value={form.description} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Why Perform</Form.Label>
                <Form.Control as="textarea" name="whyPerform" rows={2} value={form.whyPerform} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Benefits (one per line)</Form.Label>
                <Form.Control as="textarea" name="benefits" rows={3} value={form.benefits} onChange={handleChange} />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Program Details (one per line)</Form.Label>
                <Form.Control as="textarea" name="programDetails" rows={3} value={form.programDetails} onChange={handleChange} />
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




// import React, { useEffect, useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import api from "../api/axiosConfig";

// export default function HomaForm({ show, onHide, item, refresh }) {

//   const [form, setForm] = useState({
//     title: "",
//     slug: "",
//     img: "",
//     price: "",
//     rating: "",
//     participants: "",
//     duration: "",
//     description: "",
//     whyPerform: "",
//     benefits: "",
//     programDetails: "",
//   });

//   useEffect(() => {
//     if (item) {
//       setForm({
//         title: item.title || "",
//         slug: item.slug || "",
//         img: item.img || "",
//         price: item.price || "",
//         rating: item.rating || "",
//         participants: item.participants || "",
//         duration: item.duration || "",
//         description: item.description || "",
//         whyPerform: item.whyPerform || "",
//         benefits: (item.benefits || []).join("\n"),
//         programDetails: (item.programDetails || []).join("\n"),
//       });
//     } else {
//       setForm({
//         title: "",
//         slug: "",
//         img: "",
//         price: "",
//         rating: "",
//         participants: "",
//         duration: "",
//         description: "",
//         whyPerform: "",
//         benefits: "",
//         programDetails: "",
//       });
//     }
//   }, [item, show]);

//   const handleChange = (e) =>
//     setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

//   const listify = (str) =>
//     str.split("\n").map((x) => x.trim()).filter(Boolean);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       ...form,
//       benefits: listify(form.benefits),
//       programDetails: listify(form.programDetails),
//     };

//     try {
//       if (item) {
//         await api.put(`/homas/${item.id}`, payload);
//       } else {
//         await api.post("/homas", payload);
//       }

//       refresh();
//       onHide();
//     } catch (e) {
//       alert("Failed to save homa.");
//     }
//   };

//   return (
//     <Modal show={show} onHide={onHide} centered size="lg" backdrop="static">
//       <Modal.Header closeButton>
//         <Modal.Title>{item ? "Edit Homa" : "Add New Homa"}</Modal.Title>
//       </Modal.Header>

//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-2">
//             <Form.Label>Title</Form.Label>
//             <Form.Control name="title" value={form.title} onChange={handleChange} />
//           </Form.Group>

//           <Form.Group className="mb-2">
//             <Form.Label>Slug</Form.Label>
//             <Form.Control name="slug" value={form.slug} onChange={handleChange} />
//           </Form.Group>

//           <Form.Group className="mb-2">
//             <Form.Label>Image URL</Form.Label>
//             <Form.Control name="img" value={form.img} onChange={handleChange} />
//           </Form.Group>

//           {form.img && (
//             <img
//               src={form.img}
//               alt="preview"
//               style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 6 }}
//             />
//           )}

//           <Form.Group className="mb-2">
//             <Form.Label>Price</Form.Label>
//             <Form.Control name="price" value={form.price} onChange={handleChange} />
//           </Form.Group>

//           <Form.Group className="mb-2">
//             <Form.Label>Rating</Form.Label>
//             <Form.Control name="rating" value={form.rating} onChange={handleChange} />
//           </Form.Group>

//           <Form.Group className="mb-2">
//             <Form.Label>Description</Form.Label>
//             <Form.Control as="textarea" rows={3} name="description" value={form.description} onChange={handleChange} />
//           </Form.Group>

//           <Button type="submit" variant="success">
//             {item ? "Update" : "Save"}
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// }
