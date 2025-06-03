import React from "react";
import Banner from "../components/Banner";
import ServicesSection from "../components/ServicesSection";
import TabbedServices from "../components/TabbedServices";

const Services = () => {
  return (
    <div>
      <Banner
        image="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
        heading="Our Services"
        subheading="Transforming businesses through technology, expertise, and innovation"
      />
      <ServicesSection/>
      <TabbedServices/>
    </div>
  );
};

export default Services;
