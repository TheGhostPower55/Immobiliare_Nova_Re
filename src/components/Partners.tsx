import React from 'react';
import { Building2, CreditCard, LineChart, Camera, Search, Share2 } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      name: "EUROANSA",
      type: "SOCIETÀ DI MEDIAZIONE CREDITIZIA",
      description: "Euroansa è un network di consulenza creditizia che collabora con oltre 20 banche, offrendo mutui e prodotti finanziari personalizzati. Con trasparenza e supporto costante, è il partner ideale per soluzioni rapide e mirate nel settore immobiliare."
    },
    {
      name: "AVVERA GRUPPO CREDEM",
      type: "SOCIETÀ DI CREDITO",
      description: "Avvera, parte del Gruppo Credem, offre soluzioni finanziarie flessibili, dai prestiti personali ai finanziamenti per immobili e ristrutturazioni. Grazie alla competenza nel mercato del credito, fornisce prodotti su misura per ogni esigenza."
    },
    {
      name: "KIRON",
      type: "SOCIETÀ DI MEDIAZIONE CREDITIZIA",
      description: "Kìron Partner SpA, con oltre 25 anni di esperienza, è leader nella mediazione creditizia in Italia. Offre soluzioni su misura per mutui, prestiti e assicurazioni, accompagnando i clienti in ogni fase dell'acquisto casa."
    },
    {
      name: "REA COMPANY",
      type: "AGENZIA DI MARKETING",
      description: "Rea Company ci connette al futuro in modo semplice e intelligente e si prende cura sia dei clienti che dei colleghi, con l'obiettivo di r-Innovare sempre. Offre servizi consulenziali interni che permettono a noi di garantirvi un servizio eccellente."
    }
  ];

  const tools = [
    {
      icon: <Building2 className="h-8 w-8" />,
      name: "IMMOBILIARE.IT",
      description: "e portali partner"
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      name: "STATISTICHE",
      description: "Immobili"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      name: "FOTO 360°",
      description: "virtual tour"
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      name: "IL TUO IMMOBILE",
      description: "in esclusiva"
    },
    {
      icon: <Search className="h-8 w-8" />,
      name: "RICERCA IMMOBILI",
      description: "ovunque tu sia"
    },
    {
      icon: <Share2 className="h-8 w-8" />,
      name: "SOCIAL MEDIA",
      description: "presenza costante"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            I Nostri Partner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Collaboriamo con i migliori partner del settore per offrire un servizio completo e di qualità
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-black mb-2">{partner.name}</h3>
              <p className="text-gray-600 font-semibold mb-4">{partner.type}</p>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold text-black mb-8">
            I Nostri Strumenti
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 text-center"
              >
                <div className="text-gray-600 mb-4 flex justify-center">
                  {tool.icon}
                </div>
                <h4 className="font-bold text-black mb-2">{tool.name}</h4>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 