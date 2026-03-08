import { Link } from 'react-router-dom';
import { WHATSAPP_URL } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-white text-ocean py-20 border-t border-ocean/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <img 
            src="/abilogo-Aq2GzWz1kZCqoKw9.avif" 
            alt="Ashwem Beach Inn" 
            className="h-16 w-auto mb-8"
          />
          <p className="text-ocean/70 max-w-md leading-relaxed text-lg">
            Goa's premier private beach resort dedicated to corporate offsites, leadership retreats, and startup meetups. Work, strategize, and recharge at Mandrem Beach.
          </p>
        </div>
        <div>
          <h3 className="font-poppins font-bold text-lg mb-8 uppercase tracking-widest text-sunset">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link to="/retreats" className="text-ocean/80 hover:text-sunset transition-colors font-medium">Corporate Retreats</Link></li>
            <li><Link to="/pricing" className="text-ocean/80 hover:text-sunset transition-colors font-medium">Pricing Packages</Link></li>
            <li><Link to="/book" className="text-ocean/80 hover:text-sunset transition-colors font-medium">Plan Your Retreat</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-poppins font-bold text-lg mb-8 uppercase tracking-widest text-sunset">Contact Us</h3>
          <div className="space-y-4 text-ocean/80 font-medium">
            <p className="flex items-center gap-2">Mandrem Beach Road, North Goa</p>
            <a href={WHATSAPP_URL} className="flex items-center gap-2 hover:text-sunset transition-colors">+91 9075006116</a>
            <p className="flex items-center gap-2">hello@ashwembeachinn.com</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-ocean/5 text-center text-ocean/40 text-sm font-medium">
        © {new Date().getFullYear()} Ashwem Beach Inn. All rights reserved.
      </div>
    </footer>
  );
}
