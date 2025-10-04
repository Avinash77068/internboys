import { CheckCircle2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const benefits = [
  'Gain practical, hands-on experience in your field of study',
  'Build a professional portfolio with real project work',
  'Network with industry professionals and fellow interns',
  'Flexible remote work arrangement',
  'Learn industry-standard tools and best practices',
  'Receive mentorship and career guidance',
  'No financial barriers - completely free program',
  'Official completion certificate to boost your resume'
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

    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              What You'll Gain From This Internship
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our internship program is designed to bridge the gap between academic learning and
              professional expertise. You'll walk away with tangible skills, real experience, and
              the confidence to excel in your career.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-700 text-lg leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center text-white">
                  <div className="text-7xl font-bold mb-4">100%</div>
                  <div className="text-2xl font-semibold mb-2">Free Program</div>
                  <div className="text-lg opacity-90">No Hidden Costs</div>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-1">3-6</div>
                <div className="text-sm text-slate-600">Months Duration</div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-1">Remote</div>
                <div className="text-sm text-slate-600">Work Anywhere</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
