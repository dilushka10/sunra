import React from "react";
import "./FeaturedProducts.css"; // Custom styles

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "DREAM 9",
      description: "The evolution of modern technology",
      image: require("../assets/images/products/dream9.png"),
    },
    {
      id: 2,
      name: "LEGEND",
      image: require("../assets/images/products/legend.png"),
      description: "Convenient and Comfortable riding experience",
    },
    {
      id: 3,
      name: "FUTURE",
      image: require("../assets/images/products/future.png"),
      description: "A shining star of the retro Era",
    },
    {
      id: 4,
      name: "ROBO-S",
      image: require("../assets/images/products/robos1.png"),
      description: "The future of electric motorcycles.",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card product-card shadow">
              <div className="card-image">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                />
                <div className="overlay">
                  <h2 className="motorcycle-name fw-bold">{product.name}</h2>
                  <p className="motorcycle-description">{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
