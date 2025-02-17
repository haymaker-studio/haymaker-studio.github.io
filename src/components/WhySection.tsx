import React from 'react';
import { TrendingUp, Video, DollarSign } from 'lucide-react';

export default function WhySection() {
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Proven Strategies",
      description: "Drive millions of views with our battle-tested content strategies"
    },
    {
      icon: <Video className="w-8 h-8 text-blue-600" />,
      title: "Hands-Free Content",
      description: "Submit your raw footage and we'll handle the rest"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-600" />,
      title: "Multiple Revenue Streams",
      description: "From brand deals to merchandise, build a sustainable business"
    }
  ];

  return (
    <section id="why" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Haymaker?</h2>
          <p className="text-xl text-gray-300">We're not just another agency. We're your growth partners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-6 bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}