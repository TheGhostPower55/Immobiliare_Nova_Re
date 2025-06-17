import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alessandro M.",
      location: "Acquisto Casa - Ponte di Nona",
      rating: 5,
      text: "Abbiamo acquistato casa con Nova Re di Ponte di Nona. In particolare Manuel ci ha seguito fino al rogito, rivelandosi sempre disponibile ed efficiente, gestendo ogni situazione che ci si è presentata. Consigliamo!",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Paola D.",
      location: "Affitto Appartamento",
      rating: 5,
      text: "Ho trovato casa con loro, persone disponibili e flessibili con i miei orari lavorativi, alla fine siamo riusciti a trovare la casa giusta per noi, un particolare ringraziamento a Marco e a tutto il suo team. Bravi consiglio",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Francesco M.",
      location: "Vendita Immobile",
      rating: 5,
      text: "Sono stato particolarmente colpito dalla professionalità di tutto lo studio soprattutto dalla dirigente Sharon che ha messo in concreto la disponibilità, la gentilezza e la cortesia nei miei confronti. Voglio anche menzionare il sig. Lorenzo che mi ha seguito per la vendita. Grazie a tutti.",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Dicono di Noi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nova Re ha già aiutato numerosi clienti a vendere, acquistare e affittare immobili con grande successo. 
            Grazie alla nostra combinazione di esperienza, tecnologia e rete di contatti, riusciamo a offrire un 
            servizio competitivo, massimizzando i risultati per chi desidera vendere o affittare una proprietà.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 relative hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 text-gray-400 opacity-20">
                <Quote size={40} />
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-gray-500 fill-current" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Client info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-black">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-black to-gray-800 text-white rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Lascia Anche Tu una Recensione</h3>
            <p className="mb-6 text-gray-200">
              La tua opinione è importante per noi. Condividi la tua esperienza con Nova Re.
            </p>
            <button className="bg-gradient-to-r from-gray-500 to-gray-400 text-black px-8 py-3 rounded-lg font-semibold hover:from-gray-400 hover:to-gray-300 transition-all duration-300 transform hover:scale-105">
              Scrivi una Recensione
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;