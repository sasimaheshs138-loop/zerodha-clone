function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          ZERODHA
        </a>

        <div className="nav-links">
          <a href="#products">Products</a>
          <a href="#trust">About</a>
          <a href="#footer">Support</a>
          <a href="#signup" className="signup-link">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;