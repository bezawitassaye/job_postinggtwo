import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../../components/Navbar';

export default function EditJob() {
  const { query, push } = useRouter();
  const { id } = query;

  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (id) {
      fetch(`https://job-postinggtwooow.onrender.com/api/jobs/${id}`)
        .then(res => res.json())
        .then(data => {
          setTitle(data.title);
          setCompany(data.company);
          setLocation(data.location);
          setDescription(data.description);
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(`http://localhost:5000/api/jobs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, company, location, description }),
      });
      push('/admin/jobs');
    } catch (error) {
      console.error('Failed to update job:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-28 bg-blue-50 min-h-screen">
        <h1 className="text-4xl font-bold text-sky-900 mb-8 text-center">Edit Job</h1>
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
            className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-400 transition"
          >
            Update Job
          </button>
        </form>
      </div>
    </>
  );
}
