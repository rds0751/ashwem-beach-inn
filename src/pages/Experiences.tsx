import { motion } from 'framer-motion';
import { Wine, Activity, Waves, Palmtree, Utensils, Music } from 'lucide-react';

const experiences = [
  {
    title: "Team Strategy Sessions",
    description: "Ideal venue for corporate strategy and brainstorming. Our facilities provide the perfect balance of focus and inspiration.",
    image: "/events/ideal-venue-for-corporate-events-in-goa.jpg",
    icon: <Wine className="w-8 h-8" />
  },
  {
    title: "Corporate Success Parties",
    description: "Celebrate your team's milestones with a dedicated success party. From catering to music, we handle all the details.",
    image: "/events/sucess-party.jpg",
    icon: <Activity className="w-8 h-8" />
  },
  {
    title: "Conference & Workshops",
    description: "Elevate your corporate events with our modern conference setup. Equipped with high-speed WiFi and presentation tools.",
    image: "/events/conf-10.webp",
    icon: <Waves className="w-8 h-8" />
  },
  {
    title: "Team Building Fun",
    description: "Engage in collaborative activities designed to strengthen team bonds and create lasting memories in Goa.",
    image: "/activity/act1.jpg",
    icon: <Palmtree className="w-8 h-8" />
  },
  {
    title: "Leadership Retreats",
    description: "A private sanctuary for executives to strategize and recharge. Private dining and premium stay options included.",
    image: "/events/main.webp",
    icon: <Utensils className="w-8 h-8" />
  },
  {
    title: "Beachside Networking",
    description: "Networking events made effortless. Connect with your team near the peaceful sands of Ashvem.",
    image: "/rooms/our-spot-on-ashvem-beach.jpg",
    icon: <Music className="w-8 h-8" />
  }
];

export default function Experiences() {
  return (
    <div className="pt-20 bg-sand/30">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-ocean/60 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover"
          alt="Experiences"
        />
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-poppins font-bold text-5xl md:text-7xl mb-6"
          >
            Resort Experiences
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto font-medium text-sand/90"
          >
            Beyond the boardroom: curated activities to bond, learn, and recharge.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all group"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={exp.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={exp.title} />
                <div className="absolute top-6 right-6 bg-white/90 p-3 rounded-2xl text-sunset shadow-lg">
                  {exp.icon}
                </div>
              </div>
              <div className="p-10">
                <h3 className="font-poppins font-bold text-2xl text-ocean mb-4">{exp.title}</h3>
                <p className="text-ocean/70 leading-relaxed mb-8">
                  {exp.description}
                </p>
                <button className="text-sunset font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Enquire Now <span className="text-xl">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Special Offer CTA */}
      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto bg-sunset rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <h2 className="font-poppins font-bold text-4xl mb-6">Planning a Team Activity?</h2>
          <p className="text-xl mb-10 opacity-90">Book direct and get a complimentary cocktail making class for your group.</p>
          <button className="bg-ocean text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-ocean/90 transition-all">
            Plan Your Experience
          </button>
        </div>
      </section>
    </div>
  );
}
