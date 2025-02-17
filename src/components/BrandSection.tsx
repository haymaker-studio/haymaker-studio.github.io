import React from 'react';
import { Palette, ShoppingBag, Target, Boxes } from 'lucide-react';

export default function BrandSection() {
  const brandFeatures = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Brand Identity Design",
      description: "Professional logo design, color schemes, and visual identity that captures your unique story"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Merchandise Strategy",
      description: "Custom merch design, production setup, and inventory management solutions"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Launch Strategy",
      description: "Targeted marketing campaigns and launch plans to build anticipation and drive sales"
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: "Fulfillment Solutions",
      description: "Seamless order processing and worldwide shipping handled for you"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full text-purple-600 mb-6">
            <ShoppingBag className="w-4 h-4" />
            <span className="text-sm font-medium">Launch Your Brand</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Build Your Empire</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your influence into a powerful brand. We handle everything from design to fulfillment, 
            letting you focus on what you do best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brandFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="mb-6 bg-gradient-to-br from-purple-500 to-blue-500 p-3 rounded-lg inline-block text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}