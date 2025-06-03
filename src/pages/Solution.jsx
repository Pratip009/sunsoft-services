import React, { useEffect } from "react";
import Banner from "../components/Banner";
import AOS from "aos";
import "aos/dist/aos.css";
const Solution = () => {
  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
  return (
    <div>
      <Banner
        image="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
        heading="Our Solutions"
        subheading="Delivering strategic, scalable, and smart solutions for your business success"
      />

      <section className="bg-gray-50 py-16 px-6 md:px-20 font-saira text-gray-800">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-4">
            
            <p className="text-lg" data-aos="fade-right">
              <strong>
                Sunsoft offers a customized and flexible approach to resourcing.
              </strong>
            </p>
            <p data-aos="fade-left">
              We take the time to understand your needs and provide innovative,
              tailored solutions to help you achieve your objectives. A
              strategic approach, combined with a tactical plan, help Sunsoft
              ensure delivery of the highest quality service available in the
              industry today.
            </p>
            <p data-aos="fade-right">
              Whether your need is for one, two or three contractors to
              complement your staff, or a complete team of experienced
              professionals to work under your management and direction, Sunsoft
              dedicates exceptional recruiting resources to meeting your
              requirement.
            </p>
            <p data-aos="fade-left">
              If your resource requirements call for team leadership or complete
              project management, Sunsoft Services Inc will work closely with
              you to develop an outsourcing structure designed for your unique
              needs. Our seasoned, industry-experienced outsourcing team will
              coordinate the selection of qualified professionals with the
              Sunsoft Services Inc recruiting team. We will then oversee the
              implementation of a customized outsourcing program through to the
              successful delivery of incomparable services.
            </p>
          </div>

          <div className="space-y-6" data-aos="fade-right">
            <h2 className="text-2xl font-semibold text-blue-700">
              Our Core Solutions
            </h2>

            <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Individual Contract Staff
              </h3>
              <p data-aos="fade-left">
                Experienced, qualified professionals working under your
                leadership and management to supplement your internal project
                team or departmental personnel. Conversion from contractor to
                direct hire may be an option offered to your company as well.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Project Teams
              </h3>
              <p>
                Local or virtual teams recruited specifically to meet your
                specifications and needs, committed to working on your project
                assignments. These teams work under your leadership and
                direction so that you retain control.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6" data-aos="fade-up">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Outsourcing Services
              </h3>
              <p data-aos="fade-right">
                Teams of disciplined-based professionals recruited to meet your
                specifications and needs, providing general or project-dedicated
                services to your organization. These teams may work on-site at
                your facility, off-site at a Sunsoft Services Inc facility or be
                virtually located in regional offices. Sunsoft Services Inc may
                provide team leadership and personnel management, while you
                retain control and direction of the project and responsibility
                for project management or Sunsoft Services Inc can provide team
                leadership and project management services.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6" data-aos="fade-left">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Direct Hire
              </h3>
              <p data-aos="fade-right">
                Experienced, talented professionals screened against your
                specifications and referred to you for direct hire as regular
                employees of your organization to meet your internal staff
                position requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solution;
