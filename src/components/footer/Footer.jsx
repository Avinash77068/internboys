import { Mail, Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "mailto:internships@example.com", label: "Email" },
  ];

  const links = [
    { label: "Features", href: "#features" },
    { label: "Apply Now", href: "#application" },
    { label: "FAQ", href: "#" },
    { label: "About Us", href: "#" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold text-white mb-4">
            Free Internship Program
          </h3>
          <p className="text-slate-400 mb-6">
            Empowering the next generation with real-world experience and
            mentorship.
          </p>
          <div className="flex gap-4">
            {socials.map((s, i) => {
              const Icon = s.icon;
              return (
                <Link
                  key={i}
                  to={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 bg-slate-800 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {links.map((l, i) => (
              <li key={i}>
                <Link to={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="mailto:internships@example.com"
                className="hover:text-white"
              >
                internships@example.com
              </Link>
            </li>
            <li className="text-slate-400">Available worldwide</li>
            <li className="text-slate-400">Remote positions</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
        &copy; {year} Free Internship Program. All rights reserved.
      </div>
    </footer>
  );
}
