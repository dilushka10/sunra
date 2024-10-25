// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import MikuSuper from '../Pages/miku_super';

// const Store = () => {
//   return (
//     <div className="container-fluid" style={{marginTop: '50px'}} >
//       <MikuSuper />
//     </div>
//   );
// };

// export default Store;


import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css'

// import './miku_super/bootstrap.css';
// import "./miku_super/swiper.min.css";
// import "./miku_super/animate.min.css";

import '../Pages/miku_super/style.css'
import '../Pages/miku_super/style1.css'
import '../Pages/miku_super/style2.css'

import "bootstrap/dist/js/bootstrap.min.js";

function Store(){
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    let lastX = 0;

    const handleMouseMove = (e) => {
      const currentX = e.clientX;
      const movementX = lastX - currentX;

      // Adjust this value to control the sensitivity of the movement
      const sensitivity = 2;

      const newPosition = image.offsetLeft - movementX * sensitivity;
      image.style.transform = `translateX(${newPosition}px)`;

      lastX = currentX;
    };

    const handleMouseEnter = (e) => {
      lastX = e.clientX;
      image.parentElement.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseLeave = () => {
      image.parentElement.removeEventListener("mousemove", handleMouseMove);
      image.style.transform = "translateX(50px)"; // Reset to original position
    };

    image.parentElement.addEventListener("mouseenter", handleMouseEnter);
    image.parentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      image.parentElement.removeEventListener("mouseenter", handleMouseEnter);
      image.parentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">

      <header>
        <div className="canshu">
          <h4>Miku super</h4>
          <ul className="can_ul">
            <li className="active">
              <a href="#overview" title="Overview">
                Overview
              </a>
            </li>
            <li>
              <a href="#design" title="Design">
                Design
              </a>
            </li>
            <li>
              <a href="#Specifications" title="Specifications">
                Specifications
              </a>
            </li>
            <li>
              <a href="#video" title="Specifications">
                Video
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main>
      <section id="overview">
        <div className="row">
          <div className="col-12">

          
      <div className="pr move01 mksup_01 " id="overview">
        <img
          className="global imgpc"
          src={require("../Pages/miku_super/mksup_bg1.jpg")
            
          }
        />
        <img
          className="global imgphone"
          src={require("../Pages/miku_super/mksup_sjbg1.jpg")}
        />
        <div className="titi titi01 tc">
          <h4>MIKU SUPER</h4>
          <p>SUNRA double lithium electric high speed electric motorcycle</p>
        </div>
        <img
          ref={imageRef}
          className="che move01img"
          src={require("../Pages/miku_super/mksup_che1.png")}
          style={{ transform: "translateX(100px)" }}
        />
      </div>
      </div>
        </div>
      </section>

      <section id="design"></section>

      <section id="Specifications"></section>

      <section id="video"></section>
      </main>

      <footer></footer>
      </div>
      </div>
    </div>
  );
};

export default Store;
