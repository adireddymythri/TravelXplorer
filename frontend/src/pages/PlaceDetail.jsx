import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getPlaceById, getNearbyPlaces, addReview, toggleFavorite, getWeather } from '../services/api';
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
  const [weather, setWeather] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);

  useEffect(() => {
    // Clear state for new place
    setPlace(null);
    setNearby([]);
    setWeather(null);
    setLoading(true);

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

  useEffect(() => {
    let isMounted = true;

    if (place?.location?.coordinates) {
      const [lng, lat] = place.location.coordinates;
      setWeatherLoading(true);

      getWeather(lat, lng)
        .then((res) => {
          if (isMounted) setWeather(res.data.data);
        })
        .catch(() => {
          if (isMounted) setWeather(null);
        })
        .finally(() => {
          if (isMounted) setWeatherLoading(false);
        });
    } else {
      setWeather(null);
      setWeatherLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, [place]);

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
  // GeoJSON: coordinates are [longitude, latitude]
  const [lng, lat] = place.location?.coordinates || [];
  const hasCoords = typeof lat === 'number' && typeof lng === 'number';

  // Fallback search query if coordinates are missing
  const placeSearchQuery = encodeURIComponent(
    `${place.name}, ${place.address || ''}, ${place.district?.name || ''} Andhra Pradesh, India`
  );

  // View on Maps & Get Directions: Use place name for navigation to ensure Google chooses the official POI entrance
  // coordinates are used as a fallback.
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${placeSearchQuery}`;

  const mapsUrl = hasCoords
    ? `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
    : `https://www.google.com/maps/search/?api=1&query=${placeSearchQuery}`;

  // Embedded map: Use name-based search for better POI display (shows photos/reviews in map)
  const embedQuery = encodeURIComponent(`${place.name}, ${place.district?.name || ''}`);
  const embedSrc = `https://maps.google.com/maps?q=${embedQuery}&z=16&output=embed`;

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
                  className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === i ? 'border-primary-500 ring-2 ring-primary-200' : 'border-transparent opacity-70 hover:opacity-100'
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

        <div className="p-6 md:p-10">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              {place.name}
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-slate-500">
              <span className="text-sm font-medium">District: {place.district?.name}</span>
              <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100/50">
                {place.category}
              </span>
            </div>
          </div>

          {/* Top Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {/* Weather Card */}
            <div className="bg-slate-50/50 p-5 rounded-3xl border border-slate-100 flex items-center gap-4 transition-all hover:bg-white hover:shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-500 flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.364l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
              </div>
              <div className="min-w-0">
                <p className="font-bold text-xl text-slate-900 leading-none mb-1">
                  {weather ? `${weather.temp}°C` : 'N/A'}
                </p>
                <p className="text-slate-500 text-xs font-medium truncate capitalize">
                  {weather ? weather.condition : 'Check weather'}
                </p>
              </div>
            </div>

            {/* Entry Fee Card */}
            <div className="bg-slate-50/50 p-5 rounded-3xl border border-slate-100 flex items-center gap-4 transition-all hover:bg-white hover:shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
              </div>
              <div className="min-w-0">
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Entry Fee</p>
                <p className="font-bold text-xl text-slate-900 leading-none">
                  {place.entryFeeAmount > 0 ? `₹${place.entryFeeAmount}` : 'Free'}
                </p>
              </div>
            </div>

            {/* Best Time Card */}
            <div className="bg-slate-50/50 p-5 rounded-3xl border border-slate-100 flex items-center gap-4 transition-all hover:bg-white hover:shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600 flex-shrink-0">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
              </div>
              <div className="min-w-0">
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Best Time</p>
                <p className="font-bold text-base text-slate-900 leading-tight">
                  {place.bestSeason?.length ? place.bestSeason[0] : 'Anytime'}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-10 text-slate-600 leading-relaxed text-lg">
            {place.description}
          </div>

          {/* Detailed Info Grid - Refined & Colorful */}
          <div className="grid gap-5 mb-8">
            {/* Timings & Days Card */}
            <div className="bg-indigo-50/40 p-6 rounded-3xl border border-indigo-100/30 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-100 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div className="grid grid-cols-2 gap-6 flex-1">
                <div>
                  <p className="text-indigo-500/70 text-[10px] font-bold uppercase tracking-wider mb-1 text-left">Hours</p>
                  <p className="text-slate-900 font-bold text-base leading-tight text-left">{place.timings}</p>
                </div>
                <div>
                  <p className="text-indigo-500/70 text-[10px] font-bold uppercase tracking-wider mb-1 text-left">Schedule</p>
                  <p className="text-slate-900 font-bold text-base leading-tight text-left">{place.operationalDays || 'All Days'}</p>
                </div>
              </div>
            </div>

            {/* Address Card */}
            <div className="bg-rose-50/30 p-6 rounded-3xl border border-rose-100/30 flex gap-6 items-start text-left">
              <div className="w-12 h-12 rounded-2xl bg-rose-500 flex items-center justify-center text-white shadow-md shadow-rose-100 flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <p className="text-rose-500/70 text-[10px] font-bold uppercase tracking-wider mb-1">Address</p>
                <p className="text-slate-900 font-bold text-base leading-relaxed">{place.address}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Dress Code Card */}
              <div className="bg-emerald-50/30 p-6 rounded-3xl border border-emerald-100/30 flex gap-5 items-start text-left">
                <div className="w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-emerald-600/70 text-[10px] font-bold uppercase tracking-wider mb-1">Dress Code</p>
                  <p className="text-slate-900 font-bold text-sm leading-tight">{place.dressCode || 'Casual'}</p>
                </div>
              </div>

              {/* Rules Card */}
              <div className="bg-amber-50/30 p-6 rounded-3xl border border-amber-100/30 flex gap-5 items-start text-left">
                <div className="w-11 h-11 rounded-xl bg-amber-500 flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <p className="text-amber-600/70 text-[10px] font-bold uppercase tracking-wider mb-1">Rules</p>
                  <p className="text-slate-800 font-bold text-xs leading-relaxed line-clamp-2">
                    {place.specialRules?.length > 0 ? place.specialRules.join(', ') : 'Standard safety and conduct.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Food Highlights - Sleek & Modern */}
          {place.foodRecommendations?.length > 0 && (
            <div className="relative overflow-hidden bg-purple-600 rounded-[2rem] p-6 mb-10 shadow-lg shadow-purple-900/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
              <div className="relative z-10 flex items-center gap-6 text-left">
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl flex-shrink-0">
                  🍽️
                </div>
                <div>
                  <h3 className="text-purple-100 text-[10px] font-bold uppercase tracking-widest mb-1">Local Delicacies</h3>
                  <p className="text-white font-bold text-lg leading-tight">
                    {place.foodRecommendations.join(' • ')}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/itinerary"
              className="px-8 py-4 bg-primary-600 text-white rounded-2xl text-base font-bold shadow-lg shadow-primary-500/30 hover:bg-primary-700 transition-all flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 01-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
              Plan Itinerary
            </Link>
            {directionsUrl && (
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-slate-700 rounded-2xl text-base font-bold border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Get Directions
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Map & Directions */}
      <div className="mt-8 card overflow-hidden p-0 border-none shadow-xl animate-scale-in">
        <div className="bg-white p-4 border-b border-gray-100 flex flex-wrap justify-between items-center gap-3">
          <div>
            <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
              <span className="text-primary-600">📍</span> {place.name}
            </h3>
            <p className="text-sm text-gray-500 line-clamp-1">{place.address}</p>
          </div>
          <div className="flex gap-2">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-600 text-white rounded-xl text-sm font-bold hover:bg-primary-700 transition-colors"
            >
              Get Directions
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-200 transition-colors"
            >
              View on Maps
            </a>
          </div>
        </div>
        {embedSrc ? (
          <div className="aspect-video w-full bg-slate-100">
            <iframe
              title={`Map: ${place.name}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={embedSrc}
            />
          </div>
        ) : (
          <div className="aspect-video w-full bg-slate-100 flex items-center justify-center p-8 text-center">
            <div>
              <p className="text-slate-500 mb-3">Exact location not available on map</p>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary-600 text-white rounded-xl text-sm font-bold hover:bg-primary-700 transition-colors inline-block"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        )}
      </div>

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
