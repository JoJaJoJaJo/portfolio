import React, { useState } from "react";

function SignUp({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (!response.ok) {
      alert("Error: " + data.error);
      return;
    }

    alert("Account created successfully! Please sign in.");
    setCurrentPage("signin");

  } catch (err) {
    console.error(err);
    alert("Sign up failed.");
  }
};


  return (
    <div className="page">
      <h1>Create Account</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Role</label>
          <select name="role" value={formData.role} onChange={handleChange}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="btn primary">
          Sign Up
        </button>
      </form>

      <p>
        Already have an account?{" "}
        <span
          className="link-text"
          onClick={() => setCurrentPage("signin")}
          style={{ cursor: "pointer" }}
        >
          Sign In
        </span>
      </p>
    </div>
  );
}

export default SignUp;
