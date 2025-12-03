import React, { useState } from "react";

function SignIn({ setCurrentPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:3000/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      alert("Sign in failed: " + data.error);
      return;
    }

    localStorage.setItem("jwt", JSON.stringify(data));

    alert("Signed in successfully!");
    setCurrentPage("home");
  } catch (err) {
    console.error(err);
    alert("Error signing in.");
  }
};


  return (
    <div className="page">
      <h1>Sign In</h1>

      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password *</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn primary">
          Sign In
        </button>
      </form>

      <p>
        Don't have an account?{" "}
        <span
          className="link-text"
          onClick={() => setCurrentPage("signup")}
          style={{ cursor: "pointer" }}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default SignIn;
