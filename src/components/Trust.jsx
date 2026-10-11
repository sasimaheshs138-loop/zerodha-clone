const features = [
  {
    title: "Simple Platform",
    description:
      "Explore financial products through a clean and simple interface.",
  },
  {
    title: "Accessible Tools",
    description:
      "Find useful information and tools for exploring investments.",
  },
  {
    title: "Learning Resources",
    description:
      "Understand financial markets and different investment options.",
  },
];

function Trust() {
  return (
    <section className="trust section" id="trust">
      <h2>Everything you need to get started</h2>

      <p className="section-description">
        Discover tools and resources designed for investors.
      </p>

      <div className="trust-grid">
        {features.map((feature) => (
          <div className="trust-card" key={feature.title}>
            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trust;