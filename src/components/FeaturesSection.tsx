
import React from 'react';
import { Check, Search, Settings, User, Home, Calendar } from 'lucide-react';

const features = [
  {
    icon: <Search className="h-6 w-6 text-emerald-500" />,
    title: 'Analyse intelligente',
    description: 'Obtenez des insights valables avec notre analyse avancée, vous aidera à prendre des décisions basées sur les données.'
  },
  {
    icon: <Settings className="h-6 w-6 text-emerald-500" />,
    title: 'Intégration facile',
    description: 'Intégrez sans interruption avec vos outils et workflows existants. Aucun impact sur votre entreprise.'
  },
  {
    icon: <User className="h-6 w-6 text-emerald-500" />,
    title: 'Gestion des utilisateurs',
    description: 'Gestion des utilisateurs et contrôles de permissions pour sécuriser et rendre vos données accessibles.'
  },
  {
    icon: <Home className="h-6 w-6 text-emerald-500" />,
    title: 'Tableau de bord personnalisable',
    description: 'Créez des tableaux de bord personnalisés adaptés à vos besoins et objectifs commerciaux.'
  },
  {
    icon: <Calendar className="h-6 w-6 text-emerald-500" />,
    title: 'Planificateur de tâches',
    description: 'Automate vos workflows avec notre système de planification de tâches puissant.'
  },
  {
    icon: <Check className="h-6 w-6 text-emerald-500" />,
    title: 'Suivi de progression',
    description: 'Suivez le progrès de votre équipe et vos réalisations avec des rapports en temps réel.'
  }
];

const FeaturesSection = () => {
  return (
    <div className="bg-[#020617]/90" id='roadmap'>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Des <span className="gradient-text">fonctionnalités</span> puissantes pour booster votre entreprise
          </h2>
          <p className="text-gray-400">
            Notre suite complète d'outils vous aidera à optimiser vos opérations 
            et à atteindre vos objectifs commerciaux de manière plus efficace.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-[#020617] p-6 rounded-xl border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 card-shadow"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-emerald-500/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
