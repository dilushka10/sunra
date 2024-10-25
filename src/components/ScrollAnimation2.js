import React, { useEffect, useRef, useState } from "react";
import "./ScrollAnimation2.css";
import image from "../assets/images/benefits/2.png";

const ScrollAnimation2 = () => {
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

  return (
    <div className="container-fluid" ref={componentRef}>
      <div className={`row slide-in ${isVisible ? "visible" : ""} p-4`}>
        <div className="col-12 col-lg-6 d-block d-lg-none p-3">
          <img src={image} alt="Example" className="rounded card-img" />
        </div>
        <div className="col-12 col-lg-6 text-start my-auto mx-auto p-3">
          <span className="drop-cap">Cost savings</span>  
          <br />
          <span className="fs-5">
             are a significant advantage of electric vehicles. With lower fuel costs, reduced maintenance expenses, and potential tax incentives, EVs can substantially decrease your overall transportation expenses over time. The initial investment is often offset by these long-term savings, making electric vehicles an economically smart choice for many drivers.
          </span>
        </div>
        <div className="col-12 col-lg-6 d-none d-lg-block p-3">
          <img src={image} alt="Example" className="rounded card-img" />
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation2;
