import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About Us</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src="/path-to-about-image"
            className="img-fluid rounded"
            alt="About us"
          />
        </div>
        <div className="col-md-6">
          <h3>Welcome to Our Motorcycle Store</h3>
          <p>
            We specialize in selling a wide range of motorcycles to cater to all kinds of riders. 
            Whether you’re a beginner or an experienced rider, we have something for you. 
          </p>
          <p>
            Our goal is to provide you with the best quality bikes and an excellent buying experience. 
            Visit us today and find the perfect ride for you!
          </p>
          <h5>Why Choose Us?</h5>
          <ul>
            <li>Wide selection of top motorcycle brands</li>
            <li>Competitive prices</li>
            <li>Experienced staff ready to help</li>
            <li>Excellent after-sales service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
