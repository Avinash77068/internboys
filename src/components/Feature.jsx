import { Code, Users, Trophy, Lightbulb, MessageSquare, Award } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Real Projects',
    description: 'Work on actual projects that matter. Build solutions that real users will interact with and appreciate.'
  },
  {
    icon: Users,
    title: 'Expert Mentorship',
    description: 'Learn from experienced professionals who are passionate about helping you grow and succeed in your career.'
  },
  {
    icon: Trophy,
    title: 'Skill Development',
    description: 'Develop in-demand technical and soft skills that employers are actively looking for in today\'s job market.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Focus',
    description: 'Contribute fresh ideas and innovative solutions. Your perspective matters and can drive real change.'
  },
  {
    icon: MessageSquare,
    title: 'Collaborative Environment',
    description: 'Join a supportive community of fellow interns. Learn together, share knowledge, and build lasting connections.'
  },
  {
    icon: Award,
    title: 'Completion Certificate',
    description: 'Receive an official certificate upon successful completion to showcase your achievements and experience.'
  }
];

// Array of gradients to cycle through
const gradients = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-green-400 to-lime-400',
  'from-red-400 to-orange-400',
  'from-indigo-500 to-violet-500',
  'from-teal-400 to-emerald-400'
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Our Program
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to kickstart your professional journey and build a strong foundation for success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-200 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
