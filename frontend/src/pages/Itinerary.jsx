import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createItinerary, getDistricts } from '../services/api';
import { CATEGORIES } from '../utils/constants';

const CATEGORY_ICONS = {
  'Beaches & Coastal': '🏖️',
  'Temples & Religious': '🛕',
  'Historical & Archaeological': '🏛️',
  'Parks & Gardens': '🌳',
  'Shopping Malls': '🛒',
  'Wildlife & Nature': '🦋',
  'Unique Local Experiences': '✨',
};

export default function Itinerary() {
  const [districts, setDistricts] = useState([]);
  const [form, setForm] = useState({ districts: [], days: 3, interests: [] });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDistricts().then((res) => setDistricts(res.data.data || [])).catch(() => setDistricts([]));
  }, []);

  const toggleDistrict = (id) => {
    setForm((f) => ({
      ...f,
      districts: f.districts.includes(id) ? f.districts.filter((d) => d !== id) : [...f.districts, id],
    }));
  };

  const toggleInterest = (c) => {
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(c) ? f.interests.filter((i) => i !== c) : [...f.interests, c],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      const res = await createItinerary(form);
      setResult(res.data.data);
    } catch (err) {
      setResult([]);
    } finally {
      setLoading(false);
    }
  };

  const chipActive = 'px-3 py-2 rounded-xl text-base font-medium bg-primary-600 text-white shadow-lg';
  const chipInactive = 'px-3 py-2 rounded-xl text-base font-medium glass hover:bg-white/80 transition-all';

  const selectedDistrictNames = districts.filter((d) => form.districts.includes(d._id)).map((d) => d.name).join(', ') || 'All';

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="glass-card p-6 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Plan Your Itinerary</h1>
        <p className="text-gray-500 mt-1 text-base">Generate a day-wise travel plan based on your preferences</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 mb-12">
        <div className="glass-card p-6 flex flex-wrap items-center gap-4">
          <label className="font-medium text-base text-gray-700">Number of days</label>
          <input
            type="number"
            min={1}
            max={14}
            value={form.days}
            onChange={(e) => setForm((f) => ({ ...f, days: parseInt(e.target.value) || 1 }))}
            className="input-glass w-24"
          />
        </div>
        <div className="glass-card p-6">
          <label className="block font-medium text-base text-gray-700 mb-3">Select District(s)</label>
          <div className="flex flex-wrap gap-2">
            {districts.map((d) => (
              <button
                key={d._id}
                type="button"
                onClick={() => toggleDistrict(d._id)}
                className={form.districts.includes(d._id) ? chipActive : chipInactive}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>
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
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 shadow-lg hover:shadow-glow transition-all disabled:opacity-50"
        >
          {loading ? 'Generating...' : 'Generate Itinerary'}
        </button>
      </form>

      {result && result.length > 0 && (
        <div className="space-y-8 animate-slide-up">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            {form.days}-Day {selectedDistrictNames} Trip
          </h2>

          {/* Timeline */}
          <div className="relative">
            {result.map((day, dayIndex) => (
              <div key={day.day} className="relative flex gap-6 pb-8 last:pb-0">
                {/* Vertical line */}
                {dayIndex < result.length - 1 && (
                  <div
                    className="absolute left-5 top-14 bottom-0 w-0.5 border-l-2 border-dashed border-primary-300"
                    style={{ marginLeft: '1.25rem' }}
                  />
                )}

                {/* Day node */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center z-10">
                  {day.day}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800 mb-2">
                    Day {day.day}: {day.places?.length ? CATEGORIES.includes(day.places[0]?.category) ? day.places[0].category : 'Exploring' : 'Exploring'}
                  </h3>
                  <p className="text-base text-gray-600 mb-4">{day.explanation}</p>

                  <div className="space-y-3">
                    {day.places?.map((p) => (
                      <Link
                        key={p._id}
                        to={`/place/${p._id}`}
                        className="flex items-center gap-4 p-4 rounded-xl glass-card hover:shadow-card-hover transition-all group"
                      >
                        <span className="text-2xl">{CATEGORY_ICONS[p.category] || '📍'}</span>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-primary-600 group-hover:text-primary-700 truncate">
                            {p.name}
                          </h4>
                          <p className="text-base text-gray-500">{p.category} • {p.district?.name}</p>
                        </div>
                        <span className="text-amber-500">★ {p.averageRating?.toFixed(1) || '-'}</span>
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
