import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toggleFavorite } from '../services/api';
import toast from 'react-hot-toast';

export default function PlaceCard({ place, isFavorite = false }) {
  const { user } = useAuth();
  const imgUrl = place.images?.[0]?.url || 'https://via.placeholder.com/400x250?text=No+Image';

  const handleHeartClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      toast.error('Login to add favorites');
      return;
    }
    try {
      await toggleFavorite(place._id);
      toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites');
      if (window.location.pathname === '/profile') window.location.reload();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed');
    }
  };

  return (
    <div className="group relative block card overflow-hidden">
      <Link to={`/place/${place._id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden relative">
          <img
            src={imgUrl}
            alt={place.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg text-sm font-medium bg-white/95 text-primary-600 shadow">
            {place.category}
          </span>
          {place.averageRating > 0 && (
            <span className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-400 text-amber-900 text-sm font-semibold">
              ★ {place.averageRating.toFixed(1)}
            </span>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-bold text-lg text-slate-800 line-clamp-1 group-hover:text-primary-600 transition-colors">
            {place.name}
          </h3>
          <p className="text-base text-slate-500 mt-1">{place.district?.name}</p>
          <p className="text-sm text-slate-400 mt-0.5">{place.reviewCount || 0} reviews</p>
        </div>
      </Link>
      <button
        onClick={handleHeartClick}
        className="absolute bottom-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:scale-110 active:scale-95 transition-transform z-10"
        aria-label="Favorite"
      >
        <svg
          className={`w-5 h-5 ${isFavorite ? 'text-red-500 fill-red-500' : 'text-slate-400 hover:text-red-400'}`}
          fill={isFavorite ? 'currentColor' : 'none'}
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>
    </div>
  );
}
