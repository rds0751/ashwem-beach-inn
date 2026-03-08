import { motion } from 'framer-motion';

const images = [
  { url: "/rooms/hotel-view-and-swimming.jpg", category: "Resort View" },
  { url: "/rooms/736139587.jpg", category: "Pool & Stay" },
  { url: "/rooms/ashvem-beach-inn.jpg", category: "Boutique Rooms" },
  { url: "/rooms/our-spot-on-ashvem-beach.jpg", category: "Beachfront" },
  { url: "/events/main.webp", category: "Corporate Events" },
  { url: "/events/sucess-party.jpg", category: "Celebrations" },
  { url: "/events/conf-10.webp", category: "Conferences" },
  { url: "/activity/act1.jpg", category: "Team Building" },
  { url: "/events/ideal-venue-for-corporate-events-in-goa.jpg", category: "Strategy Sessions" },
  { url: "/rooms/736415473.jpg", category: "Premium Stay" },
  { url: "/rooms/724071774.jpg", category: "Executive Suites" },
  { url: "/events/Elevate-Your-Corporate-Event.jpeg", category: "Workshops" }
];

export default function Gallery() {
  return (
    <div className="pt-20 min-h-screen bg-sand/20">
      {/* Header */}
      <section className="py-24 px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-poppins font-bold text-5xl md:text-7xl mb-6 text-ocean"
        >
          Visual <span className="text-sunset">Serenity</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl max-w-2xl mx-auto text-ocean/60 font-medium"
        >
          A glimpse into your next corporate offsite at Ashwem Beach Inn.
        </motion.p>
      </section>

      {/* Masonry-style Grid */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="relative group rounded-[2rem] overflow-hidden shadow-xl cursor-pointer"
            >
              <img src={img.url} className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" alt={img.category} />
              <div className="absolute inset-0 bg-ocean/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-white text-center p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-poppins font-bold text-2xl uppercase tracking-widest">{img.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-5xl mx-auto bg-ocean rounded-[3.5rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-8 leading-tight">Ready to See it in Person?</h2>
          <p className="text-xl text-sand/70 mb-12 max-w-2xl mx-auto">
            Book your site visit or virtual tour with our retreat planner today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-sunset text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl">
              Plan Site Visit
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all">
              Virtual Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
