import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-10 flex items-center justify-center">
                <img
                  src="/Progetto senza titolo.png"
                  alt="Nova RE Logo"
                  className="h-8 w-auto object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Nova RE</h1>
                <p className="text-xs text-gray-400">Gruppo Immobiliare</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              La tua agenzia immobiliare di fiducia a Roma dal 1995. 
              Professionalità, trasparenza e risultati garantiti.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-300">Link Utili</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Servizi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('properties')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Immobili
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Chi Siamo
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-300">I Nostri Servizi</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Vendita Immobili</li>
              <li>Affitti e Locazioni</li>
              <li>Investimenti Immobiliari</li>
              <li>Valutazioni e Perizie</li>
              <li>Consulenza Specializzata</li>
              <li>Assistenza Legale</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-300">Contatti</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-gray-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Via del Corso 123</p>
                  <p>00186 Roma, Italia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-gray-400 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>+39 06 1234 5678</p>
                  <p>+39 348 123 4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-gray-400 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>info@novare.it</p>
                  <p>vendite@novare.it</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-900 rounded-lg p-8 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-300">
              Rimani Aggiornato
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Iscriviti alla nostra newsletter per ricevere le migliori offerte immobiliari 
              e gli aggiornamenti del mercato romano.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-4 py-3 rounded-lg text-black focus:ring-2 focus:ring-gray-500 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-gray-600 to-gray-500 text-white px-6 py-3 rounded-lg hover:from-gray-500 hover:to-gray-400 transition-all duration-300 font-semibold">
                Iscriviti
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Nova RE. Tutti i diritti riservati. | P.IVA: 12345678901
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Termini di Servizio
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;