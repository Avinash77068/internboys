import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = {
  students: [
    {
      q: "Is the internship free of cost?",
      a: "Yes! All InternBoys internships are completely free. We never charge any registration or placement fee.",
    },
    {
      q: "Will I receive a certificate?",
      a: "Yes. After successful completion, you’ll receive a verified digital internship certificate from InternBoys.",
    },
    {
      q: "Can I work remotely?",
      a: "Absolutely! Most of our internships are 100% remote, so you can work from anywhere.",
    },
    {
      q: "What is the duration of internships?",
      a: "Typically 4 to 8 weeks, depending on the company and project requirements.",
    },
    {
      q: "Do I need prior experience?",
      a: "No prior experience is required. Enthusiasm and willingness to learn are more important!",
    },
  ],
};

export default function FAQSection() {
  const [active, setActive] = useState(null);
  const [tab, setTab] = useState("students");
  const [search, setSearch] = useState("");

  const toggle = (i:any) => setActive(active === i ? null : i);

  // Filter FAQs by search query
  const filteredFaqs = faqs[tab].filter((f:any) =>
    f.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 to-cyan-100/40 blur-3xl opacity-40" />

      <div className="max-w-6xl mx-auto px-4 text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4"
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-slate-600 mb-10 text-lg"
        >
          Get quick answers about our internship program for students and companies.
        </motion.p>

        {/* Tabs */}
        <div className="flex justify-center mb-10 gap-4">
          {["students"].map((type) => (
            <motion.button
              whileTap={{ scale: 0.95 }}
              key={type}
              onClick={() => {
                setTab(type);
                setActive(null);
                setSearch("");
              }}
              className={`px-6 py-2.5 text-sm sm:text-base font-semibold rounded-full transition-all duration-200 ${
                tab === type
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white border border-slate-300 text-slate-700 hover:bg-blue-50"
              }`}
            >
              {type === "students" ? "For Students" : "For Companies"}
            </motion.button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a question..."
            className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none bg-white text-slate-700"
          />
        </div>

        {/* FAQ List */}
        <motion.div
          layout
          className="max-w-3xl mx-auto text-left space-y-4 relative z-10"
        >
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((item, i) => (
              <motion.div
                key={i}
                layout
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`border backdrop-blur-md rounded-2xl transition-all duration-200 ${
                  active === i
                    ? "bg-white/80 border-blue-400 shadow-lg"
                    : "bg-white/70 border-slate-200 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-slate-800 font-medium focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-semibold">
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: active === i ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown className="w-5 h-5 text-slate-500" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4 text-slate-600 border-t border-slate-100 text-sm sm:text-base leading-relaxed"
                    >
                      {item.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <p className="text-slate-500 text-center py-10">
              No results found for "{search}".
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
