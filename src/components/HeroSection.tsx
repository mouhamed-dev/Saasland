import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-saas-black to-[#1c160c] overflow-hidden min-h-[90vh] flex items-center" id='accueil'>
      {/* Orange glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-saas-orange opacity-10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-orange-700 opacity-15 rounded-full blur-[80px]"></div>
      <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-orange-400 opacity-10 rounded-full blur-[70px]"></div>
      
      <div className="section-container relative z-10 text-center">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Transformez votre entreprise avec notre <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Solution SaaS</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Optimisez vos opérations, améliorez la productivité et renforcez la satisfaction des clients avec notre plateforme SaaS de pointe. Expérience d'intégration fluide et support exceptionnel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-saas-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-saas-orange text-saas-orange hover:bg-saas-orange hover:text-white">
                Contacter le service commercial
              </Button>
            </div>
          </div>
          
          <div className="mt-24 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-saas-orange to-orange-700 blur-xl opacity-20 rounded-xl"></div>
              <div className="relative bg-saas-darkGray rounded-xl border border-saas-orange/20 p-2 card-shadow transform transition-all duration-500 hover:scale-[1.01] hover:shadow-orange-500/10 hover:shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&h=600&q=80"
                  alt="Dashboard Preview"
                  className="rounded-lg w-full"
                />
                <div className="absolute bottom-4 left-4 bg-saas-orange/80 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm font-medium">
                  Interface de tableau de bord moderne
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-saas-orange/20 rounded-full"></div>
      <div className="absolute top-20 right-10 w-10 h-10 border border-saas-orange/20 rounded-full"></div>
      <div className="absolute top-40 left-20 w-5 h-5 bg-saas-orange/20 rounded-full"></div>
    </div>
  );
};

export default HeroSection;
