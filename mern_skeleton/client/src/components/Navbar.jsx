function Navbar({ currentPage, setCurrentPage }) {

  const handleSignOut = async () => {
    // Call backend (optional but correct)
    await fetch("http://localhost:3000/auth/signout", {
      method: "GET"
    });

    // Remove login token
    localStorage.removeItem("jwt");

    // Redirect to Sign In page
    setCurrentPage("signin");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <img src="/src/assets/logo (3).png" alt="Logo" className="logo" />
        <div className="logo-shape"></div>
        <ul className="nav-menu">
          {['home', 'about', 'projects', 'education', 'services', 'contact', 'signin', 'signup'].map(page => (
            <li key={page} className="nav-item">
              <button
                className={`nav-link ${currentPage === page ? 'active' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            </li>
          ))}

          {/* SIGN OUT BUTTON */}
          <li className="nav-item">
            <button
              className="nav-link"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
