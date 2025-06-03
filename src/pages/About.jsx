import React from "react";
import Banner from "../components/Banner"; // Adjust the path as needed
import AboutUsSection from "../components/AboutUsSection";

const About = () => {
  return (
    <>
      <Banner
        image="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
        heading="About Sunsoft"
        subheading="Innovating the Future with Scalable Tech Solutions"
      />
      <AboutUsSection/>
    </>
  );
};

export default About;
