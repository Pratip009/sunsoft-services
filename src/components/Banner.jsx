import React from "react";

export default function Banner({ image, heading, subheading }) {
  return (
    <section
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-2xl md:text-4xl font-bold mb-2">{heading}</h1>
        {subheading && (
          <p className="text-sm md:text-lg font-medium text-white/90">{subheading}</p>
        )}
      </div>
    </section>
  );
}
