import React from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Award className="h-8 w-8" />, value: "Innovazione", label: "Tecnologia e Digitalizzazione" },
    { icon: <Users className="h-8 w-8" />, value: "Empatia", label: "Cliente al Centro" },
    { icon: <Clock className="h-8 w-8" />, value: "Trasparenza", label: "Comunicazione Chiara" },
    { icon: <MapPin className="h-8 w-8" />, value: "Professionalità", label: "Esperienza Consolidata" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Chi Siamo
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <strong className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Nova Re</strong> nasce dalla volontà comune dei suoi soci di innovare il settore immobiliare, 
                integrando digitalizzazione, trasparenza, empatia ed esperienza. Il nostro obiettivo è quello 
                di rendere il processo di compravendita e affitto di immobili semplice, veloce, accessibile 
                e trasparente, mettendo il cliente sempre al centro di tutte le operazioni.
              </p>
              <p>
                Ci distinguiamo per l'utilizzo di nuove forme e canali di comunicazione, accessibili a tutti, 
                e per la possibilità di offrire consulenze gratuite e un'assistenza professionale continua. 
                Grazie a un team esperto e qualificato e ad una rete di contatti consolidata, garantiamo 
                risultati concreti e un servizio su misura che si adatta perfettamente alle esigenze di chi 
                vende, acquista o affitta un immobile.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-gray-400/30">
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-3">La Nostra Visione</h3>
              <p className="text-gray-200">
                Crediamo in un futuro del settore immobiliare che combini tecnologia e centralità del cliente, 
                creando un vero e proprio rapporto di fiducia reciproca. Vogliamo essere un punto di riferimento 
                per chi cerca non solo un immobile, ma anche una consulenza professionale affidabile e una 
                gestione chiara e serena dell'intera trattativa.
              </p>
            </div>
          </div>

          {/* Right side - Image and Stats */}
          <div>
            <div className="relative mb-8">
              <img
                src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Roma panorama"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gray-400/30 text-center group hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-gray-300 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-12 bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Il Nostro Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gray-400/30">
              <div className="w-20 h-20 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-black">
                GL
              </div>
              <h4 className="text-xl font-bold mb-2">Gianluca</h4>
              <p className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-2">Co-Founder</p>
              <p className="text-gray-300 text-sm">Esperto in innovazione e tecnologia immobiliare</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gray-400/30">
              <div className="w-20 h-20 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-black">
                SH
              </div>
              <h4 className="text-xl font-bold mb-2">Sharon</h4>
              <p className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-2">Co-Founder</p>
              <p className="text-gray-300 text-sm">Specialista in relazioni clienti e sviluppo business</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-gray-400/30">
              <div className="w-20 h-20 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-black">
                AL
              </div>
              <h4 className="text-xl font-bold mb-2">Alessandro</h4>
              <p className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent mb-2">Co-Founder</p>
              <p className="text-gray-300 text-sm">Esperto in strategie immobiliari e gestione operativa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;