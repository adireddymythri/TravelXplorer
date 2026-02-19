import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMe } from '../services/api';
import PlaceCard from '../components/PlaceCard';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMe()
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="glass-card h-32 animate-pulse" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="glass-card p-12 text-center">
          <p className="text-gray-500 text-base">Could not load profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="glass-card p-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h1>
        <div className="space-y-2 text-base text-gray-700">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Favorite Places</h2>
      {user.favorites?.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {user.favorites.map((place) => (
            <PlaceCard key={place._id} place={place} isFavorite />
          ))}
        </div>
      ) : (
        <div className="glass-card p-8 text-center">
          <p className="text-gray-500 text-base">
            No favorites yet. <Link to="/destinations" className="text-primary-600 font-semibold hover:underline">Browse destinations</Link> to add some.
          </p>
        </div>
      )}
    </div>
  );
}
