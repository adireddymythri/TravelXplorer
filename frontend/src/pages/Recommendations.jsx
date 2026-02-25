import { useState, useEffect } from 'react';
import { getRecommendations, getDistricts } from '../services/api';
import PlaceCard from '../components/PlaceCard';
import { CATEGORIES, SEASONS } from '../utils/constants';

export default function Recommendations() {
  const [form, setForm] = useState({
    interests: [],
    budget: '',
    duration: '',
    season: '',
    currentDistrict: '',
  });
  const [districts, setDistricts] = useState([]);
  const [places, setPlaces] = useState([]);
  const [budgetWidened, setBudgetWidened] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const res = await getDistricts();
        setDistricts(res.data.data || []);
      } catch (err) {
        console.error('Error fetching districts:', err);
      }
    };
    fetchDistricts();
  }, []);

  const toggleInterest = (c) => {
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(c) ? f.interests.filter((i) => i !== c) : [...f.interests, c],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setBudgetWidened(false);
    try {
      const res = await getRecommendations(form);
      setPlaces(res.data.places || []);
      setBudgetWidened(res.data.budgetWidened || false);
    } catch (err) {
      setPlaces([]);
    } finally {
      setLoading(false);
    }
  };

  const chipActive = 'px-3 py-2 rounded-xl text-base font-medium bg-primary-600 text-white shadow-lg shadow-primary-200';
  const chipInactive = 'px-3 py-2 rounded-xl text-base font-medium glass hover:bg-white/80 transition-all border border-transparent hover:border-primary-200';

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="glass-card p-8 mb-10 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-400/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Travel Planner</h1>
        <p className="text-gray-600 mt-2 text-lg max-w-2xl mx-auto">Get personalized suggestions based on your interests, budget, and current location.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 mb-12">
        {/* Current Location & Duration logic explanation */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-6 border-l-4 border-primary-500">
            <label className="block font-bold text-gray-800 mb-2 flex items-center gap-2">
              Your Current Location
            </label>
            <select
              value={form.currentDistrict}
              onChange={(e) => setForm((f) => ({ ...f, currentDistrict: e.target.value }))}
              className="input-glass bg-white/50"
            >
              <option value="">Select District (to find local spots)</option>
              {districts.map((d) => (
                <option key={d._id} value={d._id}>{d.name}</option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-2 italic">
              * Used to recommend places within driving distance for 1-2 day trips.
            </p>
          </div>

          <div className="glass-card p-6">
            <label className="block font-bold text-gray-800 mb-2 flex items-center gap-2">
              Trip Duration
            </label>
            <select
              value={form.duration}
              onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))}
              className="input-glass bg-white/50"
            >
              <option value="">Any Duration</option>
              <option value="short">Short (1-2 days) - Local Focus</option>
              <option value="medium">Medium (3-5 days)</option>
              <option value="long">Long (1+ week)</option>
            </select>
          </div>
        </div>

        <div className="glass-card p-8">
          <label className="block font-bold text-gray-800 mb-4 flex items-center gap-2">
            What are you interested in?
          </label>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => toggleInterest(c)}
                className={form.interests.includes(c) ? chipActive : chipInactive}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <label className="block font-bold text-gray-800 mb-2 flex items-center gap-2">
              Planned Budget
            </label>
            <select
              value={form.budget}
              onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
              className="input-glass bg-white/50"
            >
              <option value="">Any Budget</option>
              <option value="free">Free / Economy</option>
              <option value="medium">Mid-Range</option>
              <option value="high">Premium / Luxury</option>
            </select>
          </div>

          <div className="glass-card p-6">
            <label className="block font-bold text-gray-800 mb-2 flex items-center gap-2">
              Preferred Season
            </label>
            <select
              value={form.season}
              onChange={(e) => setForm((f) => ({ ...f, season: e.target.value }))}
              className="input-glass bg-white/50"
            >
              <option value="">Any Season</option>
              {SEASONS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 text-lg font-bold text-white bg-gradient-to-r from-primary-600 to-indigo-600 rounded-2xl shadow-xl hover:shadow-primary-300 transform active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
              Magic is happening...
            </>
          ) : (
            <>Find My Perfect Trip</>
          )}
        </button>
      </form>

      {places.length > 0 && (
        <div className="animate-slide-up bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/60">
          <h2 className="text-2xl md:text-3xl font-black mb-8 text-gray-800 flex items-center gap-3">
            Top Recommendations
          </h2>

          {budgetWidened && (
            <div className="mb-6 p-4 bg-amber-50 border border-amber-100 rounded-2xl flex items-center gap-3 text-amber-800 text-sm animate-pulse">
              <span>⚠️</span>
              <p>No exact matches for your budget limit was found, but we've found these great alternatives for you!</p>
            </div>
          )}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {places.map((p) => (
              <div key={p._id} className="relative group">
                {p.isLocal && (
                  <div className="absolute -top-3 left-4 z-20 bg-green-500 text-white text-[10px] uppercase font-black px-3 py-1 rounded-full shadow-lg border-2 border-white">
                    Quick Choice • Local
                  </div>
                )}
                {!p.isLocal && form.currentDistrict && (
                  <div className="absolute -top-3 left-4 z-20 bg-primary-500 text-white text-[10px] uppercase font-black px-3 py-1 rounded-full shadow-lg border-2 border-white">
                    Full Trip • Travel
                  </div>
                )}
                <PlaceCard place={p} />
              </div>
            ))}
          </div>

          {form.currentDistrict && (
            <div className="mt-8 p-5 bg-gradient-to-br from-primary-50 to-indigo-50 rounded-3xl text-sm text-primary-900 border border-primary-100 flex gap-4 items-center shadow-sm">
              <div>
                <p className="font-bold text-lg mb-1 text-primary-800">Travel Tip for You</p>
                <p className="text-gray-700 leading-relaxed">
                  We've analyzed your current location. <strong>"Quick Choice"</strong> spots are right in your district, perfect for spontaneous visits. <strong>"Full Trip"</strong> locations are gems in neighboring districts that are worth the travel time.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
