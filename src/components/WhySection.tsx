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
      title: "Direct Brand Deals",
      description: "Access exclusive monetization opportunities"
    }
  ];

  return (
    <section id="why" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Haymaker?</h2>
          <p className="text-xl text-gray-600">We're not just another agency. We're your growth partners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}