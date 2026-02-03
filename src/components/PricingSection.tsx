
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: 'Pulse Basic',
      monthlyPrice: 19,
      annualPrice: 15,
      description: 'Parfait pour les petites entreprises et les freelances',
      features: [
        '2 membres de l\'équipe',
        '20GB stockage cloud',
        'Analyse de base',
        'Assistance par e-mail',
        '1 projet'
      ],
      isPopular: false,
      ctaText: 'Commencer avec le Pulse Basic'
    },
    {
      name: 'Pulse Advanced',
      monthlyPrice: 49,
      annualPrice: 39,
      description: 'Parfait pour les entreprises en croissance et les équipes',
      features: [
        '10 membres de l\'équipe',
        '100GB stockage cloud',
        'Analyse avancée',
        'Assistance par e-mail prioritaire',
        'Projets illimités',
        'Accès API',
        'Intégration personnalisée'
      ],
      isPopular: true,
      ctaText: 'Commencer avec le Pulse Advanced'
    },
    {
      name: 'Pulse Enterprise',
      monthlyPrice: 99,
      annualPrice: 79,
      description: 'Pour les grandes organisations avec des besoins complexes',
      features: [
        'Unlimited membres de l\'équipe',
        '500GB stockage cloud',
        'Analyse avancée & reporting',
        'Assistance 24/7',
        'Projets illimités',
        'Full API access',
        'Intégration personnalisée',
        'SSO Authentication',
        'Gestionnaire de compte dédié'
      ],
      isPopular: false,
      ctaText: 'Contacter le service commercial'
    }
  ];

  return (
    <div className="bg-[#020617]/90" id='tarifs'>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tarification simple et <span className="gradient-text">transparent</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Choisissez l'offre adaptée à vos besoins professionnels. Sans frais cachés, sans surprises.
          </p>
          
          {/* Pricing toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-sm font-medium ${isAnnual ? 'text-emerald-500' : 'text-gray-400'}`}>
              Annuel <span className="text-xs text-emerald-500">(économisez 20 %)</span>
            </span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${isAnnual ? 'bg-emerald-500' : 'bg-gray-600'}`}
            >
              <span 
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-7' : 'translate-x-1'}`}
              />
            </button>
            <span className={`text-sm font-medium ${!isAnnual ? 'text-emerald-500' : 'text-gray-400'}`}>
              Mensuel
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 transition-all duration-300 ${
                plan.isPopular 
                  ? 'bg-[#020617]/90 border border-emerald-500/30 transform hover:-translate-y-2' 
                  : 'bg-[#020617]/90 border border-gray-800 transform hover:-translate-y-1'
              }`}
            >
              {plan.isPopular && (
                <span className="bg-emerald-500 text-saas-black text-xs font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">
                  Le plus populaire
                </span>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-gray-400"> /mois</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.isPopular 
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
                    : 'bg-[#020617]/90 border border-emerald-500/30 hover:border-emerald-500 text-white'
                }`}
              >
                {plan.ctaText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
