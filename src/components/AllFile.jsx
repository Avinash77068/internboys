import ApplicationForm from "./application/ApplicationForm";
import Benefits from "./benefit/Benefits";
import FAQSection from "./faq/Faq";
import Features from "./feature/Feature";
import Hero from "./herosection/Hero";
import HowItWorks from "./howitworks/HowItsWorks";
import Internship from "./internship/Internship";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer/Footer";

function AllFile() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <Internship />
      <Features />
      <Benefits />
      <HowItWorks />
      <ApplicationForm />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default AllFile;
