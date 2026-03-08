import { useState } from 'react';
import { motion } from 'framer-motion';
import { BOOKING_URL } from '../constants';
import { Calendar, Users, ShieldCheck, CreditCard } from 'lucide-react';

export default function Book() {
  const [activeTab, setActiveTab] = useState<'individual' | 'corporate'>('individual');

  return (
    <div className="min-h-screen bg-sand/30 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-poppins font-bold text-5xl md:text-7xl text-ocean mb-6"
          >
            Reserve Your <span className="text-sunset">Sanctuary</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-ocean/60 max-w-2xl mx-auto"
          >
            Experience seamless booking with our integrated eZee Technosys portal. No redirects, just pure Goan hospitality.
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-3xl shadow-lg border border-ocean/5 flex gap-2">
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-8 py-3 rounded-2xl font-bold transition-all ${activeTab === 'individual' ? 'bg-ocean text-white shadow-md' : 'text-ocean/60 hover:text-ocean'}`}
            >
              Direct Booking
            </button>
            <button
              onClick={() => setActiveTab('corporate')}
              className={`px-8 py-3 rounded-2xl font-bold transition-all ${activeTab === 'corporate' ? 'bg-ocean text-white shadow-md' : 'text-ocean/60 hover:text-ocean'}`}
            >
              Corporate Inquiry
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Booking Area */}
          <div className="lg:col-span-8">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-ocean/5 h-[800px]"
            >
              {activeTab === 'individual' ? (
                <div className="w-full h-full relative group">
                  <div className="absolute inset-0 bg-ocean/5 animate-pulse group-hover:hidden flex items-center justify-center pointer-events-none">
                    <p className="font-bold text-ocean/20 uppercase tracking-widest">Loading Secure Booking Engine...</p>
                  </div>
                  <iframe 
                    src={BOOKING_URL} 
                    className="w-full h-full border-none relative z-10"
                    title="eZee Booking Engine"
                  />
                </div>
              ) : (
                <div className="p-10 md:p-16 overflow-y-auto h-full">
                  <h2 className="font-poppins font-bold text-3xl text-ocean mb-8">Corporate Retreat Planner</h2>
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-ocean/60 text-sm font-bold uppercase tracking-widest mb-3">Company Name</label>
                        <input type="text" required className="w-full bg-sand/50 border border-ocean/10 rounded-2xl px-6 py-4 text-ocean focus:outline-none focus:ring-2 focus:ring-sunset transition-all" placeholder="Acme Inc." />
                      </div>
                      <div>
                        <label className="block text-ocean/60 text-sm font-bold uppercase tracking-widest mb-3">Team Size</label>
                        <select className="w-full bg-sand/50 border border-ocean/10 rounded-2xl px-6 py-4 text-ocean focus:outline-none focus:ring-2 focus:ring-sunset transition-all">
                          <option>5–15 people</option>
                          <option>15–30 people</option>
                          <option>30–50 people</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-ocean/60 text-sm font-bold uppercase tracking-widest mb-3">Message / Requirements</label>
                      <textarea className="w-full bg-sand/50 border border-ocean/10 rounded-2xl px-6 py-4 text-ocean focus:outline-none focus:ring-2 focus:ring-sunset transition-all h-40" placeholder="Tell us about your retreat goals..."></textarea>
                    </div>
                    <button type="submit" className="w-full bg-sunset text-white py-6 rounded-2xl font-poppins font-bold text-2xl hover:scale-[1.02] transition-all shadow-xl">
                      Submit Corporate Request
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-ocean text-white p-10 rounded-[3rem] shadow-xl">
              <h3 className="font-poppins font-bold text-2xl mb-8">Why Book Direct?</h3>
              <ul className="space-y-6">
                {[
                  { icon: <ShieldCheck className="w-6 h-6 text-sunset" />, title: "Best Rate Guarantee", desc: "Always find the lowest price on our official portal." },
                  { icon: <CreditCard className="w-6 h-6 text-sunset" />, title: "Secure Payment", desc: "Industry-standard encryption for your peace of mind." },
                  { icon: <Calendar className="w-6 h-6 text-sunset" />, title: "Instant Confirmation", desc: "Real-time availability and immediate voucher generation." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold mb-1">{item.title}</h4>
                      <p className="text-sand/60 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-ocean/5">
              <h3 className="font-poppins font-bold text-2xl text-ocean mb-6">Need Help?</h3>
              <p className="text-ocean/70 mb-8 leading-relaxed">
                Our reservation desk is available 24/7 to assist with group bookings and custom requirements.
              </p>
              <a 
                href="https://wa.me/919075006116"
                className="flex items-center justify-center gap-3 w-full bg-green-500 text-white py-4 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
