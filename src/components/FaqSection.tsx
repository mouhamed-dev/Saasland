
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Comment fonctionne l'essai gratuit?",
    answer: "Notre essai gratuit vous donne accès à toutes les fonctionnalités de Sassland pour 14 jours. Aucun carte de crédit requis. A la fin de l'essai, vous pouvez choisir un plan qui vous convient ou annuler sans frais."
  },
  {
    question: "Puis-je modifier mon plan plus tard?",
    answer: "Oui, vous pouvez mettre à niveau, réduire ou changer votre plan à tout moment. Les modifications seront reflétées dans votre cycle de facturation suivant."
  },
  {
    question: "Y a-t-il un frais de configuration?",
    answer: "Non, il n'y a pas de frais de configuration pour aucun de nos plans. Vous payez uniquement le prix de la souscription annoncé."
  },
  {
    question: "Fournissez-vous des solutions d'entreprise personnalisées?",
    answer: "Oui, nous offrons des solutions d'entreprise personnalisées adaptées à vos besoins spécifiques. Contactez notre équipe de vente pour discuter de vos besoins et obtenir un devis personnalisé."
  },
  {
    question: "Quel type de support proposez-vous?",
    answer: "Nous offrons un support par email pour tous les plans. Notre plan Professional comprend un support par email prioritaire, tandis que les clients Enterprise bénéficient d'un support 24/7 et d'un gestionnaire de compte dédié."
  },
  {
    question: "Puis-je annuler ma souscription à tout moment?",
    answer: "Oui, vous pouvez annuler votre souscription à tout moment. Si vous annulez, vous aurez toujours accès à votre plan jusqu'à la fin de votre cycle de facturation actuel."
  }
];

const FaqSection = () => {
  return (
    <div className="bg-saas-black border-t border-gray-800" id='faq'>
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Questions <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-gray-400">
            Trouvez des réponses aux questions courantes sur Sassland. Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à contacter notre équipe de support.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-saas-darkGray rounded-xl p-6 md:p-8 border border-gray-800 card-shadow">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800 last:border-0">
                <AccordionTrigger className="text-left text-white hover:text-saas-orange py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
