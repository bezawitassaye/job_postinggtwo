import { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import { useAuth } from '../../components/AuthContext';

export default function Login() {
  const router = useRouter();
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
        router.push('/jobs');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch {
      setError('Network error');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
        <h1 className="text-2xl mb-4">Login</h1>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
