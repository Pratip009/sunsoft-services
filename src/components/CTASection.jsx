import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CTASection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="md:px-20">
      <section className="relative py-20 px-6 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white overflow-hidden rounded-md">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

        <div
          className="relative z-10 max-w-3xl mx-auto text-center"
          data-aos="zoom-in"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
            Ready to Take Your Business to the Next Level?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Partner with{" "}
            <span className="font-semibold text-white">Sunsoft</span> and let’s
            create something extraordinary together.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-700 font-bold text-lg rounded-full shadow-lg transform transition hover:scale-105 hover:shadow-xl active:scale-95"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
