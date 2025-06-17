import React from 'react';
import { Home, Key, TrendingUp, Users, Calculator, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-12 w-12" />,
      title: "Vendita di Immobili Residenziali e Commerciali",
      description: "A Nova Re, ci impegniamo a facilitare la vendita di immobili residenziali e commerciali a Roma. Offriamo un servizio completo che include valutazioni accurate, strategie di marketing mirate e assistenza professionale continua.",
      features: ["Valutazioni accurate degli immobili", "Strategie di marketing mirate", "Assistenza professionale continua"]
    },
    {
      icon: <Key className="h-12 w-12" />,
      title: "Affitto di Immobili",
      description: "Se stai cercando un immobile da affittare a Roma, Nova Re è il partner ideale. Offriamo una vasta gamma di soluzioni residenziali e commerciali, selezionando attentamente gli immobili più adatti alle esigenze dei nostri clienti.",
      features: ["Selezione degli inquilini", "Gestione del contratto di locazione", "Registrazione presso gli enti preposti"]
    },
    {
      icon: <Calculator className="h-12 w-12" />,
      title: "Consulenza e Valutazione Gratuita",
      description: "Offriamo una prima consulenza e valutazione gratuita per tutti i nostri clienti. I nostri esperti immobiliari valuteranno accuratamente le vostre esigenze ed il valore della vostra proprietà.",
      features: ["Valutazione gratuita", "Consigli personalizzati", "Assistenza notarile"]
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Supporto Legale e Tecnico",
      description: "Forniamo assistenza completa per la gestione dei documenti legali e supporto tecnico immobiliare per risolvere eventuali problematiche relative alla proprietà.",
      features: ["Gestione documenti legali", "Supporto tecnico immobiliare", "Risoluzione problematiche"]
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Assistenza Professionale",
      description: "Il nostro team di professionisti con anni di esperienza nel settore immobiliare romano mette a disposizione la propria conoscenza approfondita del mercato e del territorio.",
      features: ["Team esperto e qualificato", "Conoscenza del mercato", "Rete di contatti consolidata"]
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Innovazione e Tecnologia",
      description: "Utilizziamo tecnologie digitali e una comunicazione smart per facilitare il processo di compravendita o affitto, rendendo l'intero percorso semplice e accessibile.",
      features: ["Tecnologie digitali", "Comunicazione smart", "Gestione trasparente"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            I Nostri Servizi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La nostra missione è quella di semplificare e ottimizzare il processo immobiliare, 
            trasformando le difficoltà in piaceri, creando e garantendo un percorso trasparente 
            e senza stress per i nostri clienti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-200"
            >
              <div className="text-gray-600 mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:text-black">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Richiedi Consultazione Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;