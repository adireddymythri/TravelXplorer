import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-800 text-slate-300 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">TravelXplorer</h3>
            <p className="text-base text-slate-400">
              Smart Tourism & Travel Planning Platform. Explore 500+ destinations across Andhra Pradesh.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-base mb-3">Quick Links</h4>
            <ul className="space-y-2 text-base">
              <li><Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/itinerary" className="hover:text-white transition-colors">Plan Itinerary</Link></li>
              <li><Link to="/recommendations" className="hover:text-white transition-colors">Recommendations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-base mb-3">Contact</h4>
            <p className="text-base text-slate-400">Andhra Pradesh Tourism</p>
            <p className="text-base text-slate-400">travelxplorer@example.com</p>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-base text-slate-500">
          &copy; {new Date().getFullYear()} TravelXplorer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
