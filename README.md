# TravelXplorer – Smart Tourism & Travel Planning Platform

A production-ready MERN-stack tourism web application for exploring **500+ tourist destinations** across all **26 districts of Andhra Pradesh**.

## 🏗️ Project Structure

```
TravelXplorer/
├── frontend/          # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page-level components
│   │   ├── services/     # API calls (Axios)
│   │   ├── context/      # Auth & app state
│   │   ├── hooks/        # Custom React hooks
│   │   ├── utils/        # Helper functions
│   │   └── assets/       # Images, icons
│   └── public/
│
└── backend/           # Node.js + Express + MongoDB
    ├── config/        # DB & env config
    ├── controllers/   # Request handlers
    ├── models/        # Mongoose schemas
    ├── routes/        # API routes
    ├── middleware/    # Auth, validation
    ├── services/      # Business logic
    └── utils/         # Helpers
```

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React 18, React Router, Tailwind CSS, Axios, Vite |
| **Backend** | Node.js, Express.js, REST API |
| **Database** | MongoDB, Mongoose ODM |
| **Auth** | JWT (jsonwebtoken + bcryptjs) |
| **APIs** | Google Maps, OpenWeather (optional), Cloudinary |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env   # Configure your environment
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Environment Variables (Backend)
Create `backend/.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/travelxplorer
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
GOOGLE_MAPS_API_KEY=your-google-maps-key
```

## 📋 Core Features

- **Public**: Browse 500+ destinations by category, district
- **Search & Filters**: Smart search by name, district, category, season
- **Interactive Maps**: Google Maps, directions, nearby places
- **User Auth**: Register, login, JWT, favorites/wishlist
- **Ratings & Reviews**: 1–5 stars, text reviews
- **Itinerary Planner**: Day-wise travel plans
- **Recommendations**: Rule-based (ML-ready)
- **Admin Panel**: CRUD places, moderation, analytics
- **Multi-Language**: English, Telugu, Hindi

## 📖 Documentation

- `docs/API_ENDPOINTS.md` – REST API reference
- `docs/ARCHITECTURE.md` – Data flow & security
- `docs/INTERVIEW_GUIDE.md` – Viva explanation

---

**Suitable for**: Final year projects • Hackathons • Portfolio • Interviews
