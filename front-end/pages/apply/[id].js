import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from '../../components/AuthContext';

import Navbar from '../../components/Navbar';

export default function ApplyPage() {
  const { query } = useRouter();
  const { token } = useAuth();

  const [message, setMessage] = useState('');
  const [resume, setResume] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resume) return alert('Please select a resume PDF!');

    const formData = new FormData();
    formData.append('resume', resume);
    formData.append('message', message);
    formData.append('jobId', query.id);

    await fetch('https://job-postinggtwooow.onrender.com/api/applications', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    alert('Application submitted!');
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-xl mx-auto p-6">
        <h1 className="text-2xl mb-4">Apply for Job</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            placeholder="Message to employer"
            className="w-full border p-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setResume(e.target.files[0])}
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
      </div>
    </div>
  );
}
