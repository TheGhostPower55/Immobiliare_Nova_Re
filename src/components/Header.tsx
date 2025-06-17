import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-black text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+39 06 1234 5678</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>info@novare.it</span>
            </div>
          </div>
          <div className="hidden sm:block">
            <span>Roma - Agenzia Immobiliare di Prestigio</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-12 flex items-center justify-center">
                <img
                  src="/Progetto senza titolo.png"
                  alt="Nova RE Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">Nova RE</h1>
                <p className="text-xs text-gray-500">Gruppo Immobiliare</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-black transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-black transition-colors font-medium">
                Servizi
              </button>
              <button onClick={() => scrollToSection('properties')} className="text-gray-700 hover:text-black transition-colors font-medium">
                Immobili
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-black transition-colors font-medium">
                Chi Siamo
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-black to-gray-800 text-white px-6 py-2 rounded-lg hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-semibold shadow-lg">
                Contatti
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 hover:text-black"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-black transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-black transition-colors font-medium">
                Servizi
              </button>
              <button onClick={() => scrollToSection('properties')} className="text-left text-gray-700 hover:text-black transition-colors font-medium">
                Immobili
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-black transition-colors font-medium">
                Chi Siamo
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left bg-gradient-to-r from-black to-gray-800 text-white px-6 py-2 rounded-lg hover:from-gray-800 hover:to-gray-700 transition-all duration-300 font-semibold w-fit">
                Contatti
              </button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;