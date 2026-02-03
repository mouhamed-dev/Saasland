
import React from 'react';

const testimonials = [
  {
    text: "La mise en œuvre de DataPulse a révolutionné notre équipe. L'interface intuitive et les fonctionnalités puissantes ont considérablement amélioré notre productivité.",
    author: "Mamadou Fofana",
    position: "CEO,  Startup Tech",
    image: "https://github.com/mouhamed-dev/Saasland/blob/dcb4ce113cd7f7c02bb348b776a5d542705e3c44/public/img/1.png?raw=true"
  },
  {
    text: "DataPulse nous a permis de centraliser nos KPI en quelques minutes. Les dashboards sont clairs, rapides et vraiment personnalisables. Un vrai gain de temps au quotidien.",
    author: "Maimouna M.",
    position: "Responsable Marketing",
    image: "https://github.com/mouhamed-dev/Saasland/blob/dcb4ce113cd7f7c02bb348b776a5d542705e3c44/public/img/2.png?raw=true"
  },
  {
    text: "Nous avons essayé plusieurs plateformes SaaS avant, mais DataPulse offre le parfait équilibre entre fonctionnalités et facilité d'utilisation. Je recommande DataPulse à tous.",
    author: "Seydina Assane DIOP",
    position: "Chef de produit, TechInnovations",
    image: "https://github.com/mouhamed-dev/Saasland/blob/dcb4ce113cd7f7c02bb348b776a5d542705e3c44/public/img/3.png?raw=true"
  }
];

const TestimonialsSection = () => {
  return (
    <div className="bg-[#020617]/90" id='avis'>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Approuvé par les entreprises <span className="gradient-text">innovantes</span>
          </h2>
          <p className="text-gray-400">
            Ne vous fiez pas uniquement à notre parole. Voici ce que nos clients disent de Sassland.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#020617] border border-gray-800 rounded-xl p-6 card-shadow"
            >
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
