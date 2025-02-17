import React from 'react';
import { Check } from 'lucide-react';

export default function Services() {
  const packages = [
    {
      name: "Full Management",
      price: "$1,500+",
      features: [
        "8-12 videos per month",
        "25%+ revenue share",
        "Full-service content strategy",
        "Brand deal opportunities",
        "Growth analytics",
        "24/7 support"
      ]
    },
    {
      name: "Growth Package",
      price: "$750-$1,000",
      features: [
        "6-12 videos per month",
        "35%+ revenue share",
        "Professional editing",
        "Growth support",
        "Monthly strategy calls",
        "Performance tracking"
      ]
    },
    {
      name: "College Athlete",
      price: "$350",
      features: [
        "8-12 posts/month",
        "35-40% revenue share",
        "Videos & images",
        "Basic growth support",
        "Quarterly strategy review",
        "3-month commitment"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Plans for Every Athlete</h2>
          <p className="text-xl text-gray-600">Choose the package that best fits your goals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
              <div className="text-4xl font-bold mb-6">{pkg.price}</div>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}