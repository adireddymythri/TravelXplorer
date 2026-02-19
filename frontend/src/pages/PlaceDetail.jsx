import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getPlaceById, getNearbyPlaces, addReview, toggleFavorite } from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function PlaceDetail() {
  const { id } = useParams();
  const { user } = useAuth();
  const [place, setPlace] = useState(null);
  const [nearby, setNearby] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewForm, setReviewForm] = useState({ rating: 5, comment: '' });
  const [submitting, setSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    getPlaceById(id)
      .then((res) => setPlace(res.data.data))
      .catch(() => setPlace(null))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (place) {
      getNearbyPlaces(id)
        .then((res) => setNearby(res.data.data || []))
        .catch(() => setNearby([]));
    }
  }, [place, id]);

  const handleReview = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error('Please login to add a review');
      return;
    }
    setSubmitting(true);
    try {
      const res = await addReview(id, reviewForm);
      setPlace((p) => ({
        ...p,
        reviews: [...(p.reviews || []), res.data.data],
        reviewCount: (p.reviewCount || 0) + 1,
      }));
      setReviewForm({ rating: 5, comment: '' });
      toast.success('Review added!');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to add review');
    } finally {
      setSubmitting(false);
    }
  };

  const handleFavorite = async () => {
    if (!user) {
      toast.error('Please login to add favorites');
      return;
    }
    try {
      await toggleFavorite(id);
      toast.success('Favorite updated');
      getPlaceById(id).then((res) => setPlace(res.data.data));
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed');
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="card h-96 animate-pulse" />
      </div>
    );
  }

  if (!place) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="card p-12 text-center">
          <p className="text-gray-500 text-base">Place not found.</p>
        </div>
      </div>
    );
  }

  const images = place.images?.length ? place.images : [{ url: 'https://via.placeholder.com/800x400?text=No+Image' }];
  const mainImg = images[selectedImage]?.url || images[0]?.url;
  const [lng, lat] = place.location?.coordinates || [];
  const mapsUrl = lat && lng ? `https://www.google.com/maps?q=${lat},${lng}` : null;
  const embedUrl = lat && lng ? `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${lat},${lng}&zoom=14` : null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="card overflow-hidden animate-slide-up">
        {/* Image gallery */}
        <div className="relative">
          <div className="aspect-video overflow-hidden bg-gray-100">
            <img src={mainImg} alt={place.name} className="w-full h-full object-cover" />
          </div>
          {images.length > 1 && (
            <div className="flex gap-2 p-4 overflow-x-auto bg-white/80">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === i ? 'border-primary-500 ring-2 ring-primary-200' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
          <div className="absolute top-4 right-4 flex gap-2">
            {user && (
              <button
                onClick={handleFavorite}
                className="bg-white px-4 py-2 rounded-xl text-base font-medium border border-slate-200 hover:bg-slate-50 transition-all"
              >
                ♥ Favorite
              </button>
            )}
            {place.featured && (
              <span className="px-3 py-2 rounded-xl bg-amber-400 text-amber-900 text-sm font-bold">
                Recommended
              </span>
            )}
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">{place.name}</h1>
            {place.averageRating > 0 && (
              <span className="flex items-center gap-1 text-base text-amber-500 font-semibold">
                ★ {place.averageRating.toFixed(1)} ({place.reviewCount})
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-3 text-base text-gray-600 mb-4">
            <span>District: {place.district?.name}</span>
            <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-600 font-medium">{place.category}</span>
          </div>

          {/* Weather placeholder + quick info */}
          <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-xl bg-white/70 text-base">
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-2xl">☀️</span>
              <span>28°C - Sunny</span>
            </div>
            <span>Entry: {place.entryFee} {place.entryFeeAmount > 0 && `₹${place.entryFeeAmount}`}</span>
            <span>Best: {place.bestSeason?.join(', ')}</span>
            {mapsUrl && (
              <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-primary-600 font-medium hover:underline">
                View full map →
              </a>
            )}
          </div>

          <p className="text-gray-600 text-base leading-relaxed">{place.description}</p>

          <div className="grid sm:grid-cols-2 gap-4 mt-6 p-4 rounded-xl bg-white/60 text-base">
            <div><strong className="text-gray-700">Timings:</strong> {place.timings}</div>
            <div><strong className="text-gray-700">Days:</strong> {place.operationalDays}</div>
            <div className="sm:col-span-2"><strong className="text-gray-700">Address:</strong> {place.address}</div>
            {place.dressCode && <div><strong className="text-gray-700">Dress Code:</strong> {place.dressCode}</div>}
            {place.restrictions && <div><strong className="text-gray-700">Restrictions:</strong> {place.restrictions}</div>}
          </div>

          {place.localFoodRecommendations?.length > 0 && (
            <div className="mt-4 p-4 rounded-xl bg-amber-50/70 border border-amber-200/50">
              <strong>Local Food:</strong> {place.localFoodRecommendations.join(', ')}
            </div>
          )}

          <div className="mt-6 flex gap-4">
            <Link
              to="/itinerary"
              className="btn-primary"
            >
              Plan Itinerary
            </Link>
            {mapsUrl && (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass"
              >
                Get Directions
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Map link - opens Google Maps */}
      {lat && lng && (
        <div className="mt-8 card overflow-hidden p-0">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-video bg-gradient-to-br from-primary-100 to-cyan-100 relative group"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <span className="text-5xl">🗺️</span>
              <span className="px-4 py-2 rounded-xl bg-white/90 font-semibold text-base text-gray-800 shadow-lg group-hover:scale-105 transition-transform">
                View on Google Maps
              </span>
              <span className="text-base text-gray-600">Get directions</span>
            </div>
          </a>
        </div>
      )}

      <div className="mt-8 card p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Reviews</h2>
        {user && (
          <form onSubmit={handleReview} className="mb-6 p-4 rounded-xl bg-white/60 backdrop-blur-sm">
            <div className="flex gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setReviewForm((f) => ({ ...f, rating: r }))}
                  className={`text-2xl transition-transform hover:scale-110 ${reviewForm.rating >= r ? 'text-amber-500' : 'text-gray-300'}`}
                >
                  ★
                </button>
              ))}
            </div>
            <textarea
              value={reviewForm.comment}
              onChange={(e) => setReviewForm((f) => ({ ...f, comment: e.target.value }))}
              placeholder="Write a review..."
              className="input-glass mb-3"
              rows={2}
            />
            <button type="submit" disabled={submitting} className="btn-primary">
              Submit Review
            </button>
          </form>
        )}
        <div className="space-y-4">
          {place.reviews?.length > 0 ? (
            place.reviews.map((r) => (
              <div key={r._id} className="p-4 rounded-xl bg-white/60 border border-white/50 text-base">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-800">{r.user?.name}</span>
                  <span className="text-amber-500">★ {r.rating}</span>
                </div>
                {r.comment && <p className="text-gray-600 mt-1">{r.comment}</p>}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-base">No reviews yet.</p>
          )}
        </div>
      </div>

      {nearby.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Nearby Attractions (within 20km)</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {nearby.map((p) => (
              <Link
                key={p._id}
                to={`/place/${p._id}`}
                className="flex gap-4 p-4 card hover:scale-[1.02] transition-transform"
              >
                <img
                  src={p.images?.[0]?.url || 'https://via.placeholder.com/100'}
                  alt={p.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{p.name}</h3>
                  <p className="text-base text-gray-500">{p.category} • {p.district?.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
