import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import TextAreaField from "../../customComponent/TextAreaField";
import InputField from "../../customComponent/InputField";
import SelectField from "../../customComponent/SelectField";

export default function ApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    major: "",
    areaOfInterest: "",
    experience: "",
    motivation: "",
    resume: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) =>
    setFormData({ ...formData, resume: e.target.files[0] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((res) => setTimeout(res, 1500));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted)
    return (
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Application Submitted Successfully!
            </h3>
            <p className="text-slate-600 mb-6">
              Thank you for applying! You’ll hear from us within 5–7 business
              days.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  college: "",
                  year: "",
                  major: "",
                  areaOfInterest: "",
                  experience: "",
                  motivation: "",
                  resume: null,
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

  return (
    <>
      <Helmet>
        <title>Apply Now - Free Internship Program | InternBoys</title>
        <meta
          name="description"
          content="Apply for free internship program at InternBoys. Remote work, professional certificate. Start your career journey today."
        />
      </Helmet>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-3">
              Apply Now
            </h2>
            <p className="text-slate-600">
              Fill out the form below and take the first step toward your
              career.
            </p>
          </div>

          {/* ✅ Card Wrapper */}
          <div className="bg-white border border-slate-200 shadow-xl rounded-3xl p-10">
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <InputField
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
                <InputField
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
                <InputField
                  label="College"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  placeholder="Enter your college name"
                  required
                />
                <InputField
                  label="Major"
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  placeholder="Enter your major/branch"
                  required
                />
                <SelectField
                  label="Year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  options={[
                    "1st Year",
                    "2nd Year",
                    "3rd Year",
                    "4th Year",
                    "Graduate",
                  ]}
                />
                <SelectField
                  label="Area of Interest"
                  name="areaOfInterest"
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                  required
                  options={[
                    "Web Development",
                    "Mobile Development",
                    "Data Science",
                    "Machine Learning",
                    "UI/UX Design",
                    "Digital Marketing",
                    "Content Writing",
                    "Other",
                  ]}
                />
              </div>

              <div className="space-y-6 mb-6">
                <TextAreaField
                  label="Experience / Projects"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Share relevant experience or projects..."
                />
                <TextAreaField
                  label="Motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  placeholder="Why do you want to join this internship?"
                />
              </div>

              {/* Resume Upload */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Upload Resume (PDF/DOC) *
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleFileChange}
                  className="block w-full text-sm text-slate-700 
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100 cursor-pointer"
                />
                {formData.resume && (
                  <p className="text-sm text-green-600 mt-2">
                    ✅ {formData.resume.name} selected
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
