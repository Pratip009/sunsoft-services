import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



export default function ServicesSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20 font-saira">
      <div className="max-w-9xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10" data-aos="fade-up">
          Our <span className="text-blue-600">Services</span>
        </h2>

        <div className="text-left space-y-6 text-gray-700 text-base leading-relaxed" data-aos="fade-right">
          <span>
            At <strong className="text-blue-700">Sunsoft Services Inc.</strong>,
            we understand that our clients depend on the expertise we've built
            over years of experience. When it comes to resourcing{" "}
            <strong>clinical research professionals</strong> for prominent
            organizations in the drug and device development industries, we
            bring unmatched knowledge and capability.
          </span>

          <span>
            Effective recruitment begins with a deep understanding of your{" "}
            <strong>position requirements</strong>, necessary{" "}
            <strong>skill sets</strong>, and <strong>company culture</strong>.
            Our team delivers world-class recruiting solutions with
            professionals who know the ins and outs of the clinical research
            landscape.
          </span>

          <span>
            We recognize that our success is rooted in the quality of our
            people. That’s why our recruiting process includes{" "}
            <strong>insightful screening</strong>,{" "}
            <strong>thorough interviews</strong>, and{" "}
            <strong>detailed credential verification</strong>. Every step is
            tailored to ensure we deliver only top-tier talent.
          </span>

          <span>
            But our work doesn’t stop after recruitment. Our{" "}
            <strong>Client Services Account Management</strong> team is
            committed to maintaining exceptional service throughout the entire
            engagement. Through consistent and meaningful communication,{" "}
            <strong>Sunsoft Services Inc.</strong> remains actively involved to
            guarantee successful program outcomes.
          </span>

          <span>
            Our responsive support and proactive interaction set the stage for
            lasting success and high-impact partnerships.
          </span>
        </div>
      </div>
    </section>
  );
}
