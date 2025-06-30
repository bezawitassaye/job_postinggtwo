'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from './AuthContext';
import Link from 'next/link';
import Image from 'next/image';

// Dynamically load modal components (client-side only)
const LoginModal = dynamic(() => import('./LoginModal'), { ssr: false });
const RegisterModal = dynamic(() => import('./RegisterModal'), { ssr: false });

export default function Navbar() {
  const { user, logout, token } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const popupRef = useRef();
  const username = user?.username || 'User';

  // Fetch user's applied jobs
  useEffect(() => {
    if (showPopup && token) {
      fetch('http://localhost:5000/api/applications/my', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(res => res.json())
        .then(setAppliedJobs)
        .catch(console.error);
    }
  }, [showPopup, token]);

  // Handle clicking outside of user popup
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };
    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showPopup]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-50 text-white z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/e.png" alt="Job Portal Logo" width={140} height={80} priority />
          </Link>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6 items-center text-xl text-gray-400">
          <Link href="/"><span className="hover:text-gray-500 cursor-pointer">Home</span></Link>
          <Link href="/About"><span className="hover:text-gray-500 cursor-pointer">About</span></Link>
          <Link href="/ContactUs"><span className="hover:text-gray-500 cursor-pointer">Contact</span></Link>
          <Link href="/jobs"><span className="hover:text-gray-500 cursor-pointer">Jobs</span></Link>
        </div>

        {/* Right Auth Section */}
        <div className="hidden md:flex items-center justify-end space-x-4">
          {user ? (
            <div className="relative">
              <button onClick={() => setShowPopup(!showPopup)} aria-label="User menu" className="focus:outline-none">
                <FaUserCircle size={28} className="text-gray-700 hover:text-gray-500" />
              </button>
              {showPopup && (
                <div ref={popupRef} className="absolute right-0 mt-2 w-64 bg-white text-black rounded shadow-lg p-4 z-50">
                  <p className="font-semibold mb-2">Hello, {username}</p>
                  <h4 className="font-semibold mb-1">Applied Jobs:</h4>
                  {appliedJobs.length === 0 ? (
                    <p className="text-sm mb-2">No applied jobs yet.</p>
                  ) : (
                    <ul className="max-h-40 overflow-auto mb-2">
                      {appliedJobs.map(job => (
                        <li key={job._id}>
                          <Link href={`/jobs/${job.jobId}`}>
                            <span className="text-blue-600 hover:underline cursor-pointer">{job.jobTitle}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  <button
                    onClick={() => {
                      logout();
                      setShowPopup(false);
                    }}
                    className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <button
                onClick={() => {
                  setShowLogin(true);
                  setShowRegister(false);
                }}
                className="text-white text-xl bg-sky-900 py-4 px-12 rounded-full cursor-pointer hover:bg-transparent hover:text-black hover:border-2 hover:border-gray-200 hover:text-sky-900"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setShowRegister(true);
                  setShowLogin(false);
                }}
                className="text-sky-900 text-xl py-4 px-7 rounded-full border-2 border-gray-200 cursor-pointer hover:bg-sky-900 hover:text-white"
              >
                Register
              </button>
            </div>
          )}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden ml-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700 px-4 pb-4 space-y-2 text-white">
          <Link href="/"><span className="block py-2 hover:text-gray-300">Home</span></Link>
          <Link href="/about"><span className="block py-2 hover:text-gray-300">About</span></Link>
          <Link href="/contact"><span className="block py-2 hover:text-gray-300">Contact</span></Link>
          <Link href="/jobs"><span className="block py-2 hover:text-gray-300">Jobs</span></Link>
          <Link href="/blogs"><span className="block py-2 hover:text-gray-300">Blogs</span></Link>
          {user ? (
            <button
              onClick={() => {
                logout();
                setMenuOpen(false);
              }}
              className="block w-full text-left py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <div className="flex flex-col items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setShowLogin(true);
                  setShowRegister(false);
                  setMenuOpen(false);
                }}
                className="text-white text-xl bg-sky-900 py-3 px-10 rounded-full hover:bg-gray-400 hover:text-black"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setShowRegister(true);
                  setShowLogin(false);
                  setMenuOpen(false);
                }}
                className="text-white text-xl py-3 px-9 rounded-full border-2 border-gray cursor-pointer hover:bg-sky-900 hover:border-0"
              >
                Register
              </button>
            </div>
          )}
        </div>
      )}

      {/* Login/Register Modals */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </nav>
  );
}
