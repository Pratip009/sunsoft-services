import { useState, useEffect } from "react";
import { ArrowRightCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const slides = [
  {
    title: "Targeting Innovation",
    highlight: "Understanding Modern Business Needs",
    description:
      "At Sunsoft, we help businesses harness the power of technology to scale, simplify, and succeed.",
    buttonText: "Explore Our Services",
    buttonLink: "/services",
    imageUrl:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Sunsoft Offers a Customized and Flexible Approach",
    highlight: "To Resourcing",
    description:
      "From MVPs to enterprise-grade applications, we deliver high-quality software tailored to your goals.",
    buttonText: "View Our Work",
    buttonLink: "/portfolio",
    imageUrl:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Management Strategic",
    highlight: "Sourcing Service",
    description:
      "Our team ensures your digital success through collaboration, transparency, and innovation.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
    imageUrl:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

function HeroSlide({ slide }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = slide.imageUrl;
    img.onload = () => setLoaded(true);
  }, [slide.imageUrl]);

  return (
    <div className="relative h-[75vh] md:h-[85vh] flex items-center justify-center bg-black">
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse z-10">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {loaded && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        />
      )}

      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 w-full max-w-7xl text-center text-white px-6 md:px-12">
  <h1 className="font-saira text-3xl md:text-6xl font-extrabold leading-tight mb-4 break-words">
    {slide.title} <br />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
      {slide.highlight}
    </span>
  </h1>
  <p className="font-saira text-base md:text-lg text-white/90 mb-6">{slide.description}</p>
  <Link
    to={slide.buttonLink}
    className="font-saira inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
  >
    {slide.buttonText} <ArrowRightCircle size={18} />
  </Link>
</div>

    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative h-[75vh] md:h-[85vh] w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination !bottom-6 z-30" />
    </section>
  );
}
