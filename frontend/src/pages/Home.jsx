import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getFeaturedPlaces } from '../services/api';
import PlaceCard from '../components/PlaceCard';

const BEACH_HERO =
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80';

export default function Home() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getFeaturedPlaces()
      .then((res) => setPlaces(res.data.data || []))
      .catch(() => setPlaces([]))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set('search', searchQuery);
    navigate(`/destinations?${params.toString()}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero - Full beach background */}
      <section className="relative min-h-[65vh] flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${BEACH_HERO}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/15 to-black/50" />
        <div className="relative w-full max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 drop-shadow-md">
            Explore the Essence of Andhra
          </h1>
          <p className="text-white/95 text-base md:text-lg lg:text-xl mb-6">
            Discover villages, temples, beaches & more across 26 districts
          </p>

          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex flex-col sm:flex-row gap-3 bg-white rounded-xl shadow-xl overflow-hidden p-2">
              <div className="relative flex-1">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search for villages, cities, hotels, temples..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 text-base text-slate-800 placeholder-slate-400 focus:outline-none"
                />
              </div>
              <button type="submit" className="btn-primary whitespace-nowrap">
                Search
              </button>
            </div>
          </form>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/destinations?sort=-visitCount"
              className="px-4 py-2.5 rounded-xl font-semibold text-base text-white bg-white/25 backdrop-blur-sm border border-white/40 hover:bg-white/35 transition"
            >
              Most Visited
            </Link>
            <Link
              to="/destinations?sort=-averageRating"
              className="px-4 py-2.5 rounded-xl font-semibold text-base text-white bg-white/25 backdrop-blur-sm border border-white/40 hover:bg-white/35 transition"
            >
              Top Rated
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="max-w-7xl mx-auto px-4 py-16 -mt-20 relative z-10">
        <div className="card p-8 mb-10">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-2">Featured Destinations</h2>
          <p className="text-slate-500 text-base">Handpicked places to start your journey</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="card h-72 animate-pulse" />
            ))}
          </div>
        ) : places.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {places.map((place) => (
              <PlaceCard key={place._id} place={place} />
            ))}
          </div>
        ) : (
          <div className="card p-12 text-center text-slate-500 text-base">
            No featured places yet. Add places from the admin panel.
          </div>
        )}

        <div className="text-center mt-10">
          <Link to="/destinations" className="btn-secondary">
            View all destinations →
          </Link>
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-2 text-center">Smart Travel Tools</h2>
        <p className="text-slate-500 text-base text-center mb-8">Plan your perfect trip</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '🗺️', title: 'Interactive Maps', desc: 'Get directions and discover nearby attractions within 20km.', to: '/destinations' },
            { icon: '📅', title: 'Itinerary Planner', desc: 'Generate day-wise travel plans based on your interests.', to: '/itinerary' },
            { icon: '⭐', title: 'Smart Recommendations', desc: 'Personalized suggestions by budget, season & interests.', to: '/recommendations' },
          ].map((item) => (
            <Link key={item.title} to={item.to} className="card p-8 text-center block hover:-translate-y-1 transition-transform">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg text-slate-900">{item.title}</h3>
              <p className="text-slate-500 text-base mt-1">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
