import React from 'react';
import { Star } from 'lucide-react';

export default function CaseStudies() {
  const cases = [
    {
      name: "Michael Thompson",
      sport: "Basketball",
      results: "500K+ new followers in 6 months",
      testimonial: "Haymaker took my social media to the next level. The growth has been incredible!",
      image: "https://images.unsplash.com/photo-1574279606130-09958dc756f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80"
    },
    {
      name: "Sarah Martinez",
      sport: "Soccer",
      results: "200K+ engagement per post",
      testimonial: "I was struggling to monetize—Haymaker changed that. Now I'm landing major brand deals!",
      image: "https://images.unsplash.com/photo-1539701938214-0d9736e1c16c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2560&q=80"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Athletes We've Helped Grow</h2>
          <p className="text-xl text-gray-600">Real results from real athletes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cases.map((case_, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img
                src={case_.image}
                alt={case_.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-2">{case_.name}</h3>
                <p className="text-blue-600 mb-4">{case_.sport}</p>
                <p className="text-gray-600 mb-4">{case_.results}</p>
                <blockquote className="text-gray-700 italic">"{case_.testimonial}"</blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            See More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
}