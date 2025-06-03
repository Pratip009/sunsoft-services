import React from "react";
import { FaBuilding, FaHandshake, FaLaptopCode, FaGlobe } from "react-icons/fa";

export default function AboutUsSection() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white font-saira">
      <div className="max-w-9xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
          About <span className="text-blue-600">Sunsoft Services Inc.</span>
        </h2>

        <div className="space-y-10 text-gray-700 text-[17px] leading-8">
          <div className="relative pl-10">
            <FaBuilding className="absolute left-0 top-1 text-blue-600 text-xl" />
            <span>
              <strong className="text-blue-700">Sunsoft Services Inc.</strong> is registered in Jersey City, New Jersey, USA. We offer <strong>Business Consulting</strong>, <strong>Application Development and Management</strong>, and <strong>Strategic Sourcing Services (ADMSSS)</strong>.
            </span>
          </div>

          <div className="relative pl-10">
            <FaHandshake className="absolute left-0 top-1 text-blue-600 text-xl" />
            <span>
              True to our name, we specialize in managing complex, long-term engagements and nurturing meaningful partnerships with our clients.
            </span>
          </div>

          <div className="relative pl-10">
            <FaGlobe className="absolute left-0 top-1 text-blue-600 text-xl" />
            <span>
              In today’s competitive market, where quality, integrity, timely delivery, and cost-effectiveness matter, <strong>Sunsoft Services Inc.</strong> is a name you can trust.
            </span>
          </div>

          <div className="border-l-4 border-blue-600 pl-6 bg-blue-50/30 rounded-md">
            <span>
              We combine <strong>industry best practices</strong>, <strong>cutting-edge technologies</strong>, and <strong>domain expertise</strong> to help you enhance operational efficiency and integrate seamlessly across your enterprise.
            </span>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
            <span>
              Our strength lies in aligning <strong>people, processes, practices, and technology</strong> to deliver practical, future-ready solutions.
            </span>
          </div>

          <div className="relative pl-10">
            <FaLaptopCode className="absolute left-0 top-1 text-blue-600 text-xl" />
            <span>
              We offer high-impact, business-driven IT solutions through a flexible <strong>on-site and offshore delivery model</strong>.
            </span>
          </div>

          <div className="text-center mt-12">
            <span className="block text-lg font-semibold text-blue-700">
              "At Sunsoft Services Inc., your growth is our mission."
            </span>
            <span className="block mt-2 text-gray-600">
              With unmatched technical and business expertise, we help you tackle your toughest challenges.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
