import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import image1 from "../assets/images/carousel/Dream.png";
import image2 from "../assets/images/carousel/FUTURE图.jpg";
import image3 from "../assets/images/carousel/LEGEND图2.jpg";
import image4 from "../assets/images/carousel/Miku solo1.png";

const fadeInAnimation = {
  animation: "fadeIn 2s ease-in-out",
};

const bounceAnimation = {
  animation: "bounce 2s infinite", // Infinite bounce animation for the buttons
};

const HomeCarousel = () => {
  return (
    <div id="myCarousel" className="carousel slide mb-6 mt-5 mt-lg-0" data-bs-ride="carousel">
      <div className="carousel-indicators mt-5 mt-lg-0">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="image"
            width="100%"
            height="90%"
            src={image1}
            alt="Dream carousel image"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
          <div className="container ">
            <div className="carousel-caption text-start d-none d-lg-block" style={{ marginBottom: "150px" }}>
              <p style={{ ...fadeInAnimation, fontSize: "55px", color: "#ffffff", fontWeight: "bolder" }}>
                DREAM
              </p>
              <p style={{ ...fadeInAnimation, fontSize: "30px", color: "#ffffff", fontWeight: "initial" }}>
                The future is already here
              </p>
              <br/>
              <p>
                <a
                  className="btn btn-lg btn-outline-light rounded-pill"
                  href="/"
                style={{bounceAnimation}}
                >
                  View Details
                </a>
              </p>
            </div>
            <div className="carousel-caption text-start d-block d-lg-none" style={{marginBottom: "-20px"}} >
              <p style={{ ...fadeInAnimation, fontSize: "25px", color: "#ffffff", fontWeight: "bolder" }}>
                DREAM
              </p>
              <p style={{ ...fadeInAnimation, fontSize: "15px", color: "#ffffff", fontWeight: "initial" }}>
                The future is already here
              </p>
              <p >
                <a
                  className="btn btn-lg btn-outline-light rounded-pill"
                  href="/"
                  style={{...bounceAnimation, fontSize: "10px"}}
                >
                  View Details
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="image"
            width="100%"
            height="90%"
            src={image2}
            alt="Dream carousel image"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
           <div className="container">
            <div className="carousel-caption text-start d-none d-lg-block" style={{ marginBottom: "150px" }}>
              <p style={{ ...fadeInAnimation, fontSize: "55px", color: "#ffffff", fontWeight: "bolder" }}>
                Future
              </p>
              <p style={{ ...fadeInAnimation, fontSize: "30px", color: "#ffffff", fontWeight: "initial" }}>
              A shining star of the retro era
              </p>
              <br/>
              <p>
                <a
                  className="btn btn-lg btn-outline-light rounded-pill"
                  href="/"
                  style={bounceAnimation}
                >
                  View Details
                </a>
              </p>
            </div>
            <div className="carousel-caption text-start d-block d-lg-none" style={{ marginBottom: "-20px" }}>
              <p style={{ ...fadeInAnimation, fontSize: "25px", color: "#ffffff", fontWeight: "bolder" }}>
                Future
              </p>
              <p style={{ ...fadeInAnimation, fontSize: "15px", color: "#ffffff", fontWeight: "initial" }}>
              A shining star of the retro era
              </p>
              <p>
                <a
                  className="btn btn-lg btn-outline-light rounded-pill"
                  href="/"
                  style={{...bounceAnimation, fontSize: "10px"}}
                >
                  View Details
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="image"
            width="100%"
            height="90%"
            src={image3}
            alt="Dream carousel image"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
           <div className="container">
            <div className="carousel-caption text-start d-none d-lg-block" style={{ marginBottom: "150px" }}>
              <p style={{ ...fadeInAnimation, fontSize: "55px", color: "#ffffff", fontWeight: "bolder" }}>
                LEGEND
              </p>
              <p style={{ ...fadeInAnimation, fontSize: "30px", color: "#ffffff", fontWeight: "initial" }}>
              Fashion is elegent in the future
              </p>
              <br/>
              <p>
                <a
                  className="btn btn-lg btn-outline-light rounded-pill"
                  href="/"
                  style={bounceAnimation}
                >
                  View Details
                </a>
              </p>
            </div>
            <div className="carousel-caption text-start d-block d-lg-none" style={{ marginBottom: "-20px" }}>
              <p style={{ ...fadeInAnimation, fontSize: "25px", color: "#ffffff", fontWeight: "bolder" }}>
                LEGEND
              </p>
              <p style={{ ...fadeInAnimation, fontSize: "15px", color: "#ffffff", fontWeight: "initial" }}>
              Fashion is elegent in the future
              </p>
              <p>
                <a
                  className="btn btn-lg btn-outline-light rounded-pill"
                  href="/"
                  style={{...bounceAnimation, fontSize: "10px"}}
                >
                  View Details
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img
            className="image"
            width="100%"
            height="90%"
            src={image4}
            alt="Dream carousel image"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          />
        <div className="container">
            <div className="carousel-caption text-start d-none d-lg-block" style={{ marginBottom: "150px" }}>
              <p style={{ ...fadeInAnimation, fontSize: "55px", color: "#ffffff", fontWeight: "bolder" }}>
                MIKU SOLO
              </p>
              <p style={{ ...fadeInAnimation, fontSize: "30px", color: "#ffffff", fontWeight: "initial" }}>
              A biomimetic world built for you
              </p>
              <br/>
              <p>
                <a
                  className="btn btn-lg btn-outline-light rounded-pill"
                  href="/"
                  style={bounceAnimation}
                >
                  View Details
                </a>
              </p>
            </div>
            <div className="carousel-caption text-start d-block d-lg-none" style={{ marginBottom: "-20px" }}>
              <p style={{ ...fadeInAnimation, fontSize: "25px", color: "#ffffff", fontWeight: "bolder" }}>
                MIKU SOLO
              </p>
              <p style={{ ...fadeInAnimation, fontSize: "15px", color: "#ffffff", fontWeight: "initial" }}>
              A biomimetic world built for you
              </p>
              <p>
                <a
                  className="btn btn-lg btn-outline-light rounded-pill"
                  href="/"
                  style={{...bounceAnimation, fontSize: "10px"}}
                >
                  View Details
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

// Adding keyframes animation using JavaScript for fade-in and bounce effects
const styleSheet = document.styleSheets[0];
const keyframesFadeIn = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const keyframesBounce = `
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

// Inserting the keyframes rule
styleSheet.insertRule(keyframesFadeIn, styleSheet.cssRules.length);
styleSheet.insertRule(keyframesBounce, styleSheet.cssRules.length);

export default HomeCarousel;
