import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';

export default function NewJob() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch('https://job-postinggtwooow.onrender.com/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, company, location, description }),
      });

      router.push('/admin/jobs');
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-35  min-h-screen">
        <h1 className="text-4xl font-bold text-sky-900 mb-8 text-center">Post a New Job</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6 border border-gray-200">
          <input
            className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
            placeholder="Job Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <input
            className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
            placeholder="Company Name"
            value={company}
            onChange={e => setCompany(e.target.value)}
            required
          />
          <input
            className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
            placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            required
          />
          <textarea
            className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-sky-600"
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={5}
            required
          />
          <button
            type="submit"
            className="bg-sky-900 text-white px-6 py-3 rounded-full hover:bg-sky-800 transition"
          >
            Create Job
          </button>
        </form>
      </div>
    </>
  );
}
