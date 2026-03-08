import { useState, useEffect } from 'react';

export default function Pricing() {
  const [teamSize, setTeamSize] = useState(10);
  const [days, setDays] = useState(3);
  const [packageType, setPackageType] = useState('team'); // startup, team, leadership
  const [estimate, setEstimate] = useState(0);

  useEffect(() => {
    const rates: Record<string, number> = {
      startup: 3500,
      team: 5500,
      leadership: 7500,
    };
    setEstimate(teamSize * days * rates[packageType]);
  }, [teamSize, days, packageType]);

  return (
    <div className="flex flex-col pt-20">
      <section className="bg-sand py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-poppins font-bold text-5xl text-ocean mb-6 leading-tight">Corporate Retreat Pricing</h1>
            <p className="text-xl text-ocean/60 max-w-2xl mx-auto">Clear, transparent, and all-inclusive packages designed for corporate teams.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { name: 'Startup Offsite', rate: '₹3,500', per: 'per person/night', items: ['Standard Rooms', 'Strategy Room', 'High-Speed WiFi', 'Breakfast Included'] },
              { name: 'Team Retreat', rate: '₹5,500', per: 'per person/night', items: ['Premium Rooms', 'Large Meeting Hall', 'All Meals Included', '1 Team Building Activity'] },
              { name: 'Leadership Retreat', rate: '₹7,500', per: 'per person/night', items: ['Luxury Suites', 'Private Strategy Suite', 'Curated Private Dining', 'Dedicated Concierge'] },
            ].map((pkg, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-ocean/5 flex flex-col">
                <h3 className="font-poppins font-bold text-2xl text-ocean mb-6">{pkg.name}</h3>
                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-ocean">{pkg.rate}</span>
                  <span className="text-ocean/60 ml-2 text-sm">{pkg.per}</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.items.map((item, j) => (
                    <li key={j} className="text-ocean/70 flex items-center">
                      <span className="w-1.5 h-1.5 bg-sunset rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-ocean rounded-[3rem] p-12 md:p-20 text-white shadow-2xl">
            <h2 className="font-poppins font-bold text-4xl mb-12 text-center">Corporate Retreat Calculator</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
              <div>
                <label className="block text-sand/60 text-sm font-bold uppercase tracking-widest mb-4">Team Size</label>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full accent-sunset"
                />
                <div className="text-right font-bold mt-2 text-2xl">{teamSize} people</div>
              </div>
              <div>
                <label className="block text-sand/60 text-sm font-bold uppercase tracking-widest mb-4">Days</label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={days}
                  onChange={(e) => setDays(parseInt(e.target.value))}
                  className="w-full accent-sunset"
                />
                <div className="text-right font-bold mt-2 text-2xl">{days} days</div>
              </div>
              <div>
                <label className="block text-sand/60 text-sm font-bold uppercase tracking-widest mb-4">Package Type</label>
                <select
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-sunset transition-all appearance-none text-xl font-bold"
                >
                  <option value="startup">Startup Offsite</option>
                  <option value="team">Team Retreat</option>
                  <option value="leadership">Leadership Retreat</option>
                </select>
              </div>
            </div>

            <div className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <p className="text-sand/60 font-bold uppercase tracking-widest mb-2">Estimated Retreat Cost</p>
                <p className="text-6xl md:text-7xl font-poppins font-extrabold text-sunset">₹{estimate.toLocaleString()}</p>
                <p className="text-sand/40 mt-2">*Final quote depends on specific dates and customization.</p>
              </div>
              <button className="bg-sunset text-white px-10 py-5 rounded-full font-bold text-xl hover:scale-105 transition-all shadow-xl">
                Get Final Quote →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
