import React from 'react';
import { PackageCheck, Upload, Settings } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <PackageCheck className="w-12 h-12 text-blue-600" />,
      title: "Choose a Package",
      description: "Select the service package that best fits your needs and goals"
    },
    {
      icon: <Upload className="w-12 h-12 text-blue-600" />,
      title: "Submit Your Footage",
      description: "Share your raw content with our expert team"
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: "We Handle the Rest",
      description: "Our team takes care of editing, strategy, and brand outreach"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Three simple steps to transform your social media presence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-6 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}