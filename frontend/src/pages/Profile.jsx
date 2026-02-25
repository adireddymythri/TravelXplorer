import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMe, getMyPlans, deletePlan } from '../services/api';
import PlaceCard from '../components/PlaceCard';
import toast from 'react-hot-toast';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getMe(), getMyPlans()])
      .then(([userRes, plansRes]) => {
        setUser(userRes.data.user);
        setPlans(plansRes.data.data || []);
      })
      .catch((err) => {
        console.error('Error fetching profile data:', err);
        toast.error('Failed to load profile data');
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDeletePlan = async (id) => {
    if (!window.confirm('Are you sure you want to delete this plan?')) return;
    try {
      await deletePlan(id);
      setPlans(plans.filter(p => p._id !== id));
      toast.success('Plan deleted successfully');
    } catch (err) {
      toast.error('Failed to delete plan');
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="glass-card h-32 animate-pulse mb-8" />
        <div className="h-64 glass-card animate-pulse" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="glass-card p-12 text-center">
          <p className="text-gray-500 text-base">Could not load profile. Please login again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Profile Info Header */}
      <div className="glass-card p-8 mb-12 bg-gradient-to-br from-white/60 to-primary-50/30">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-primary-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
            {user.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-800">{user.name}</h1>
            <p className="text-slate-500 font-medium">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Left Column: Favorites */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-black mb-6 text-slate-800 flex items-center gap-2">
            <span>❤️</span> Favorites
          </h2>
          {user.favorites?.length > 0 ? (
            <div className="grid gap-6">
              {user.favorites.map((place) => (
                <PlaceCard key={place._id} place={place} isFavorite />
              ))}
            </div>
          ) : (
            <div className="glass-card p-8 text-center border-dashed border-2">
              <p className="text-slate-500 text-sm">
                No favorites yet. <br />
                <Link to="/destinations" className="text-primary-600 font-bold hover:underline">Explore spots</Link>
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Plans */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-black mb-6 text-slate-800 flex items-center gap-2">
            <span>📅</span> My Travel Plans
          </h2>
          {plans.length > 0 ? (
            <div className="space-y-6">
              {plans.map((plan) => (
                <div key={plan._id} className="glass-card overflow-hidden group hover:shadow-glow transition-all ring-1 ring-black/5">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary-600 transition-colors">
                          {plan.title}
                        </h3>
                        <p className="text-sm font-medium text-slate-400 mt-1">
                          Created {new Date(plan.createdAt).toLocaleDateString()} • {plan.days} Days
                        </p>
                      </div>
                      <button
                        onClick={() => handleDeletePlan(plan._id)}
                        className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                        title="Delete Plan"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>

                    <div className="grid grid-cols-5 gap-2 mt-4">
                      {plan.itinerary.slice(0, 5).map((day, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="aspect-square rounded-lg bg-slate-100 overflow-hidden relative">
                            {day.places[0]?.images?.[0]?.url ? (
                              <img src={day.places[0].images[0].url} alt="" className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-xs text-slate-400">Day {day.day}</div>
                            )}
                            <div className="absolute top-1 left-1 bg-black/60 text-white text-[8px] px-1.5 py-0.5 rounded-md font-bold backdrop-blur-sm">
                              Day {day.day}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex justify-end">
                      <Link
                        to={`/itinerary?planId=${plan._id}`}
                        className="text-sm font-black text-primary-600 hover:text-primary-700 flex items-center gap-1 group/btn"
                      >
                        View Full Details
                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="glass-card p-12 text-center border-dashed border-2">
              <p className="text-slate-500 mb-4">You haven't saved any itineraries yet.</p>
              <Link
                to="/itinerary"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-bold shadow-lg shadow-primary-200 hover:shadow-primary-300 transition-all"
              >
                Create Your First Plan
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
