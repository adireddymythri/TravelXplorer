import { useState } from 'react';
import { getRecommendations } from '../services/api';
import PlaceCard from '../components/PlaceCard';
import { CATEGORIES, SEASONS } from '../utils/constants';

export default function Recommendations() {
  const [form, setForm] = useState({
    interests: [],
    budget: '',
    duration: '',
    season: '',
  });
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleInterest = (c) => {
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(c) ? f.interests.filter((i) => i !== c) : [...f.interests, c],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await getRecommendations(form);
      setPlaces(res.data.data || []);
    } catch (err) {
      setPlaces([]);
    } finally {
      setLoading(false);
    }
  };

  const chipActive = 'px-3 py-2 rounded-xl text-base font-medium bg-primary-600 text-white';
  const chipInactive = 'px-3 py-2 rounded-xl text-base font-medium glass hover:bg-white/80 transition-all';

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="glass-card p-6 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Get Recommendations</h1>
        <p className="text-gray-500 mt-1 text-base">Personalized suggestions based on your preferences</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 mb-8">
        <div className="glass-card p-6">
          <label className="block font-medium text-base text-gray-700 mb-3">Interests</label>
          <div className="flex flex-wrap gap-2">
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
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="glass-card p-6">
            <label className="block font-medium text-base text-gray-700 mb-2">Budget</label>
            <select
              value={form.budget}
              onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
              className="input-glass"
            >
              <option value="">Any</option>
              <option value="free">Free / Low</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="glass-card p-6">
            <label className="block font-medium text-base text-gray-700 mb-2">Duration</label>
            <select
              value={form.duration}
              onChange={(e) => setForm((f) => ({ ...f, duration: e.target.value }))}
              className="input-glass"
            >
              <option value="">Any</option>
              <option value="short">Short (1-2 days)</option>
              <option value="medium">Medium (3-5 days)</option>
              <option value="long">Long (1+ week)</option>
            </select>
          </div>
          <div className="glass-card p-6">
            <label className="block font-medium text-base text-gray-700 mb-2">Season</label>
            <select
              value={form.season}
              onChange={(e) => setForm((f) => ({ ...f, season: e.target.value }))}
              className="input-glass"
            >
              <option value="">Any</option>
              {SEASONS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn-primary disabled:opacity-50"
        >
          {loading ? 'Getting recommendations...' : 'Get Recommendations'}
        </button>
      </form>

      {places.length > 0 && (
        <div className="animate-slide-up">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-800">Recommended for You</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map((p) => (
              <PlaceCard key={p._id} place={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
