import React from 'react';
import { Video, Wand2, BarChart3, Clock } from 'lucide-react';

export default function ContentSection() {
  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Professional Editing",
      description: "Submit your raw footage and our expert team transforms it into engaging content"
    },
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: "Content Strategy",
      description: "Data-driven content planning to maximize reach and engagement"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Growth Analytics",
      description: "Detailed performance tracking and optimization recommendations"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Consistent Posting",
      description: "Never miss an upload with our managed content calendar"
    }
  ];

  return (
    <section id="content" className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 mb-6">
            <Video className="w-4 h-4" />
            <span className="text-sm font-medium">Hands-Free Content Creation</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Focus on Your Sport</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let us handle your content while you focus on what you do best. Our team of experts will 
            transform your raw footage into engaging content that grows your audience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-6 bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-lg inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}