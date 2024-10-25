import React, { useState } from "react";
import "./Products.css"; // Custom styles
import { Container, Row, Col, Form } from "react-bootstrap"; // Import Bootstrap components

const Products = () => {
  // Mock data for brands and their products
  const brands = [
    {
      name: "Brand 1",
      products: [
        {
          id: 1,
          name: "Motorcycle 1",
          description: "Description of Motorcycle 1",
          image: require("../assets/images/products/legend.png"),
        },
        {
          id: 2,
          name: "Motorcycle 2",
          description: "Description of Motorcycle 2",
          image: require("../assets/images/products/dream9.png"),
        },
        {
          id: 2,
          name: "Motorcycle 2",
          description: "Description of Motorcycle 2",
          image: require("../assets/images/products/dream9.png"),
        },
        {
          id: 2,
          name: "Motorcycle 2",
          description: "Description of Motorcycle 2",
          image: require("../assets/images/products/dream9.png"),
        },
        {
          id: 2,
          name: "Motorcycle 2",
          description: "Description of Motorcycle 2",
          image: require("../assets/images/products/dream9.png"),
        },
        {
          id: 2,
          name: "Motorcycle 2",
          description: "Description of Motorcycle 2",
          image: require("../assets/images/products/dream9.png"),
        },
        {
          id: 2,
          name: "Motorcycle 2",
          description: "Description of Motorcycle 2",
          image: require("../assets/images/products/dream9.png"),
        },
      ],
    },
    {
      name: "Brand 2",
      products: [
        {
          id: 3,
          name: "Motorcycle 3",
          description: "Description of Motorcycle 3",
          image: require("../assets/images/products/future.png"),
        },
        {
          id: 4,
          name: "Motorcycle 4",
          description: "Description of Motorcycle 4",
          image: require("../assets/images/products/future.png"),
        },
      ],
    },
    {
      name: "Brand 3",
      products: [
        {
          id: 5,
          name: "Motorcycle 5",
          description: "Description of Motorcycle 5",
          image: require("../assets/images/products/future.png"),
        },
        {
          id: 6,
          name: "Motorcycle 6",
          description: "Description of Motorcycle 6",
          image: require("../assets/images/products/future.png"),
        },
      ],
    },
  ];

  const [selectedBrand, setSelectedBrand] = useState(brands[0]);

  // Handler for brand selection in mobile dropdown
  const handleSelectChange = (event) => {
    const selectedBrandName = event.target.value;
    const selectedBrandData = brands.find(
      (brand) => brand.name === selectedBrandName
    );
    setSelectedBrand(selectedBrandData);
  };

  return (
    <Container fluid className="product-view-page bg-secondary bg-opacity-25">
      {/* Mobile View: Select Dropdown for Brands */}
      <div className="d-block d-md-none py-3">
        <h4>Select Brand</h4>
        <Form.Select
          md={12}
          onChange={handleSelectChange}
          value={selectedBrand.name}
        >
          {brands.map((brand, index) => (
            <option key={index} value={brand.name}>
              {brand.name}
            </option>
          ))}
        </Form.Select>
      </div>

      <Row className="full-height-row">
        {/* Large Screen: Sidebar for Brands */}
        <Col md={2} className="brands-list d-none d-md-block sidebar-fixed bg-light">
          <div className="sidebar-content">
            <h4>Brands</h4>
            <ul className="list-group">
              {brands.map((brand, index) => (
                <li
                  key={index}
                  className={`list-group-item ${
                    selectedBrand.name === brand.name ? "active" : ""
                  }`}
                  onClick={() => setSelectedBrand(brand)}
                >
                  {brand.name}
                </li>
              ))}
            </ul>
          </div>
        </Col>

        {/* Product List */}
        <Col md={10} className="products-list">
          <h4>{selectedBrand.name} - Products</h4>
          <Row>
            {selectedBrand.products.map((product) => (
              <Col sm={6} lg={4} key={product.id} className="mb-4">
                <div className="product-card p-3">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="img-fluid product-image" />
                  </div>
                  <h5 className="product-title">{product.name}</h5>
                  <p>{product.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
    
  );
};

export default Products;
