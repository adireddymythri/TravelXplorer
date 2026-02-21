import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Auth
export const register = (data) => api.post('/auth/register', data);
export const login = (data) => api.post('/auth/login', data);
export const getMe = () => api.get('/auth/me');

// Places
export const getPlaces = (params) => api.get('/places', { params });
export const getPlaceById = (id) => api.get(`/places/${id}`);
export const getFeaturedPlaces = () => api.get('/places/featured');
export const getNearbyPlaces = (placeId) => api.get(`/places/nearby/${placeId}`);

// Reviews
export const getReviews = (placeId) => api.get(`/places/${placeId}/reviews`);
export const addReview = (placeId, data) => api.post(`/places/${placeId}/reviews`, data);

// User
export const toggleFavorite = (placeId) => api.put(`/users/favorites/${placeId}`);

// Districts
export const getDistricts = () => api.get('/districts');

// Itinerary
export const createItinerary = (data) => api.post('/itinerary', data);

// Recommendations
export const getRecommendations = (data) => api.post('/recommendations', data);

// Admin
export const adminCreatePlace = (data) => api.post('/admin/places', data);
export const adminUpdatePlace = (id, data) => api.put(`/admin/places/${id}`, data);
export const adminDeletePlace = (id) => api.delete(`/admin/places/${id}`);
export const adminGetAnalytics = () => api.get('/admin/analytics');
export const adminGetReviews = () => api.get('/admin/reviews');
export const adminApproveReview = (id) => api.put(`/admin/reviews/${id}/approve`);
export const adminDeleteReview = (id) => api.delete(`/admin/reviews/${id}`);

// Misc
export const getWeather = (lat, lon) => api.get('/misc/weather', { params: { lat, lon } });

export default api;
