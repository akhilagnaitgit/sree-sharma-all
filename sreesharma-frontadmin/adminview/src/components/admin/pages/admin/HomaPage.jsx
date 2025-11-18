import React, { useEffect, useState } from "react";
import adminAxios from "../../utils/axiosAdmin";

const HomaPage = () => {
  const [homas, setHomas] = useState([]);
  const [loading, setLoading] = useState(true);

  // form states
  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    img: ""
  });

  const [editingId, setEditingId] = useState(null);

  // Fetch Homa Data
  const getHomas = async () => {
    try {
      const res = await adminAxios.get("/homa/all");
      setHomas(res.data);
    } catch (err) {
      console.log(err);
      alert("Error loading homa data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHomas();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or Update Homa
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await adminAxios.put(`/homa/update/${editingId}`, form);
        alert("Homa updated successfully");
      } else {
        await adminAxios.post("/homa/add", form);
        alert("Homa added successfully");
      }

      setForm({ title: "", slug: "", description: "", img: "" });
      setEditingId(null);
      getHomas();

    } catch (err) {
      console.log(err);
      alert("Failed to save homa");
    }
  };

  // Edit handler
  const handleEdit = (homa) => {
    setForm(homa);
    setEditingId(homa._id);
  };

  // Delete Homa
  const handleDelete = async (id) => {
    if (!window.confirm("Do you want to delete?")) return;

    try {
      await adminAxios.delete(`/homa/delete/${id}`);
      alert("Deleted successfully");
      getHomas();
    } catch (err) {
      console.log(err);
      alert("Failed to delete");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Homa Data</h1>
      <p>Manage all Homa related content.</p>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="admin-form">
        <h3>{editingId ? "Edit Homa" : "Add New Homa"}</h3>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={form.slug}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={form.img}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        ></textarea>

        <button type="submit">
          {editingId ? "Update Homa" : "Add Homa"}
        </button>
      </form>

      {/* TABLE */}
      <table className="admin-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Slug</th>
            <th>Description</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {homas.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.slug}</td>
              <td>{item.description?.slice(0, 60)}...</td>
              <td>
                {item.img ? (
                  <img src={item.img} alt="" width="60" />
                ) : (
                  "No Image"
                )}
              </td>
              <td>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button
                  onClick={() => handleDelete(item._id)}
                  style={{ background: "red", color: "white" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default HomaPage;
