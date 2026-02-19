import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getPlaces, getDistricts } from '../services/api';
import PlaceCard from '../components/PlaceCard';
import { CATEGORIES, SEASONS } from '../utils/constants';

export default function Destinations() {
  const [searchParams] = useSearchParams();
  const [places, setPlaces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    district: searchParams.get('district') || '',
    category: searchParams.get('category') || '',
    entryFee: searchParams.get('entryFee') || '',
    bestSeason: searchParams.get('bestSeason') || '',
    sort: searchParams.get('sort') || '-createdAt',
    page: 1,
  });
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    const search = searchParams.get('search');
    const sort = searchParams.get('sort');
    const entryFee = searchParams.get('entryFee');
    setFilters((f) => ({
      ...f,
      search: search || '',
      sort: sort || f.sort,
      entryFee: entryFee || '',
    }));
  }, [searchParams]);

  useEffect(() => {
    getDistricts()
      .then((res) => setDistricts(res.data.data || []))
      .catch(() => setDistricts([]));
  }, []);

  useEffect(() => {
    setLoading(true);
    const params = { ...filters };
    if (!params.search) delete params.search;
    if (!params.district) delete params.district;
    if (!params.category) delete params.category;
    if (!params.entryFee) delete params.entryFee;
    if (!params.bestSeason) delete params.bestSeason;
    if (params.sort === '-createdAt') delete params.sort;
    getPlaces(params)
      .then((res) => {
        setPlaces(res.data.data || []);
        setPagination(res.data.pagination || {});
      })
      .catch(() => setPlaces([]))
      .finally(() => setLoading(false));
  }, [filters]);

  const handleChange = (key, value) => {
    setFilters((f) => ({ ...f, [key]: value, page: 1 }));
  };

  const inputClass = 'input';
  const btnClass = 'px-4 py-2 rounded-xl font-medium text-base transition-all disabled:opacity-50';

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="card p-6 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Destinations</h1>
        <p className="text-gray-500 mt-1 text-base">Explore places across Andhra Pradesh</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        <aside className="lg:col-span-1 space-y-4">
          <div className="card p-5 space-y-4 sticky top-24">
            <h3 className="font-semibold text-lg text-gray-800">Filters</h3>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search places..."
                value={filters.search}
                onChange={(e) => handleChange('search', e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">District</label>
              <select
                value={filters.district}
                onChange={(e) => handleChange('district', e.target.value)}
                className={inputClass}
              >
                <option value="">All Districts</option>
                {districts.map((d) => (
                  <option key={d._id} value={d._id}>{d.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Category</label>
              <select
                value={filters.category}
                onChange={(e) => handleChange('category', e.target.value)}
                className={inputClass}
              >
                <option value="">All Categories</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Entry Fee</label>
              <select
                value={filters.entryFee}
                onChange={(e) => handleChange('entryFee', e.target.value)}
                className={inputClass}
              >
                <option value="">Any</option>
                <option value="Free">Free</option>
                <option value="Paid">Paid</option>
              </select>
            </div>
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">Best Season</label>
              <select
                value={filters.bestSeason}
                onChange={(e) => handleChange('bestSeason', e.target.value)}
                className={inputClass}
              >
                <option value="">Any</option>
                {SEASONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
        </aside>

        <div className="lg:col-span-3">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="card h-72 animate-pulse" />
              ))}
            </div>
          ) : places.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {places.map((place) => (
                  <PlaceCard key={place._id} place={place} />
                ))}
              </div>
              {pagination.pages > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                  <button
                    disabled={filters.page <= 1}
                    onClick={() => handleChange('page', filters.page - 1)}
                    className={`${btnClass} glass hover:bg-white/80`}
                  >
                    Prev
                  </button>
                  <span className="px-4 py-2 text-base text-gray-600">
                    {filters.page} / {pagination.pages}
                  </span>
                  <button
                    disabled={filters.page >= pagination.pages}
                    onClick={() => handleChange('page', filters.page + 1)}
                    className={`${btnClass} glass hover:bg-white/80`}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="card p-12 text-center">
              <p className="text-gray-500 text-base">No places found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
