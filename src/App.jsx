import Hero from "./components/Hero";
import Features from "./components/Feature";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItsWorks";
import ApplicationForm from "./components/ApplicationForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <HowItWorks />
      <ApplicationForm />
      <Footer />
    </div>
  );
}

export default App;
