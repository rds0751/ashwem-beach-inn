import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Send, Users, Calendar, ArrowRight } from 'lucide-react';
import { BOOKING_URL } from '../constants';

export default function StickyBookingBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      {/* Progress Bar */}
      <motion.div
        className="h-1 bg-sunset origin-left w-full mb-4"
        style={{ scaleX }}
      />
      
      {/* The Sticky Bar */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 1 }}
        className="bg-white/95 backdrop-blur-md border-t border-ocean/5 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] p-4 md:p-6 pointer-events-auto"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-ocean font-bold">
            <div className="hidden lg:flex items-center gap-2">
              <Users className="text-sunset w-5 h-5" /> 
              <span>Teams of 5–50</span>
            </div>
            <div className="hidden lg:flex items-center gap-2">
              <Calendar className="text-sunset w-5 h-5" /> 
              <span>Book Oct–May</span>
            </div>
            <div className="text-lg md:text-xl">
              Plan your <span className="text-sunset underline underline-offset-4 decoration-sunset/30">Goa Offsite</span> today
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="hidden sm:flex flex-col text-right">
              <span className="text-sunset font-bold text-sm tracking-widest uppercase">Limited Availability</span>
              <span className="text-ocean/60 text-xs font-bold uppercase tracking-widest leading-none">Only 2 retreat slots left for April</span>
            </div>
            <Link
              to="/book"
              className="flex-grow md:flex-grow-0 group flex items-center justify-center gap-3 bg-ocean text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-ocean/90 transition-all shadow-xl hover:shadow-2xl active:scale-[0.98]"
            >
              Check Availability <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
