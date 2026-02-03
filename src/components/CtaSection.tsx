
import React from 'react';
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <div className="bg-[#020617]">
      <div className="section-container">
        <div className="bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Abstract glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600 opacity-10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prêt à transformer votre entreprise ?
              </h2>
              <p className="text-gray-300 mb-6 max-w-xl">
                Rejoignez des milliers d'entreprises qui ont choisi d'améliorer leurs opérations et leurs affaires avec DataPulse. Commencez votre essai gratuit aujourd'hui.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">
                  Commencer l'essai gratuit
                </Button>
                <Button variant="outline" className="bg-[#020617] border-emerald-600 text-white hover:bg-white hover:text-emerald-600 hover:border-emerald-600">
                  Planifier une démo
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/3">
              <img 
                src="public/img/entreprise.jpg"
                alt="Dashboard Preview"
                className="rounded-lg w-full card-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
