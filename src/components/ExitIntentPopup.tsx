import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Send } from 'lucide-react';
import { BOOKING_URL } from '../constants';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ocean/80 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative max-w-2xl w-full bg-white rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-sand/50 text-ocean hover:bg-sand transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img
                  src="activity/act1.jpg"
                  alt="Special Offer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-10 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-sunset font-bold text-sm tracking-widest uppercase mb-4">
                  <Gift className="w-4 h-4" /> Wait! Before you go
                </div>
                <h2 className="font-poppins font-bold text-3xl text-ocean mb-4 leading-tight">
                  Get a Free Team Activity
                </h2>
                <p className="text-ocean/70 mb-8 leading-relaxed">
                  Book your corporate offsite this week and get a complimentary **Cocktail Making Class** or **Beach Yoga Session** for your entire team.
                </p>
                <div className="space-y-4">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsVisible(false)}
                    className="flex items-center justify-center gap-2 w-full bg-sunset text-white py-4 rounded-2xl font-bold text-lg hover:bg-sunset/90 transition-all shadow-lg"
                  >
                    Claim My Offer <Send className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="w-full text-ocean/40 text-sm font-medium hover:text-ocean/60 transition-colors"
                  >
                    No thanks, I'll pass on the free activity
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
