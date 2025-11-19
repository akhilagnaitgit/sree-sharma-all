// import React, { useEffect, useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import api from "../api/axiosConfig";
// import "../styles/homaForm.css";

// export default function HomaForm({ show, onHide, item = null, refresh }) {
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

//   const handleChange = (e) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const convertList = (txt) =>
//     txt
//       .split("\n")
//       .map((t) => t.trim())
//       .filter(Boolean);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       ...form,
//       benefits: convertList(form.benefits),
//       programDetails: convertList(form.programDetails),
//     };

//     try {
//       if (item) {
//         await api.put(`/homas/${item.id}`, payload);
//         alert("Updated successfully!");
//       } else {
//         await api.post("/homas", payload);
//         alert("Homa added successfully!");
//       }

//       refresh();
//       onHide();
//     } catch (err) {
//       alert("Failed to save!");
//     }
//   };

//   return (
//     <Modal show={show} onHide={onHide} centered size="lg" className="homa-modal">
//       <Modal.Header closeButton>
//         <Modal.Title>{item ? "Edit Homa" : "Add Homa"}</Modal.Title>
//       </Modal.Header>

//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <div className="row g-3">

//             <div className="col-md-6">
//               <Form.Group className="mb-2">
//                 <Form.Label>Title *</Form.Label>
//                 <Form.Control name="title" value={form.title} onChange={handleChange} required />
//               </Form.Group>

//               <Form.Group className="mb-2">
//                 <Form.Label>Slug *</Form.Label>
//                 <Form.Control name="slug" value={form.slug} onChange={handleChange} required />
//               </Form.Group>

//               <Form.Group className="mb-2">
//                 <Form.Label>Image URL</Form.Label>
//                 <Form.Control name="img" value={form.img} onChange={handleChange} />
//               </Form.Group>

//               {form.img && (
//                 <img src={form.img} className="homa-img-preview" alt="" />
//               )}

//               <Form.Group className="mb-2">
//                 <Form.Label>Price</Form.Label>
//                 <Form.Control name="price" value={form.price} onChange={handleChange} />
//               </Form.Group>

//               <Form.Group className="mb-2">
//                 <Form.Label>Rating</Form.Label>
//                 <Form.Control name="rating" value={form.rating} onChange={handleChange} />
//               </Form.Group>
//             </div>

//             <div className="col-md-6">
//               <Form.Group className="mb-2">
//                 <Form.Label>Description</Form.Label>
//                 <Form.Control as="textarea" name="description" rows={3} value={form.description} onChange={handleChange} />
//               </Form.Group>

//               <Form.Group className="mb-2">
//                 <Form.Label>Why Perform</Form.Label>
//                 <Form.Control as="textarea" name="whyPerform" rows={2} value={form.whyPerform} onChange={handleChange} />
//               </Form.Group>

//               <Form.Group className="mb-2">
//                 <Form.Label>Benefits</Form.Label>
//                 <Form.Control as="textarea" name="benefits" rows={3} value={form.benefits} onChange={handleChange} />
//               </Form.Group>

//               <Form.Group className="mb-2">
//                 <Form.Label>Program Details</Form.Label>
//                 <Form.Control as="textarea" name="programDetails" rows={3} value={form.programDetails} onChange={handleChange} />
//               </Form.Group>
//             </div>
//           </div>

//           <Button type="submit" variant="success" className="mt-3">
//             {item ? "Update" : "Save"}
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// }

import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import api from "../api/axiosConfig";

export default function HomaForm({ show, onHide, item, refresh }) {

  const [form, setForm] = useState({
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
  }, [item, show]);

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const listify = (str) =>
    str.split("\n").map((x) => x.trim()).filter(Boolean);

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
    } catch (e) {
      alert("Failed to save homa.");
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered size="lg" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{item ? "Edit Homa" : "Add New Homa"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-2">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" value={form.title} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Slug</Form.Label>
            <Form.Control name="slug" value={form.slug} onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Image URL</Form.Label>
            <Form.Control name="img" value={form.img} onChange={handleChange} />
          </Form.Group>

          {form.img && (
            <img
              src={form.img}
              alt="preview"
              style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 6 }}
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

          <Form.Group className="mb-2">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" value={form.description} onChange={handleChange} />
          </Form.Group>

          <Button type="submit" variant="success">
            {item ? "Update" : "Save"}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
