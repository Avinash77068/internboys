import gradients from "../data/color";
import features from "../data/Features";





export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Our Program
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to kickstart your professional journey and build
            a strong foundation for success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-200 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${
                  gradients[index % gradients.length]
                } rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/30`}
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
