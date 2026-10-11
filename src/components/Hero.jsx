function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Invest in everything</h1>

        <p>
          Online platform to invest in stocks, mutual funds,
          and more.
        </p>

        <a href="#signup" className="primary-button">
          Sign up for free
        </a>
      </div>

      <div className="hero-image">
        <img
          src="https://zerodha.com/static/images/landing.png"
          alt="Investment platform illustration"
        />
      </div>
    </section>
  );
}

export default Hero;