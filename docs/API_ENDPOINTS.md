# TravelXplorer REST API Reference

Base URL: `http://localhost:5000/api`

## Authentication

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/auth/register` | Register user | No |
| POST | `/auth/login` | Login user | No |
| GET | `/auth/me` | Get current user | Bearer |

## Places

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/places` | List places (filters: district, category, entryFee, bestSeason, search, page, limit) | No |
| GET | `/places/featured` | Featured places | No |
| GET | `/places/nearby/:placeId` | Places within 20km | No |
| GET | `/places/:id` | Place detail | No |
| GET | `/places/:placeId/reviews` | Place reviews | No |
| POST | `/places/:placeId/reviews` | Add review | Bearer |

## User

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| PUT | `/users/favorites/:placeId` | Toggle favorite | Bearer |

## Districts

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/districts` | List districts | No |

## Itinerary

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/itinerary` | Generate itinerary | No |

Body: `{ districts: [], days: 3, interests: [] }`

## Recommendations

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/recommendations` | Get recommendations | No |

Body: `{ interests: [], budget: '', duration: '', season: '' }`

## Admin

All admin routes require Bearer token + `role: 'admin'`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/admin/places` | Create place |
| PUT | `/admin/places/:id` | Update place |
| DELETE | `/admin/places/:id` | Delete place |
| GET | `/admin/analytics` | Analytics dashboard |
| GET | `/admin/reviews` | List reviews |
| PUT | `/admin/reviews/:id/approve` | Approve review |
| DELETE | `/admin/reviews/:id` | Delete review |
