import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Solution from "./pages/Solution";
import Testimonial from "./pages/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Sitemap from "./pages/Sitemap";
export default function App() {
  useEffect(() => {
  AOS.init({ once: true, duration: 1000 });
}, []);
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </Layout>
    </Router>
  );
}
