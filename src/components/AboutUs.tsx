import React from 'react';
import { Brain, Rocket, Lightbulb } from 'lucide-react';

export default function AboutUs() {
  const team = [
    {
      name: "Ian Gunther",
      role: "Co-Founder & Social Growth Architect",
      description: "Stanford gymnast turned creator with 1.6M+ YouTube subscribers and 3B+ views. Pioneered AI-powered content strategies that revolutionized athlete content creation. Expert in viral growth mechanics and audience psychology.",
      icon: <Rocket className="w-16 h-16" />
    },
    {
      name: "Siming Li",
      role: "Co-Founder & AI Innovation Lead",
      description: "AI pioneer revolutionizing creator economics through machine learning. Developed proprietary algorithms for content optimization and brand matching. Expert in predictive analytics for creator success.",
      icon: <Brain className="w-16 h-16" />
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 mb-6">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm font-medium">Domain Experts</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">Where Social Media Expertise Meets Artificial Intelligence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 mix-blend-overlay group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-colors"></div>
              <div className="relative flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full">
                  <div className="text-gradient-to-br from-blue-600 to-purple-600">
                    {member.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-gray-50 rounded-xl">
            <p className="text-lg text-gray-600">
              Combining <span className="font-semibold text-blue-600">decade-long expertise</span> in social media growth 
              with <span className="font-semibold text-purple-600">cutting-edge AI technology</span> to transform athlete brands
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}