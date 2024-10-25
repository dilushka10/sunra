import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Store from './components/Store';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import HomeCarousel from './components/Carousel';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
