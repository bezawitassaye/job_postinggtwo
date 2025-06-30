'use client';

import { useState } from 'react';
import { useAuth } from './AuthContext';

export default function LoginForm({ onSuccess }) {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('https://job-postinggtwoowow.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (res.ok) {
        login(data.token);
        if (onSuccess) onSuccess();
      } else {
        setError(data.error || 'Login failed');
      }
    } catch {
      setError('Network error');
    }
  };

  return (
     <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-8 border border-gray-200">
        <h1 className="text-3xl font-bold text-center text-sky-900 mb-6">Sign In to Your Account</h1>
       {error && <div className="text-red-500 mb-2">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
       <label className="block text-gray-700 mb-1">Username</label>

        <input
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 placeholder-gray-400"
           />
           <label className="block text-gray-700 mb-1">Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 placeholder-gray-400"
            />
        <button
          type="submit"
          className="w-full bg-sky-900 text-white font-semibold px-4 py-3 rounded-full hover:bg-sky-800 transition"
          >
          Login
        </button>
      </form>
    </div>
  );
}
