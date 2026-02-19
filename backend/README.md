# TravelXplorer Backend

Node.js + Express REST API for TravelXplorer.

## Structure

```
├── config/         # db.js, cloudinary.js
├── controllers/    # authController, placeController, etc.
├── models/         # User, Place, Review, District
├── routes/         # auth, places, reviews, admin
├── middleware/     # auth, admin, validate
├── services/       # itineraryService, recommendationService
└── utils/          # errorHandler, asyncHandler
```

## Run

```bash
npm install
npm run dev
```

Default: http://localhost:5000
