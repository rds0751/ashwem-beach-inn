import { Link } from 'react-router-dom';

export default function Navbar() {
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
        </div>
      </div>
    </nav>
  );
}
