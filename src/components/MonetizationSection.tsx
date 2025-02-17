import React from 'react';
import { DollarSign, ShoppingBag, Link, Handshake } from 'lucide-react';

export default function MonetizationSection() {
  const revenueStreams = [
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Brand Partnerships",
      description: "Access our network of brands looking to collaborate with athletes",
      highlight: "Average Deal: $2,500-$25,000"
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: "Affiliate Marketing",
      description: "Earn passive income by promoting products you actually use",
      highlight: "15-30% Commission"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Merchandise",
      description: "Launch your own branded merchandise with zero upfront costs",
      highlight: "40-60% Profit Margin"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Platform Monetization",
      description: "Maximize earnings from YouTube, Instagram, and TikTok",
      highlight: "Multiple Revenue Streams"
    }
  ];

  return (
    <section id="monetization" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-green-600 mb-6">
            <DollarSign className="w-4 h-4" />
            <span className="text-sm font-medium">Revenue Generation</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Multiple Revenue Streams</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Turn your influence into income with our proven monetization strategies. We help you 
            diversify your revenue streams and build sustainable income.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {revenueStreams.map((stream, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-blue-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-6 bg-gradient-to-br from-green-500 to-blue-500 p-3 rounded-lg inline-block text-white">
                  {stream.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{stream.title}</h3>
                <p className="text-gray-600 mb-4">{stream.description}</p>
                <div className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                  {stream.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}