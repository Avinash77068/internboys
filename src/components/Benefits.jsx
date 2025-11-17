import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const benefits = [
  "Gain practical, hands-on experience in your field of study",
  "Build a professional portfolio with real project work",
  "Network with industry professionals and fellow interns",
  "Flexible remote work arrangement",
  "Learn industry-standard tools and best practices",
  "Receive mentorship and career guidance",
  "No financial barriers - completely free program",
  "Official completion certificate to boost your resume",
];

export default function Benefits() {
  return (
    <>
      <Helmet>
        <title>Internship Benefits - Career Development | InternBoys</title>
        <meta
          name="description"
          content="Discover the benefits of InternBoys internship: real projects, mentorship, certificate, skill development. Transform your career with our free program."
        />
        <meta
          name="keywords"
          content="internship benefits, career development, skill training, professional mentorship, internship advantages, free training program"
        />
      </Helmet>

      <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* Decorative gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 to-cyan-100/40 blur-3xl opacity-40" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                What You'll Gain From This Internship
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our internship program bridges the gap between academics and the
                professional world. You’ll gain real-world experience, build
                confidence, and prepare to excel in your career.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-3 group"
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 text-lg leading-relaxed">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative group">
                {/* Main Image */}
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=1000"
                  alt="Internship Benefits"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-cyan-400/30 mix-blend-multiply" />

                {/* Overlay Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
                  <div className="text-6xl sm:text-7xl font-bold mb-3">100%</div>
                  <div className="text-2xl font-semibold mb-1">Free Program</div>
                  <div className="text-lg opacity-90">No Hidden Costs</div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-200"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-1">3–6</div>
                  <div className="text-sm text-slate-600">Months Duration</div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: 4 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-200"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-1">Remote</div>
                  <div className="text-sm text-slate-600">Work Anywhere</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
