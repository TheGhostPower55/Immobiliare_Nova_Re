import React from 'react';
import { MapPin, Bed, Bath, Square, Euro } from 'lucide-react';

const Properties = () => {
  const properties = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Villa di Lusso - Parioli",
      location: "Roma, Parioli",
      price: "1.200.000",
      type: "Vendita",
      beds: 4,
      baths: 3,
      area: 280,
      description: "Elegante villa con giardino privato nel prestigioso quartiere Parioli."
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Appartamento Moderno - Trastevere",
      location: "Roma, Trastevere",
      price: "450.000",
      type: "Vendita",
      beds: 2,
      baths: 2,
      area: 95,
      description: "Appartamento completamente ristrutturato nel cuore di Trastevere."
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Attico con Terrazza - Centro Storico",
      location: "Roma, Centro Storico",
      price: "3.500",
      type: "Affitto",
      beds: 3,
      baths: 2,
      area: 120,
      description: "Attico con terrazza panoramica e vista sui monumenti di Roma."
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Ufficio Prestigioso - EUR",
      location: "Roma, EUR",
      price: "280.000",
      type: "Vendita",
      beds: 0,
      baths: 2,
      area: 150,
      description: "Ufficio moderno in palazzo di prestigio nel quartiere EUR."
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Casa Unifamiliare - Cassia",
      location: "Roma, Via Cassia",
      price: "680.000",
      type: "Vendita",
      beds: 3,
      baths: 2,
      area: 180,
      description: "Casa indipendente con giardino in zona residenziale tranquilla."
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Loft Industriale - Ostiense",
      location: "Roma, Ostiense",
      price: "2.200",
      type: "Affitto",
      beds: 1,
      baths: 1,
      area: 85,
      description: "Loft di design in ex area industriale, completamente rinnovato."
    }
  ];

  return (
    <section id="properties" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Immobili in Evidenza
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Scopri la nostra selezione di immobili di prestigio a Roma. 
            Ogni proprietà è selezionata per qualità, posizione e valore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-200"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    property.type === 'Vendita' 
                      ? 'bg-black text-white' 
                      : 'bg-gray-700 text-white'
                  }`}>
                    {property.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg flex items-center">
                    <Euro size={16} className="text-green-600 mr-1" />
                    <span className="font-bold text-green-600">
                      {property.price}{property.type === 'Affitto' ? '/mese' : ''}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">
                  {property.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin size={16} className="mr-2" />
                  <span>{property.location}</span>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {property.description}
                </p>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  {property.beds > 0 && (
                    <div className="flex items-center text-gray-500">
                      <Bed size={16} className="mr-1" />
                      <span className="text-sm">{property.beds}</span>
                    </div>
                  )}
                  <div className="flex items-center text-gray-500">
                    <Bath size={16} className="mr-1" />
                    <span className="text-sm">{property.baths}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Square size={16} className="mr-1" />
                    <span className="text-sm">{property.area}m²</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-gradient-to-r from-gray-600 to-gray-500 text-white py-2 rounded-lg hover:from-gray-500 hover:to-gray-400 transition-all duration-300 font-semibold">
                  Maggiori Dettagli
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Vedi Tutti gli Immobili
          </button>
        </div>
      </div>
    </section>
  );
};

export default Properties;