import React from 'react';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import MonetizationSection from './components/MonetizationSection';
import BrandSection from './components/BrandSection';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-gray-900">Haymaker</div>
            <div className="hidden md:flex space-x-8">
              <a href="#content" className="text-gray-700 hover:text-gray-900">Content Creation</a>
              <a href="#monetization" className="text-gray-700 hover:text-gray-900">Monetization</a>
              <a href="#brand" className="text-gray-700 hover:text-gray-900">Brand Building</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:opacity-90 transition-all">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <ContentSection />
        <MonetizationSection />
        <BrandSection />
        <AboutUs />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Haymaker</h3>
              <p className="text-gray-400">Empowering athletes to build their personal brands.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#content" className="text-gray-400 hover:text-white">Content Creation</a></li>
                <li><a href="#monetization" className="text-gray-400 hover:text-white">Monetization</a></li>
                <li><a href="#brand" className="text-gray-400 hover:text-white">Brand Building</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">info@haymaker.com</li>
                <li className="text-gray-400">Los Angeles, CA</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Haymaker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;