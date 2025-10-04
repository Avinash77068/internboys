import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    year: '',
    major: '',
    areaOfInterest: '',
    experience: '',
    motivation: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section id="application" className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-3xl p-12 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Application Submitted Successfully!
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              Thank you for your interest in our internship program. We've received your application
              and our team will review it carefully. You'll hear from us within 5-7 business days.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  college: '',
                  year: '',
                  major: '',
                  areaOfInterest: '',
                  experience: '',
                  motivation: ''
                });
              }}
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>  <Helmet>
    <title>Apply Now - Free Internship Program | InternBoys</title>
    <meta 
      name="description" 
      content="Apply for free internship program at InternBoys. No fees, remote work, professional certificate. Start your career journey today."
    />
    <meta 
      name="keywords" 
      content="internship application, apply for internship, free internship form, internship registration, career opportunity application"
    />
  </Helmet>
    <section id="application" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Apply Now
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Take the first step towards your career goals. Fill out the form below and join our internship program.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-50 rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200">
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label htmlFor="college" className="block text-sm font-semibold text-slate-700 mb-2">
                College/University *
              </label>
              <input
                type="text"
                id="college"
                name="college"
                required
                value={formData.college}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white"
                placeholder="Your College Name"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="year" className="block text-sm font-semibold text-slate-700 mb-2">
                Current Year *
              </label>
              <select
                id="year"
                name="year"
                required
                value={formData.year}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white"
              >
                <option value="">Select Year</option>
                <option value="1st">1st Year</option>
                <option value="2nd">2nd Year</option>
                <option value="3rd">3rd Year</option>
                <option value="4th">4th Year</option>
                <option value="graduate">Graduate</option>
              </select>
            </div>

            <div>
              <label htmlFor="major" className="block text-sm font-semibold text-slate-700 mb-2">
                Major/Field of Study *
              </label>
              <input
                type="text"
                id="major"
                name="major"
                required
                value={formData.major}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white"
                placeholder="Computer Science"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="areaOfInterest" className="block text-sm font-semibold text-slate-700 mb-2">
              Area of Interest *
            </label>
            <select
              id="areaOfInterest"
              name="areaOfInterest"
              required
              value={formData.areaOfInterest}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white"
            >
              <option value="">Select Area</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-development">Mobile Development</option>
              <option value="data-science">Data Science</option>
              <option value="machine-learning">Machine Learning</option>
              <option value="ui-ux-design">UI/UX Design</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="content-writing">Content Writing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="experience" className="block text-sm font-semibold text-slate-700 mb-2">
              Relevant Experience
            </label>
            <textarea
              id="experience"
              name="experience"
              rows={4}
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white resize-none"
              placeholder="Share any relevant projects, coursework, or previous experience..."
            ></textarea>
          </div>

          <div className="mb-8">
            <label htmlFor="motivation" className="block text-sm font-semibold text-slate-700 mb-2">
              Why do you want to join this internship? *
            </label>
            <textarea
              id="motivation"
              name="motivation"
              rows={4}
              required
              value={formData.motivation}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all bg-white resize-none"
              placeholder="Tell us what motivates you and what you hope to achieve..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </>
            ) : (
              <>
                Submit Application
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
    </>
  );
}
