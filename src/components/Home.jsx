// src/components/Home.jsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Hero from "./herosection/Hero";
import Internship from "./internship/Internship";
import Feature from "./feature/Feature";
import Benefits from "./benefit/Benefits";
import HowItWorks from "./howitworks/HowItsWorks";
import ApplicationForm from "./applicationForm/ApplicationForm";
import FAQSection from "./faq/Faq";

export default function Home() {
  const { section } = useParams();

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [section]);

  return (
    <>
      <Hero />
      <Internship />
      <Feature />
      <Benefits />
      <HowItWorks />
      <ApplicationForm />
      <FAQSection />
    </>
  );
}
