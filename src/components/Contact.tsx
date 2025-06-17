import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Briefcase } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const offices = [
    {
      name: "Tor Pignattara",
      address: "Via di Acqua Bullicante, 191",
      city: "00176 Roma RM",
      phone: "+39 345 345 4186"
    },
    {
      name: "Torre Maura",
      address: "Via dei Colombi, 110B-C",
      city: "00169 Roma RM",
      phone: "+39 389 961 5663"
    },
    {
      name: "Ponte di Nona",
      address: "Via Marc Seguin, 3",
      city: "00132 Roma RM",
      phone: "+39 328 593 8181"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Contattaci
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Se desideri vendere, acquistare o affittare un immobile a Roma, Nova Re è il partner ideale per 
            accompagnarti in questo percorso. Contattaci per una prima consulenza gratuita e scopri come 
            possiamo aiutarti a realizzare i tuoi obiettivi immobiliari.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold text-black mb-8">
              Le Nostre Sedi
            </h3>
            
            <div className="space-y-6 mb-8">
              {offices.map((office, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-black p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">{office.name}</h4>
                    <p className="text-gray-600">{office.address}</p>
                    <p className="text-gray-600">{office.city}</p>
                    <p className="text-gray-600 mt-2">{office.phone}</p>
                  </div>
                </div>
              ))}

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-black p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Email</h4>
                  <p className="text-gray-600">info@novareimmobiliare.it</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="bg-gray-700 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">Orari di Apertura</h4>
                  <p className="text-gray-600">Lun - Ven: 9:00 - 19:00</p>
                  <p className="text-gray-600">Sab: 9:00 - 13:00</p>
                  <p className="text-gray-600">Dom: Su appuntamento</p>
                </div>
              </div>
            </div>

            {/* Lavora con Noi section */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="bg-black p-3 rounded-lg">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-black mb-2">Lavora con Noi</h4>
                  <p className="text-gray-600 mb-3">
                    Stai cercando di creare da zero la tua carriera? Scegli Nova Re Immobiliare:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-3">
                    <li>Ambiente dinamico e giovanile</li>
                    <li>Formazione continua</li>
                    <li>Possibilità di crescita</li>
                    <li>Anche prima esperienza</li>
                  </ul>
                  <p className="text-gray-600">
                    Manda il tuo CV a: <a href="mailto:info.novareimmobiliare@gmail.com" className="text-black font-semibold hover:underline">info.novareimmobiliare@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-3xl font-bold text-black mb-8">
              Richiedi Informazioni
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-green-600 mb-2">Messaggio Inviato!</h4>
                <p className="text-gray-600">Ti contatteremo entro 24 ore</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                      placeholder="tua@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                      placeholder="+39 123 456 7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Servizio di Interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Seleziona un servizio</option>
                      <option value="vendita">Vendita Immobile</option>
                      <option value="acquisto">Acquisto Immobile</option>
                      <option value="affitto">Affitto</option>
                      <option value="valutazione">Valutazione</option>
                      <option value="investimento">Investimento</option>
                      <option value="consulenza">Consulenza</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Messaggio *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-colors"
                    placeholder="Descrivi le tue esigenze..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-4 px-6 rounded-lg font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg"
                >
                  <Send size={20} />
                  <span>Invia Richiesta</span>
                </button>

                <p className="text-sm text-gray-500 text-center">
                  I tuoi dati sono protetti e utilizzati solo per rispondere alla tua richiesta.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Map section */}
        <div>
          <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
            <div className="text-center text-gray-600">
              <MapPin size={48} className="mx-auto mb-4" />
              <p className="text-lg font-semibold">Le Nostre Sedi</p>
              <p>Tor Pignattara, Torre Maura, Ponte di Nona</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;