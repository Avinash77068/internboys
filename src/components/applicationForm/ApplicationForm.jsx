import { useState } from "react";
import { Send, X } from "lucide-react";
import SkillTagInput from "./SkillTagInput";
import { Helmet } from "react-helmet-async";
import TextAreaField from "../../customComponent/TextAreaField";
import InputField from "../../customComponent/InputField";
import SelectField from "../../customComponent/SelectField";
import submitForm from "../../AiComponent&Fucntion/emailSendingFunction";
import api from "../../services/api";

export default function ApplicationForm() {
  const [skills, setSkills] = useState([]);
  const [resumeFile, setResumeFile] = useState(null); // ✅ Resume state

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
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setResumeFile(file);
  };

  const removeFile = () => setResumeFile(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare form data including skills and resume
    const dataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      dataToSend.append(key, formData[key]);
    });

    dataToSend.append("skills", JSON.stringify(skills));
    if (resumeFile) dataToSend.append("resume", resumeFile);

    // Your submit function should handle FormData for file uploads
    try {
      await api.post('/users/apply', dataToSend);
      console.log('Application submitted successfully');
    } catch (error) {
      console.error('Application submission failed:', error);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 bg-white">
      <Helmet>
        <title>Apply Now - Internship Program | InternBoys</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-5">
        <h2 className="text-4xl font-bold text-center mb-8">Apply Now</h2>

        <div className="bg-white border border-slate-200 shadow-lg rounded-2xl p-10">
          <form onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <InputField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <InputField
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <InputField
                label="College"
                name="college"
                value={formData.college}
                onChange={handleChange}
                required
              />
              <InputField
                label="Major"
                name="major"
                value={formData.major}
                onChange={handleChange}
                required
              />
              <SelectField
                label="Year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
                options={["1st", "2nd", "3rd", "4th", "Graduate"]}
              />
            </div>

            {/* 🔥 Skills Component */}
            <SkillTagInput skills={skills} setSkills={setSkills} />

            {/* 🔥 Resume Upload */}
            <div className="mt-6">
              <label className="block font-semibold text-gray-700 mb-2">
                Upload Resume
              </label>
              {resumeFile ? (
                <div className="flex items-center gap-2 bg-green-600 text-white px-3 py-1 rounded-full cursor-pointer hover:bg-green-700">
                  {resumeFile.name}
                  <X size={16} onClick={removeFile} />
                </div>
              ) : (
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="border rounded p-2"
                />
              )}
            </div>

            <div className="space-y-6 mt-6">
              <TextAreaField
                label="Experience"
                name="experience"
                onChange={handleChange}
              />
              <TextAreaField
                label="Motivation"
                name="motivation"
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  Submit <Send size={20} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
