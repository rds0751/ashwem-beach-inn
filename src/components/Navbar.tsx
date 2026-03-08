import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-ocean/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/abilogo-Aq2GzWz1kZCqoKw9.avif" 
                alt="Ashwem Beach Inn" 
                className="h-12 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/retreats" className="text-ocean hover:text-sunset transition-colors font-semibold">Corporate Retreats</Link>
              <Link to="/rooms" className="text-ocean hover:text-sunset transition-colors font-semibold">Rooms</Link>
              <Link to="/experiences" className="text-ocean hover:text-sunset transition-colors font-semibold">Experiences</Link>
              <Link to="/gallery" className="text-ocean hover:text-sunset transition-colors font-semibold">Gallery</Link>
              <Link to="/pricing" className="text-ocean hover:text-sunset transition-colors font-semibold">Pricing</Link>
              <Link to="/book" className="bg-ocean text-white px-8 py-3 rounded-full font-bold hover:bg-ocean/90 hover:shadow-lg transition-all">
                Plan Your Offsite
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-ocean hover:text-sunset focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-ocean/5 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/retreats" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-ocean hover:text-sunset hover:bg-sand/20 transition-colors"
            >
              Corporate Retreats
            </Link>
            <Link 
              to="/rooms" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-ocean hover:text-sunset hover:bg-sand/20 transition-colors"
            >
              Rooms
            </Link>
            <Link 
              to="/experiences" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-ocean hover:text-sunset hover:bg-sand/20 transition-colors"
            >
              Experiences
            </Link>
            <Link 
              to="/gallery" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-ocean hover:text-sunset hover:bg-sand/20 transition-colors"
            >
              Gallery
            </Link>
            <Link 
              to="/pricing" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-ocean hover:text-sunset hover:bg-sand/20 transition-colors"
            >
              Pricing
            </Link>
            <Link 
              to="/book" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 mt-4 bg-ocean text-white text-center rounded-full font-bold hover:bg-ocean/90 transition-all"
            >
              Plan Your Offsite
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
