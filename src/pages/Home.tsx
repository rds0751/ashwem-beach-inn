import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Waves, 
  Users, 
  Coffee, 
  Palmtree, 
  ShieldCheck, 
  Wine, 
  Utensils, 
  Activity,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { BOOKING_URL, WHATSAPP_URL } from '../constants';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section - Caravela Inspired Depth */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ocean/80 via-ocean/40 to-transparent z-10" />
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          src="/rooms/our-spot-on-ashvem-beach.jpg"
          alt="Our Spot on Ashvem Beach"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-sunset/20 backdrop-blur-md border border-sunset/30 text-sunset font-bold text-sm tracking-widest uppercase">
              Private Beach Resort for Corporate Offsites
            </div>
            <h1 className="font-poppins font-extrabold text-5xl md:text-8xl mb-6 leading-[1.1]">
              Goa Corporate <span className="text-sunset">Retreats</span> Made Effortless
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-sand/90 font-medium leading-relaxed max-w-2xl">
              Work, strategize, and recharge with your team at North Goa's most peaceful beach sanctuary. Trusted by founders and tech teams worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link 
                to="/book"
                className="group bg-sunset text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-sunset/90 transition-all text-center flex items-center justify-center gap-2"
              >
                Check Availability <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/pricing" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all text-center">
                View Packages
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="bg-sand py-12 border-b border-ocean/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-ocean/60 font-semibold uppercase tracking-widest text-sm mb-10">
            Trusted by startups, founders and remote teams
          </p>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale"
          >
            {['TECHCORP', 'STARTUP.IO', 'AGENCYX', 'REMOTE.LY', 'WEB3LABS'].map((logo) => (
              <div key={logo} className="font-poppins font-bold text-2xl tracking-tighter">{logo}</div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section - Ashwem Beach Inn Amenities */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-ocean mb-8 leading-tight">
                Serene Boutique Stay & <span className="text-sunset underline decoration-sunset/30 underline-offset-8">Workation</span> Environment
              </h2>
              <p className="text-lg text-ocean/70 mb-10 leading-relaxed">
                Nestled in the heart of Ashvem village, our boutique resort offers a perfect blend of cozy rooms, swimming pool vibes, and dedicated work-friendly amenities. We make your team's stay truly relaxing and rejuvenating.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: <Waves className="text-sunset" />, text: 'Swimming Pool with Bar' },
                  { icon: <Utensils className="text-sunset" />, text: 'On-site Restaurant' },
                  { icon: <ShieldCheck className="text-sunset" />, text: 'Resident Services' },
                  { icon: <Activity className="text-sunset" />, text: 'Ayurvedic Treatments' },
                  { icon: <Palmtree className="text-sunset" />, text: 'Private Balconies' },
                  { icon: <ShieldCheck className="text-sunset" />, text: 'Ecological Initiatives' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-semibold text-ocean">
                    {item.icon}
                    {item.text}
                  </div>
                ))}
              </div>
              
              <Link to="/retreats" className="inline-flex items-center text-sunset font-bold text-lg hover:gap-3 transition-all">
                Explore Our Concepts & Ecological Initiatives <ArrowRight className="ml-2" />
              </Link>
            </motion.div>
            
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img 
                  src="/rooms/736139587.jpg" 
                  alt="Resort Pool" 
                  className="w-full h-[600px] object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-10 -left-10 bg-sunset p-8 rounded-[2rem] text-white shadow-xl hidden md:block max-w-[280px]">
                <p className="text-3xl font-bold mb-2">3500 INR</p>
                <p className="font-medium opacity-90">Starting rate per night for Standard Corporate Stays</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Caravela Inspired Experience Cards */}
      <section className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl text-ocean mb-4">Beyond the Meeting Room</h2>
            <p className="text-ocean/60 max-w-2xl mx-auto">Engage your team with unique experiences designed to foster creativity and bonding.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Cocktail Making Class', 
                desc: 'Shake, stir, and pour! Learn from our experts in a weekly class designed for team laughter.',
                img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800'
              },
              { 
                title: 'Yoga & Mindfulness', 
                desc: 'Start your strategy sessions with clarity. Private group yoga overlooking Mandrem fields.',
                img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800'
              },
              { 
                title: 'Beachside Networking', 
                desc: 'Sunset discussions and bonfire nights just steps away from the peaceful Ashvem waves.',
                img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=800'
              }
            ].map((exp, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-lg cursor-pointer"
              >
                <img src={exp.img} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={exp.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 p-8 text-white">
                  <h3 className="font-poppins font-bold text-2xl mb-3">{exp.title}</h3>
                  <p className="text-sand/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section - Caravela Inspired */}
      <section className="py-24 bg-ocean text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sunset/10 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
            <div>
              <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 text-white">Exclusive Retreat Offers</h2>
              <p className="text-xl text-sand/60">Unlock special benefits by booking direct for your corporate group.</p>
            </div>
            <Link to="/book" className="bg-sunset text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-sunset/90 transition-all shadow-xl">
              Enquire All Offers
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "Book Direct & Save 15%", 
                desc: "Get our best rate guarantee when you book directly through our website or corporate desk.",
                cta: "Enquire Now"
              },
              { 
                title: "Advanced Purchase", 
                desc: "Book your retreat 60 days in advance to unlock premium room upgrades and sunset networking sessions.",
                cta: "View Benefit"
              },
              { 
                title: "Workation Offer", 
                desc: "Extended team retreats (7+ days) include complimentary high-speed dedicated bandwidth and breakout catering.",
                cta: "Plan Long Stay"
              }
            ].map((offer, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all group"
              >
                <h3 className="font-poppins font-bold text-2xl mb-4 group-hover:text-sunset transition-colors">{offer.title}</h3>
                <p className="text-sand/70 mb-8 leading-relaxed">{offer.desc}</p>
                <Link to="/book" className="inline-flex items-center text-sunset font-bold gap-2 group-hover:gap-3 transition-all">
                  {offer.cta} <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Packages Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl text-left">
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-ocean mb-4">Corporate Packages</h2>
              <p className="text-lg text-ocean/60">Tailored solutions for high-growth startups and established remote teams.</p>
            </div>
            <Link to="/pricing" className="bg-ocean text-white px-8 py-4 rounded-full font-bold hover:bg-ocean/90 transition-all">
              See All Offers
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Standard Package',
                rate: '3500',
                details: ['Standard AC Room', 'Complimentary Breakfast', 'Hi-Speed WiFi', 'Meeting Room Access'],
                color: 'bg-sand/30'
              },
              {
                name: 'Deluxe Workation',
                rate: '5000',
                details: ['Deluxe Room with Balcony', 'All Meals Included', 'Private Work Area', '1 Ayurvedic Treatment'],
                color: 'bg-ocean text-white shadow-2xl',
                popular: true
              },
              {
                name: 'Premium Suite',
                rate: '6500',
                details: ['Suite with Pool View', 'Private Strategy Suite', 'Concierge Service', 'Eco-Gift Kit'],
                color: 'bg-sand/30'
              }
            ].map((pkg, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`p-10 rounded-[3rem] border border-ocean/5 relative flex flex-col ${pkg.color}`}
              >
                {pkg.popular && <div className="absolute top-8 right-8 bg-sunset text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Best Value</div>}
                <h3 className="font-poppins font-bold text-2xl mb-8">{pkg.name}</h3>
                <div className="mb-10">
                  <span className="text-5xl font-extrabold">{pkg.rate}</span>
                  <span className="opacity-60 ml-2">INR / night</span>
                </div>
                <ul className="space-y-5 mb-12 flex-grow">
                  {pkg.details.map((detail, j) => (
                    <li key={j} className="flex items-center gap-3 font-medium">
                      <CheckCircle2 className={`w-5 h-5 ${pkg.popular ? 'text-sunset' : 'text-sunset'}`} />
                      {detail}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/book" 
                  className={`block text-center py-4 rounded-2xl font-bold transition-all ${pkg.popular ? 'bg-sunset text-white' : 'bg-ocean text-white'}`}
                >
                  Book Direct & Save 15%
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-24 bg-sand px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-7xl mx-auto bg-ocean rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-sunset/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-sunset/20 blur-[100px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-poppins font-bold text-4xl md:text-6xl mb-8 leading-tight">
              Host Your Next Unforgettable Offsite
            </h2>
            <p className="text-xl text-sand/70 mb-12 leading-relaxed">
              Limited retreat slots available for the 2024-25 season. Book directly to guarantee our best corporate rates.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link 
                to="/book"
                className="bg-sunset text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl"
              >
                Enquire Now
              </Link>
              <a href={WHATSAPP_URL} className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                <Wine className="w-6 h-6" /> WhatsApp Group Booking
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
