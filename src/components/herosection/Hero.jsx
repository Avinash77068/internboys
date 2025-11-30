import { ArrowRight, Briefcase } from "lucide-react";
import heroiamge from "../../assets/hero.webp";
import { useState } from "react";
import submitForm from "../../AiComponent&Fucntion/emailSendingFunction";

export default function Hero() {
  const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      await new Promise((res) => setTimeout(res, 1500));
      const result = await submitForm(email);

      if (result.success) {
        console.log(result.message); // Success message
      } else {
        console.log(result.message); // Error message
      }
      
    };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroiamge})` }}
      ></div>

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="flex items-center w-full justify-center flex-col">
          {/* Highlight Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-8">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">
              100% Free Internship Program
            </span>
          </div>

          <div className="max-w-full flex flex-col sm:items-start items-center justify-center w-full">
            <div className="max-w-2xl sm:text-left text-center">
              {/* Main Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Unlock Your Potential with InternBoys
              </h1>

              {/* Subheading */}
              <p className="text-lg sm:text-xl sm:max-w-2xl text-white mb-3 sm:mb-10 leading-relaxed">
                Welcome to InternBoys, where we provide free internships for
                young men. Gain real-world experience and enhance your skills
                across various industries. Join us today to start your journey
                towards a successful career!
              </p>
            </div>
          </div>

          {/* Email + Submit */}
          <div className="max-w-full flex flex-col-reverse sm:flex-col w-full items-center sm:items-start">
            <div className="flex max-w-xl flex-col sm:flex-row gap-4 w-full">
              {/* Email Input */}
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 sm:py-4 rounded-lg bg-white w-full flex-1 focus:outline-none text-slate-900 placeholder-slate-400 shadow-lg shadow-blue-500/30"
              />

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="group inline-flex items-center justify-center gap-2 px-8 py-2 sm:py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
              >
                Submit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Guarantee Text */}
            <p className="my-3 text-sm text-slate-300 sm:text-left text-center">
              ✅ We guarantee a reply to your email within{" "}
              <span className="font-semibold text-white">48 hours</span>.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: "100%", label: "Free" },
              { value: "3-6", label: "Months Duration" },
              { value: "Remote", label: "Work From Anywhere" },
              { value: "Certificate", label: "Upon Completion" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
