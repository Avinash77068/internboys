import { FileText, UserCheck, Rocket, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description:
      "Fill out our simple application form with your details, area of interest, and what you hope to learn.",
    step: "01",
  },
  {
    icon: UserCheck,
    title: "Review Process",
    description:
      "Our team reviews applications carefully. We'll reach out to discuss your goals and answer questions.",
    step: "02",
  },
  {
    icon: Rocket,
    title: "Start Your Journey",
    description:
      "Get onboarded, meet your mentor, and dive into real projects. Begin building valuable experience.",
    step: "03",
  },
  {
    icon: GraduationCap,
    title: "Complete & Certify",
    description:
      "Finish your projects, showcase your work, and receive your official completion certificate.",
    step: "04",
  },
];

export default steps;