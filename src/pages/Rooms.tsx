import { motion } from 'framer-motion';
import { Bed, Users, Layout, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';

const rooms = [
  {
    name: "Standard Room",
    price: "3500",
    description: "Nestled in nature with views of lush green fields. A boutique stay experience for solo travelers or pairs.",
    capacity: "Up to 2 individuals",
    features: ["Cozy Double Bed", "Private Washroom", "Hot Water Supply", "Air Conditioning", "Wi-Fi Access", "Complimentary Breakfast"],
    image: "/rooms/ashvem-beach-inn.jpg",
    icon: <Bed className="w-6 h-6" />
  },
  {
    name: "Deluxe Room",
    price: "5000",
    description: "Step onto your private balcony and enjoy the serenity of Ashvem. More space for comfort and productivity.",
    capacity: "Up to 2 guests",
    features: ["Attached Balcony", "Cozy Double Bed", "Private Washroom", "Heated Water", "Air Conditioning", "Complimentary Breakfast"],
    image: "/rooms/our-spot-on-ashvem-beach.jpg",
    icon: <Layout className="w-6 h-6" />
  },
  {
    name: "Premium Room",
    price: "5500",
    description: "Elevated boutique experience with a refreshing swimming pool view. Perfect for relaxing and recharging.",
    capacity: "Up to 2 guests",
    features: ["Swimming Pool View", "Refrigerator", "Balcony Access", "Private Bathrooms", "Air Conditioning", "Smart TV"],
    image: "/rooms/736415473.jpg",
    icon: <Waves className="w-6 h-6" />
  },
  {
    name: "Suite Room",
    price: "6000",
    description: "A serene haven for the body and soul. Our suites offer premium comfort for groups up to three.",
    capacity: "Up to 3 individuals",
    features: ["Suite Size", "Refrigerator", "Balcony Attached", "Private Washrooms", "Air Conditioning", "Wi-Fi Access"],
    image: "/rooms/724071774.jpg",
    icon: <Users className="w-6 h-6" />
  }
];

export default function Rooms() {
  return (
    <div className="pt-20 bg-white">
      {/* Hero */}
      <section className="bg-ocean text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-poppins font-bold text-5xl md:text-7xl mb-6"
          >
            Stay & <span className="text-sunset">Recharge</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto opacity-80"
          >
            Boutique rooms designed for deep work and deeper rest near Mandrem Beach.
          </motion.p>
        </div>
      </section>

      {/* Room Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          {rooms.map((room, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-sand/50 rounded-[4rem] group-hover:scale-105 transition-transform" />
                <img 
                  src={room.image} 
                  className="relative w-full h-[500px] object-cover rounded-[3.5rem] shadow-2xl" 
                  alt={room.name} 
                />
              </div>
              <div className="lg:w-1/2">
                <div className="flex items-center gap-4 text-sunset mb-4 font-bold tracking-widest uppercase text-sm">
                  {room.icon} {room.capacity}
                </div>
                <h2 className="font-poppins font-bold text-4xl text-ocean mb-6">{room.name}</h2>
                <p className="text-xl text-ocean/70 leading-relaxed mb-8">
                  {room.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {room.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-ocean/80 font-medium">
                      <div className="w-1.5 h-1.5 bg-sunset rounded-full" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-8 border-t border-ocean/5 pt-10">
                  <div>
                    <span className="text-4xl font-extrabold text-ocean">₹{room.price}</span>
                    <span className="text-ocean/50 ml-2">/ night</span>
                  </div>
                  <Link 
                    to="/book"
                    className="bg-ocean text-white px-10 py-4 rounded-full font-bold hover:bg-ocean/90 transition-all shadow-xl"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Special Offer CTA */}
      <section className="py-24 bg-sand/30">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="font-poppins font-bold text-4xl text-ocean mb-8">Book Direct & Save 15%</h2>
          <p className="text-xl text-ocean/60 mb-10 max-w-2xl mx-auto">
            Get our best rate guarantee and exclusive corporate benefits by booking through our official website.
          </p>
          <Link 
            to="/book"
            className="bg-sunset text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-2xl"
          >
            Book Direct Now
          </Link>
        </div>
      </section>
    </div>
  );
}
