import Hero from "./components/Hero";
import Features from "./components/Feature";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItsWorks";
import ApplicationForm from "./components/ApplicationForm";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import FAQSection from "./components/Faq";
import Internship from "./components/Internship";
function App() {
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

export default App;
