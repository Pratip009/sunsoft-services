import { ArrowRightCircle, CheckCircle, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import CTASection from "../components/CTASection";
import FeatureCards from "../components/FeaturesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeatureCards />
      <CTASection />
    </>
  );
}
