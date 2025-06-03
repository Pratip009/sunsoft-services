import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const cardData = [
  {
    title: "WHAT WE OFFER",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "/services",
  },
  {
    title: "SOLUTIONS",
    image:
      "https://images.pexels.com/photos/6147381/pexels-photo-6147381.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/solution",
  },
  {
    title: "OUT SOURCING",
    image:
      "https://images.pexels.com/photos/7490847/pexels-photo-7490847.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/services",
  },
  {
    title: "TESTIMONIALS",
    image:
      "https://images.pexels.com/photos/7491159/pexels-photo-7491159.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "/testimonials",
  },
];

export default function FeatureCards() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 bg-white font-saira">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {cardData.map((card, index) => (
          <Link to={card.link} key={index}>
            <div
              className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md text-center py-3">
                <h3 className="text-gray-800 font-semibold text-sm tracking-wider uppercase">
                  {card.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
