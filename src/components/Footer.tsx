import React, { useState } from 'react';
import { ChevronRight, MapPin } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://respizenmedical.com/fiori/subscribe_email.php', {
        email
      });

      if (response.data.status === 'success') {
        toast({
          title: "Inscription réussie !",
          description: "Merci de vous être inscrit à notre newsletter.",
          duration: 3000,
        });
        setEmail('');
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.",
        duration: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-[#471818] text-white py-8 lg:py-10 px-4 lg:px-16 text-[1rem] lg:text-[1.1rem] font-['WomanFontBold']">
      {/* Newsletter Section */}
      <div className="mb-7">
        <h3 className="text-[1.1rem] text-left lg:text-[1.25rem] font-['WomanFontBold'] mb-3.5">NEWSLETTER</h3>
        <p className="mb-5.5 text-left leading-relaxed">
          Inscrivez-vous pour recevoir par e-mail des mises à jour <br className="hidden lg:block" />
          sur les dernières collections, campagnes et vidéos de Fiori.
        </p>
        <br></br>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full sm:w-80 mr-0 sm:mr-3.5 px-3 py-3 bg-white/20 border border-red-500 rounded
                     text-white placeholder-white/70 outline-none backdrop-blur-sm
                     shadow-md transition-all duration-300
                     focus:border-[#ff5e5e] focus:shadow-[#ff5e5e]/50 focus:shadow-lg
                     font-['WomanFontBold']"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className="text-white text-[1.3rem] disabled:opacity-50 transition-opacity"
            disabled={isLoading}
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        </form>
      </div>

      <div className="text-left lg:text-right">
        <p className="flex items-start lg:items-center lg:justify-end my-2.5 font-['WomanFontBold'] gap-2">
          <MapPin className="mr-2 text-[#ff5e5e] w-6 h-6 lg:w-7 lg:h-7 mt-1 lg:mt-0" />
          <span className="flex-1 lg:flex-none">Lac 1 juste à côté de carré italien les berges du lac, Tunis, Tunisie</span>
        </p>
        <p className="flex items-start lg:items-center lg:justify-end my-2.5 font-['WomanFontBold'] gap-2">
          <MapPin className="mr-2 text-[#ff5e5e] w-6 h-6 lg:w-7 lg:h-7 mt-1 lg:mt-0" />
          <span className="flex-1 lg:flex-none">Tunisia mall en face Zara et Zayn</span>
        </p>
      </div>

      <div className="border-t border-white my-7"></div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
        <div className="text-[0.85rem] lg:text-[0.95rem] font-['WomanFontBold'] text-center lg:text-left">
          © 2024 FioriForYou - Tous droits réservés
        </div>
        <div className="space-x-6">
          <a href="#" className="text-white hover:text-[#ff5e5e] transition-colors text-[1.1rem] lg:text-[1.25rem]">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-white hover:text-[#ff5e5e] transition-colors text-[1.1rem] lg:text-[1.25rem]">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-white hover:text-[#ff5e5e] transition-colors text-[1.1rem] lg:text-[1.25rem]">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="#" className="text-white hover:text-[#ff5e5e] transition-colors text-[1.1rem] lg:text-[1.25rem]">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;