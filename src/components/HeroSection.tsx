import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-[#020617] overflow-hidden min-h-[90vh] flex items-center" id='accueil'>
      {/* Orange glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500 opacity-10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-emerald-700 opacity-15 rounded-full blur-[80px]"></div>
      <div className="absolute top-20 right-1/4 w-[250px] h-[250px] bg-emerald-400 opacity-10 rounded-full blur-[70px]"></div>
      
      <div className="section-container relative z-10 text-center">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Donnez vie à vos données. Décidez avec <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">DataPulse</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Transformez vos informations en décisions claires grâce à des tableaux de bord intelligents et une intégration fluide. Expérience d'intégration fluide et support exceptionnel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                Commencer gratuitement
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="bg-[#020617] border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                Contacter le service commercial
              </Button>
            </div>
          </div>
          
          <div className="mt-24 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-700 blur-xl opacity-20 rounded-xl"></div>
              <div className="relative bg-emerald-600 rounded-xl border border-emerald-700/20 p-2 card-shadow transform transition-all duration-500 hover:scale-[1.01] hover:shadow-emerald-500/10 hover:shadow-lg">
                <img 
                  src="public/img/DataPulse.png"
                  alt="Dashboard Preview"
                  className="rounded-lg w-full"
                />
                <div className="absolute bottom-4 left-4 bg-emerald-700/80 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm font-medium">
                  Interface de tableau de bord moderne
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute bottom-10 left-10 w-20 h-20 border border-emerald-500/20 rounded-full"></div>
      <div className="absolute top-20 right-10 w-10 h-10 border border-emerald-500/20 rounded-full"></div>
      <div className="absolute top-40 left-20 w-5 h-5 bg-emerald-500/20 rounded-full"></div>
    </div>
  );
};

export default HeroSection;
