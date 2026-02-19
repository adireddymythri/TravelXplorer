import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    navigate('/');
    setMenuOpen(false);
  };

  const navLink = (path) => `px-3 py-2 rounded-lg transition-all text-base ${isActive(path) ? 'text-primary-600 font-semibold bg-primary-50' : 'text-slate-600 hover:text-primary-600 hover:bg-slate-50'}`;
  const navLinkMobile = "block py-3 text-base text-slate-700 hover:text-primary-600 rounded-lg px-4 transition-all";

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-slate-250 shadow-sm">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="TravelXplorer"
                className="w-40 h-30 md:w-42 md:h-32 object-contain flex-shrink-0"
              />
              <div className="flex flex-col">
                <div className="flex items-baseline tracking-tight">
                  <span className="text-xl md:text-2xl font-extrabold text-[#0ea5e9]">Travel</span>
                  <span className="text-xl md:text-2xl font-extrabold text-[#1e3a8a]">Xplorer</span>
                </div>
                <span className="text-xs text-slate-500 font-medium mt-0.5 hidden sm:block whitespace-nowrap">
                  Smart Tourism & Travel Planning
                </span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-1">
              <Link to="/" className={navLink('/')}>Home</Link>
              <Link to="/destinations" className={navLink('/destinations')}>Destinations</Link>
              <Link to="/itinerary" className={navLink('/itinerary')}>Itinerary</Link>
              <Link to="/recommendations" className={navLink('/recommendations')}>Recommendations</Link>
              {user?.role === 'admin' && (
                <Link to="/admin" className="text-amber-600 hover:text-amber-500 px-3 py-2 rounded-xl text-base hover:bg-amber-50/50 transition-all">
                  Admin
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-all"
                >
                  <span className="hidden sm:inline font-medium text-base text-slate-700">{user.name}</span>
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-xl shadow-card border border-slate-200">
                    <Link
                      to="/profile"
                      onClick={() => setMenuOpen(false)}
                      className="block px-4 py-3 text-base text-slate-700 hover:bg-slate-50 rounded-lg mx-2 transition-all"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-3 text-base text-slate-700 hover:bg-slate-50 rounded-lg mx-2 transition-all"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-slate-600 hover:text-primary-600 px-4 py-2 rounded-lg font-medium text-base hover:bg-slate-50 transition-all"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn-primary"
                >
                  Register
                </Link>
              </>
            )}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-all"
              onClick={() => setOpen(!open)}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden py-4 space-y-1 border-t border-slate-200 mt-2">
            <Link to="/" className={navLinkMobile} onClick={() => setOpen(false)}>Home</Link>
            <Link to="/destinations" className={navLinkMobile} onClick={() => setOpen(false)}>
              Destinations
            </Link>
            <Link to="/itinerary" className={navLinkMobile} onClick={() => setOpen(false)}>
              Itinerary
            </Link>
            <Link to="/recommendations" className={navLinkMobile} onClick={() => setOpen(false)}>
              Recommendations
            </Link>
            {user?.role === 'admin' && (
              <Link to="/admin" className={navLinkMobile} onClick={() => setOpen(false)}>
                Admin
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
