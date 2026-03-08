export default function Retreats() {
  return (
    <div className="flex flex-col pt-20">
      <section className="bg-ocean text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-poppins font-bold text-5xl mb-6">Convincing Your HR for a Goa Offsite</h1>
          <p className="text-xl text-sand/70 max-w-3xl mx-auto">
            We provide the infrastructure, the atmosphere, and the logistics to turn a team trip into a high-impact growth experience.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl text-ocean mb-12 text-center">Types of Events Supported</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              'Company Offsites', 'Team Building Retreats', 'Workshops',
              'Strategy Meetings', 'Hackathons', 'Founders Meetups'
            ].map((event, i) => (
              <div key={i} className="p-6 bg-sand rounded-2xl text-ocean font-bold text-lg text-center border border-ocean/5">
                {event}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl text-ocean mb-12 text-center">Team Size Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { size: 'Small Teams', range: '5–10 members', desc: 'Intimate setting for core teams and startups.' },
              { size: 'Medium Teams', range: '10–25 members', desc: 'Perfect for department-wide strategy and bonding.' },
              { size: 'Large Groups', range: '25–50 members', desc: 'Full resort buyout for total privacy and focus.' },
            ].map((opt, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-ocean/5">
                <h3 className="font-poppins font-bold text-xl text-sunset mb-2">{opt.size}</h3>
                <p className="text-2xl font-bold text-ocean mb-4">{opt.range}</p>
                <p className="text-ocean/70">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl text-ocean mb-12 text-center">Example Retreat Schedule</h2>
          <div className="space-y-12">
            {[
              { day: 'Day 1', title: 'Arrival & Connection', items: ['Welcome drinks & check-in', 'Evening beach bonfire', 'Team welcome dinner'] },
              { day: 'Day 2', title: 'Strategy & Focus', items: ['Morning yoga/meditation', 'Strategy sessions in conference hall', 'Afternoon beach walk & breakout sessions'] },
              { day: 'Day 3', title: 'Workshops & Growth', items: ['Interactive workshops', 'Team building activity (Surfing/Kayaking)', 'Farewell gala dinner'] },
              { day: 'Day 4', title: 'Reflection & Departure', items: ['Morning reflection session', 'Brunch and group photos', 'Airport transfers'] },
            ].map((d, i) => (
              <div key={i} className="flex gap-8 border-l-4 border-sunset pl-8 relative">
                <div className="absolute -left-3 top-0 w-5 h-5 bg-sunset rounded-full" />
                <div>
                  <h3 className="font-poppins font-bold text-2xl text-ocean mb-4">{d.day}: {d.title}</h3>
                  <ul className="space-y-2">
                    {d.items.map((item, j) => (
                      <li key={j} className="text-ocean/70 flex items-center">
                        <span className="w-1.5 h-1.5 bg-ocean/20 rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
