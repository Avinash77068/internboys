import React from "react";
import { Mail, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=2100&q=80')",
      }}
    >
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl rounded-2xl p-10 max-w-lg w-full text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>

        <p className="text-white/80 text-lg mb-6">
          We're here to help! Reach out anytime.
        </p>

        <div className="space-y-4 mb-8">
          <p className="text-xl font-semibold">
            Email: <span className="text-blue-300">contact@internboys.com</span>
          </p>
          <p className="text-xl font-semibold">
            Phone: <span className="text-blue-300">+1 234 567 890</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@internboys.com"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all"
          >
            <Mail size={20} /> Email Us
          </a>

          <a
            href="tel:+1234567890"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg transition-all"
          >
            <PhoneCall size={20} /> Call Now
          </a>
        </div>

        <p className="mt-8 text-white/70 text-sm">
          Available 24/7 — We’re ready to assist you anytime.
        </p>
      </div>
    </div>
  );
}
