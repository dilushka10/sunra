import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HomeCarousel from './Carousel.js'; // Correct way to import default export
import FeaturedProducts from '../components/FeaturedProducts.js';
import BenefitsSection from '../components/Benefits.js'; // Add this import
import ScrollAnimation1 from './ScrollAnimation1.js';
import ScrollAnimation2 from './ScrollAnimation2.js';
import ScrollAnimation3 from '../components/ScrollAnimation3.js';
import Footer from '../components/Footer.js';

import Header from './Header.js';

function Home() {
    return (
      <div>
        {/* <Header/> */}
      <HomeCarousel/>
      <FeaturedProducts/>
      {/* <BenefitsSection /> */}
      <hr className="custom-hr"/>
      <ScrollAnimation1 />
      <ScrollAnimation2 />
      <ScrollAnimation3 />
      <Footer />
      </div>
    );
  };
  export default Home;
  
