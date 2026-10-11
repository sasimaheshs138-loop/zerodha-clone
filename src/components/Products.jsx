const products = [
  {
    name: "Stocks",
    description: "Explore companies listed on stock exchanges.",
    icon: "📈",
  },
  {
    name: "Mutual Funds",
    description: "Discover funds for your investment goals.",
    icon: "💰",
  },
  {
    name: "Futures & Options",
    description: "Explore the derivatives market.",
    icon: "📊",
  },
  {
    name: "Bonds",
    description: "Learn about fixed-income investments.",
    icon: "🏦",
  },
];

function Products() {
  return (
    <section className="products section" id="products">
      <h2>Investment Products</h2>

      <p className="section-description">
        Explore different ways to participate in financial markets.
      </p>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <div className="product-icon">{product.icon}</div>

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <a href="#signup">Learn more →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;