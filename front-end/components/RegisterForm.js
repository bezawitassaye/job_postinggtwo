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
    <div className='text-black'>
      <h1 className="text-2xl mb-4">Register</h1>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      {success && <div className="text-green-500 mb-2">{success}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded placeholder:text-gray-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded placeholder:text-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded placeholder:text-gray-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}
