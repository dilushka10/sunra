import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Create this file for additional custom styles if needed
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/images/Boswin_Groups_w1_For_Footer_1x.png';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';


const Footer = () => {
  return (
    <footer className="footer mt-auto py-4 bg-dark text-white">
      <div className="container-fluid">
        <div className="row justify-content-center">
          {/* Left Section - Company Info */}
          <div className="col-12 col-lg-3 text-center">
            <img src={logo} alt="Boswin" className="img-fluid p-3 mb" />
          </div>
          <hr style={{height:'20px'}}/>
          <div className="col-11 col-lg-3 ">

            <h6 className="fw-bold text-warning">CONTACT US</h6>
            <ul className="list-unstyled">

            <li>Boswin Group (Pvt) Ltd</li>
            <li>12, 2nd Lane, Beddagana Road,</li>
            <li>Pita Kotte, Sri Lanka</li>
            <li>Phone Number: +94 76 300 6555</li>
            <li>Email: <a href="mailto:info@boswingroup.com" className="text-white">info@boswingroup.com</a></li>
            </ul>
          </div>
          
          {/* Middle Section - Brands & Services */}
            <div className="col-11 col-lg-3    ">
            <h6 className="font-weight-bold text-warning">BRANDS & SERVICES</h6>
            <ul className="list-unstyled">
              <li>Sri Pay</li>
              <li>K'Dona</li>
              <li>Falcora</li>
              <li>MI Store</li>
              <li>Vein Graphite</li>
              <li>Loolecondera</li>
            </ul>
          </div>

          {/* Right Section - Top Links */}
          <div className="col-11 col-lg-3    ">
            <h6 className="font-weight-bold text-warning">TOP LINKS</h6>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Brands & Services</li>
              <li>News</li>
              <li>Contact Us</li>
            </ul>
            {/* Social Media Icons */}
            <div className="social-icons mt-4">
              <a href="/https://www.facebook.com/boswin.lk" className="social-icon-link">
                <span className="social-icon-circle">
                  <i className="fab fa-facebook text-primary"></i>
                </span>
              </a>
              <a href="/https://www.instagram.com/_boswin_/?igsh=cndna3FwNG1hZzJ3" className="social-icon-link">
                <span className="social-icon-circle">
                  <i className="fab fa-instagram text-danger"></i>
                </span>
              </a>
              <a href="/https://www.youtube.com/@boswingroup" className="social-icon-link">
                <span className="social-icon-circle">
                  <i className="fab fa-youtube text-danger"></i>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom mt-4 text-center">
          <p className="mb-0">
            Boswin Group (Pvt) Ltd - &copy; 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
