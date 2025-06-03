import React, { useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Printer,
  Globe,
  Building2,
  Users,
} from "lucide-react";
import Banner from "../components/Banner";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Banner
        image="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
        heading="Get in Touch"
        subheading="We're here to help. Connect with our team today."
      />

      <div className="bg-gray-50 min-h-screen py-20 px-6 md:px-24 font-saira text-gray-800">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center" data-aos="zoom-in">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              We’re here to answer your questions and connect you to the right team.
            </p>
          </div>

          {/* Contact Sections */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* USA Office */}
            <div
              className="bg-white rounded-2xl shadow-md p-8 space-y-4 border-l-4 border-blue-600"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-3 text-blue-700 font-bold text-lg">
                <Building2 className="w-5 h-5" />
                Corporate Headquarters
              </div>
              <p className="text-gray-600">
                591 Summit Ave Suite 400 <br />
                Jersey City, New Jersey 07306 <br />
                United States of America
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4 text-blue-600" />
                Phone: 201 685 7490
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <Printer className="w-4 h-4 text-blue-600" />
                Fax: 201 221 8510
              </p>
            </div>

            {/* India Office */}
            <div
              className="bg-white rounded-2xl shadow-md p-8 space-y-4 border-l-4 border-green-600"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex items-center gap-3 text-green-700 font-bold text-lg">
                <Globe className="w-5 h-5" />
                India Office
              </div>
              <p className="text-gray-600">
                H.no. 18-2-111/1, Falaknuma Railway Station Road <br />
                Falaknuma, Hyderabad, Telangana - 500053 <br />
                INDIA
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4 text-green-600" />
                Phone: 91-40-66365636
              </p>
              <p className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4 text-green-600" />
                Mobile: 09160517251
              </p>
            </div>
          </div>

          {/* Contact Emails */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* General Info */}
            <div
              className="bg-white rounded-2xl shadow-md p-8 space-y-4 border-l-4 border-purple-600"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex items-center gap-3 text-purple-700 font-bold text-lg">
                <Mail className="w-5 h-5" />
                General Information
              </div>
              <p className="text-gray-700">
                For general inquiries, email us at:{" "}
                <a
                  href="mailto:info@sunsoftusa.com"
                  className="text-purple-700 underline"
                >
                  info@sunsoftusa.com
                </a>
              </p>
            </div>

            {/* Employment */}
            <div
              className="bg-white rounded-2xl shadow-md p-8 space-y-4 border-l-4 border-pink-600"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center gap-3 text-pink-700 font-bold text-lg">
                <Users className="w-5 h-5" />
                Employment Opportunities
              </div>
              <p className="text-gray-700">
                For job applications, contact HR at:{" "}
                <a
                  href="mailto:hr@sunsoftusa.com"
                  className="text-pink-700 underline"
                >
                  hr@sunsoftusa.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
