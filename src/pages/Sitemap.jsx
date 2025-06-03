import React from "react";

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6 md:px-24 font-saira text-gray-800">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
            Sitemap
          </h1>
          <p className="text-lg text-gray-600">
            View our location and navigate easily to our corporate headquarters.
          </p>
        </div>

        <div className="w-full h-[450px] overflow-hidden rounded-2xl shadow-md border border-blue-200">
          <iframe
            title="Sunsoft Corporate Headquarters"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2404959499418!2d-74.0622150245004!3d40.73473333622442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25730cc73d7bb%3A0xae4d98c491b1dbee!2s591%20Summit%20Ave%20%23400%2C%20Jersey%20City%2C%20NJ%2007306%2C%20USA!5e0!3m2!1sen!2sin!4v1748938452176!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
