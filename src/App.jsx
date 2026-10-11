import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Trust from "./components/Trust";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Products />

        <Trust />

        <section className="signup-section" id="signup">
          <h2>Start exploring today</h2>

          <p>
            Explore the different sections of our investment
            platform demonstration.
          </p>

          <a href="#home" className="primary-button">
            Back to top
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;