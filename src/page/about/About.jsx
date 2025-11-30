import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-16">
      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          About <span className="text-blue-400">InternBoys</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300">
          We help students build strong careers through free internships,
          real-world learning, and expert guidance.
        </p>
      </section>

      {/* GLASS CARD */}
      <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-10">
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-slate-300 leading-relaxed mb-6">
          InternBoys is a platform dedicated to helping students start their
          career journey with confidence. We provide{" "}
          <span className="text-blue-400 font-semibold">
            free internships, practical training, and one-on-one guidance
          </span>{" "}
          to help young learners understand the right direction for their
          career.
        </p>

        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <ul className="list-disc list-inside space-y-3 text-slate-300">
          <li>Offer free internships in various domains</li>
          <li>Guide students on how to start & grow their career</li>
          <li>Help build professional resumes & portfolios</li>
          <li>Provide real-world practical projects</li>
          <li>Teach industry-level skills with hands-on training</li>
        </ul>

        <h2 className="text-3xl font-bold mt-10 mb-4">Our Mission</h2>
        <p className="text-slate-300 leading-relaxed">
          Many students struggle because they don’t know what to learn, how to
          start, or what the industry expects.
          <br />
          Our mission is simple:
          <span className="text-blue-400 font-semibold">
            bring clarity, confidence, and career direction to students.
          </span>
        </p>
      </div>

      {/* HIGHLIGHTS SECTION */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/20 transition">
          <h3 className="text-2xl font-bold mb-2">10,000+ Students</h3>
          <p className="text-slate-300">
            guided through internships & mentorship
          </p>
        </div>

        <div className="p-6 bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/20 transition">
          <h3 className="text-2xl font-bold mb-2">Free Internships</h3>
          <p className="text-slate-300">learn with real-world experience</p>
        </div>

        <div className="p-6 bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/20 transition">
          <h3 className="text-2xl font-bold mb-2">1:1 Guidance</h3>
          <p className="text-slate-300">personal mentoring for every student</p>
        </div>
      </section>
    </div>
  );
}
