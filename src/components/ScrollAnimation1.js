import React, { useEffect, useRef, useState } from "react";
import "./ScrollAnimation1.css";
import image from "../assets/images/benefits/1.jpg";

const ScrollAnimation1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  const slideInStyle = {
    opacity: 0,
    transform: 'translateX(100%)',
    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
  };

  const visibleStyle = {
    opacity: 1,
    transform: 'translateX(0)',
  };

  return (
    <div className="container-fluid" ref={componentRef}>
      <div 
        className={`row slide-in ${isVisible ? "visible" : ""} p-4`}
        style={isVisible ? visibleStyle : slideInStyle}
      >
        <div className="col-12 col-lg-6 p-3">
          <img src={image} alt="Example" className="rounded card-img" />
        </div>
        <div className="col-12 col-lg-6 text-start my-auto mx-auto p-3">
          <span className="drop-cap">Zero emissions</span> 
          <br />
          <span className="fs-5">
             is just the start of the benefits electric motorcycles offer.
            They also provide reduced noise pollution, lower maintenance costs, and improved
            energy efficiency. As technology advances, they're becoming a
            viable, eco-friendly alternative to traditional bikes, contributing
            significantly to sustainable urban transportation.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation1;
