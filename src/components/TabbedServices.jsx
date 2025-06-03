import React, { useEffect, useState } from "react";
import HealthcareSolutions from "../tabs/HealthcareSolutions";
import ITStaffingServices from "../tabs/ITStaffingServices";
import Consulting from "../tabs/Consulting";
import Outsourcing from "../tabs/Outsourcing";
import AOS from "aos";
import "aos/dist/aos.css";
const tabs = [
  { name: "Healthcare Solutions", component: <HealthcareSolutions /> },
  { name: "IT Staffing and Services", component: <ITStaffingServices /> },
  { name: "Consulting", component: <Consulting /> },
  { name: "Outsourcing", component: <Outsourcing /> },
];

export default function TabbedServices() {
   useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-16 px-6 md:px-20 font-saira">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-10" data-aos="fade-left">
          Our <span className="text-blue-600">Core Services</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="ease-in">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                activeIndex === index
                  ? "bg-blue-600 text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-10 text-gray-700 text-lg leading-relaxed shadow-md transition-all">
          {tabs[activeIndex].component}
        </div>
      </div>
    </section>
  );
}
