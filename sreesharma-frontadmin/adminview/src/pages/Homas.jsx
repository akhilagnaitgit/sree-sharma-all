// import React, { useEffect, useState } from "react";
// import AdminLayout from "../components/AdminLayout";
// import api from "../api/axiosConfig";
// import HomaForm from "../components/HomaForm";
// import "../styles/homas.css";

// export default function Homas() {
//   const [homas, setHomas] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [selected, setSelected] = useState(null);

//   const fetchHomas = async () => {
//     const res = await api.get("/homas");
//     setHomas(res.data);
//   };

//   useEffect(() => {
//     fetchHomas();
//   }, []);

//   return (
//     <AdminLayout>
//       <div className="mh-header">
//         <h2>Manage Homas</h2>
//         <button className="mh-add-btn" onClick={() => {setSelected(null); setShowForm(true);}}>
//           + Add Homa
//         </button>
//       </div>

//       <div className="mh-container">
//       <table className="mh-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Title</th>
//             <th>Slug</th>
//             <th>Price</th>
//             <th>Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {homas.map((h) => (
//             <tr key={h.id}>
//               <td>{h.id}</td>
//               <td>{h.title}</td>
//               <td>{h.slug}</td>
//               <td>{h.price}</td>
//               <td>
//                 <button
//                   className="mh-edit"
//                   onClick={() => { setSelected(h); setShowForm(true); }}
//                 >
//                   Edit
//                 </button>
//                 <button className="mh-delete">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       </div>

//       {/* Modal Form */}
//       <HomaForm
//         show={showForm}
//         onHide={() => setShowForm(false)}
//         item={selected}
//         refresh={fetchHomas}
//       />
//     </AdminLayout>
//   );
// }


// src/pages/Homas.jsx
import React, { useEffect, useMemo, useState } from "react";
import AdminLayout from "../components/AdminLayout";
import api from "../api/axiosConfig";
import HomaForm from "../components/HomaForm";
import "../styles/homas.css";
import { Modal, Button } from "react-bootstrap";

export default function Homas() {
  const [homas, setHomas] = useState([]);
  const [loading, setLoading] = useState(false);

  // modals & selections
  const [showForm, setShowForm] = useState(false);
  const [selected, setSelected] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
  const [toDelete, setToDelete] = useState(null);

  // search + pagination
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 10;

  const fetchHomas = async () => {
    setLoading(true);
    try {
      const res = await api.get("/homas");
      setHomas(res.data || []);
    } catch (err) {
      console.error("fetchHomas", err);
      setHomas([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomas();
  }, []);

  // filter results based on query (title/slug)
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return homas;
    return homas.filter(
      (h) =>
        (h.title || "").toLowerCase().includes(q) ||
        (h.slug || "").toLowerCase().includes(q) ||
        (h.description || "").toLowerCase().includes(q)
    );
  }, [homas, query]);

  // pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const current = filtered.slice((page - 1) * perPage, page * perPage);

  const openAdd = () => {
    setSelected(null);
    setShowForm(true);
  };
  const openEdit = (h) => {
    setSelected(h);
    setShowForm(true);
  };

  const confirmDelete = (h) => {
    setToDelete(h);
    setShowDelete(true);
  };

  const doDelete = async () => {
    if (!toDelete) return;
    try {
      await api.delete(`/homas/${toDelete.id}`);
      setShowDelete(false);
      setToDelete(null);
      // optimistic update
      setHomas((prev) => prev.filter((p) => p.id !== toDelete.id));
    } catch (err) {
      console.error("delete", err);
      alert("Failed to delete");
    }
  };

  return (
    <AdminLayout>
      <div className="mh-header">
        <h2>Manage Homas</h2>

        <div className="mh-controls">
          <input
            className="mh-search"
            placeholder="Search by title, slug or description..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
          />
          <button className="mh-add-btn" onClick={openAdd}>
            + Add Homa
          </button>
        </div>
      </div>

      <div className="mh-container">
        {loading ? (
          <div className="mh-loading">Loading…</div>
        ) : (
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
              {current.map((h) => (
                <tr key={h.id}>
                  <td>{h.id}</td>
                  <td>{h.title}</td>
                  <td>{h.slug}</td>
                  <td>{h.price}</td>
                  <td>
                    <button className="mh-edit" onClick={() => openEdit(h)}>
                      Edit
                    </button>
                    <button className="mh-delete" onClick={() => confirmDelete(h)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {current.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center", padding: 30 }}>
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* pagination */}
      <div className="mh-pagination">
        <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>
          Prev
        </button>
        <span>
          Page {page} / {totalPages}
        </span>
        <button disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>
          Next
        </button>
      </div>

      {/* Homa Form modal */}
      <HomaForm
        show={showForm}
        onHide={() => setShowForm(false)}
        item={selected}
        refresh={fetchHomas}
      />

      {/* Delete confirmation modal */}
      <Modal show={showDelete} onHide={() => setShowDelete(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Homa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete <strong>{toDelete?.title}</strong>?
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
