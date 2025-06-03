import { useEffect } from "react";
import { Lightbulb, Code2, Users, ShieldCheck } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
    title: "Innovation-Driven",
    description: "We fuse creativity with the latest tech to deliver scalable, forward-thinking solutions.",
  },
  {
    icon: <Code2 className="w-8 h-8 text-indigo-600" />,
    title: "Expert Development",
    description: "Our developers bring deep expertise in modern frameworks and agile practices.",
  },
  {
    icon: <Users className="w-8 h-8 text-emerald-600" />,
    title: "Client-Centric",
    description: "We work closely with you, understanding your needs and delivering beyond expectations.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-teal-600" />,
    title: "Reliable & Secure",
    description: "Sunsoft ensures performance, uptime, and data protection at every step of your journey.",
  },
];

export default function IntroSection() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 font-saira">
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Why Choose <span className="text-blue-600">Sunsoft?</span>
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Empowering businesses with custom solutions, agile development, and lasting partnerships.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-xl transition duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
