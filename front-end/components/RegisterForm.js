// components/RegisterForm.jsx
'use client';

import { useState } from 'react';

export default function RegisterForm({ onSuccess }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await fetch('https://job-postinggtwoowow.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess('Registration successful. You can now log in.');
        setTimeout(() => {
          if (onSuccess) onSuccess();
        }, 2000);
      } else {
        setError(data.error || 'Registration failed');
      }
    } catch {
      setError('Network error');
    }
  };

  return (
    <div className="bg-white  max-w-md w-full p-8 ">
        <h1 className="text-3xl font-bold text-center text-sky-900 mb-6">Sign up</h1>
       {error && <div className="text-red-500 mb-2">{error}</div>}
      {success && <div className="text-green-500 mb-2">{success}</div>}
      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <label className="block text-gray-700 mb-1">Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 placeholder-gray-400"
        />
        <label className="block text-gray-700 mb-1">Email</label>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
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
          Register
        </button>
      </form>
    </div>
  );
}
