import React from 'react';
import { Search, MapPin, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/roma-skyline.png')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Il Tuo Futuro
            <span className="block bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Inizia a Roma</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Scopri le migliori opportunità immobiliari nella Città Eterna con Nova RE, 
            la tua agenzia di fiducia dal 1995.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gray-400/30">
              <div className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-200">Immobili Venduti</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gray-400/30">
              <div className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-2">25+</div>
              <div className="text-gray-200">Anni di Esperienza</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gray-400/30">
              <div className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-gray-200">Clienti Soddisfatti</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('properties')}
              className="bg-gradient-to-r from-gray-600 to-gray-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-gray-500 hover:to-gray-400 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <Search size={20} />
              <span>Esplora Immobili</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center space-x-2"
            >
              <MapPin size={20} />
              <span>Valuta il Tuo Immobile</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <TrendingUp size={24} className="rotate-90" />
      </div>
    </section>
  );
};

export default Hero;