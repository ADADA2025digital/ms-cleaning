import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/Styles/Style.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Service";
import ServiceDetails from "./Pages/ServiceDetails";
import Blogs from "./Pages/Blog";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollToTopUp from "./Components/ScrollToTopUp";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/servicedetails" element={<ServiceDetails />} />
        <Route path="/servicedetails/:slug" element={<ServiceDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTop />
      <ScrollToTopUp />
      <Footer />
    </>
  );
}

export default App;
