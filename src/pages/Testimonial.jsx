import React from "react";

const testimonials = [
  {
    name: "John Doe",
    role: "Project Manager at TechNova",
    content:
      "Sunsoft Services Inc. exceeded our expectations with their professionalism and technical expertise. Their solutions have helped streamline our operations significantly.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Chen",
    role: "CTO at BrightApps",
    content:
      "Working with Sunsoft has been a game-changer. Their team is proactive, skilled, and committed to delivering results. Highly recommended!",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Lee",
    role: "Founder at StartupWave",
    content:
      "They bring a rare combination of tech know-how and genuine care. We felt supported throughout the entire process. Thank you, Sunsoft!",
    image:
      "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 font-saira text-gray-800">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">What Our Clients Say</h2>
        <p className="text-lg text-gray-600">
          Real stories from our satisfied clients across industries
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <h4 className="text-lg font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{t.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
