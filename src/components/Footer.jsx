function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div>
          <h3 className="footer-logo">ZERODHA</h3>

          <p>
            A student project demonstrating a responsive
            stockbroker landing page.
          </p>
        </div>

        <div>
          <h4>Explore</h4>

          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#trust">About</a>
        </div>

        <div>
          <h4>Information</h4>

          <a href="#footer">Contact</a>
          <a href="#footer">Privacy</a>
          <a href="#footer">Terms</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Zerodha Clone | Student Project</p>
      </div>
    </footer>
  );
}

export default Footer;