import { useEffect, useState } from 'react';
import { adminGetAnalytics, adminGetReviews } from '../../services/api';

export default function AdminDashboard() {
  const [analytics, setAnalytics] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([adminGetAnalytics(), adminGetReviews()])
      .then(([aRes, rRes]) => {
        setAnalytics(aRes.data.data);
        setReviews(rRes.data.data || []);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="glass-card h-64 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="glass-card p-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-500 mt-1">Analytics and moderation</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="glass-card p-6">
          <h3 className="font-semibold text-gray-700 mb-4">Most Visited</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {analytics?.mostVisited?.slice(0, 5).map((p, i) => (
              <li key={p._id}>{i + 1}. {p.name} ({p.visitCount})</li>
            ))}
          </ul>
        </div>
        <div className="glass-card p-6">
          <h3 className="font-semibold text-gray-700 mb-4">Most Favorited</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {analytics?.mostFavorited?.slice(0, 5).map((p, i) => (
              <li key={p._id}>{i + 1}. {p.name} ({p.favoriteCount})</li>
            ))}
          </ul>
        </div>
        <div className="glass-card p-6">
          <h3 className="font-semibold text-gray-700 mb-4">Top Rated</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            {analytics?.topRated?.slice(0, 5).map((p, i) => (
              <li key={p._id}>{i + 1}. {p.name} ★ {p.averageRating?.toFixed(1)}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="glass-card p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Reviews (Moderation)</h2>
        <p className="text-sm text-gray-500 mb-4">
          Use API: PUT /api/admin/reviews/:id/approve, DELETE /api/admin/reviews/:id
        </p>
        <div className="space-y-3">
          {reviews.slice(0, 10).map((r) => (
            <div key={r._id} className="p-4 rounded-xl glass flex justify-between items-center">
              <div>
                <span className="font-medium text-gray-800">{r.user?.name}</span> on {r.place?.name} — ★ {r.rating}
                {r.comment && <p className="text-sm text-gray-600 mt-1">{r.comment}</p>}
              </div>
              <span className={`text-xs px-3 py-1 rounded-full ${r.approved ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                {r.approved ? 'Approved' : 'Pending'}
              </span>
            </div>
          ))}
          {reviews.length === 0 && <p className="text-gray-500">No reviews yet.</p>}
        </div>
      </div>

      <div className="mt-8 p-4 glass rounded-xl text-sm text-gray-600">
        <strong>Admin API:</strong> Add/Edit/Delete places via POST/PUT/DELETE /api/admin/places. 
        Create an admin user by setting <code className="bg-white/60 px-1 rounded">role: 'admin'</code> in the User model in MongoDB.
      </div>
    </div>
  );
}
