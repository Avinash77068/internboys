import { FileText, UserCheck, Rocket, GraduationCap } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Submit Application',
    description: 'Fill out our simple application form with your details, area of interest, and what you hope to learn.',
    step: '01'
  },
  {
    icon: UserCheck,
    title: 'Review Process',
    description: 'Our team reviews applications carefully. We\'ll reach out to discuss your goals and answer questions.',
    step: '02'
  },
  {
    icon: Rocket,
    title: 'Start Your Journey',
    description: 'Get onboarded, meet your mentor, and dive into real projects. Begin building valuable experience.',
    step: '03'
  },
  {
    icon: GraduationCap,
    title: 'Complete & Certify',
    description: 'Finish your projects, showcase your work, and receive your official completion certificate.',
    step: '04'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A simple, straightforward process to get you started on your internship journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 h-full">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.step}
                </div>

                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-blue-500" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
