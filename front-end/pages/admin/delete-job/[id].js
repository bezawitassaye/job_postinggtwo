'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../../components/Navbar';

export default function DeleteJob() {
  const { query, push } = useRouter();
  const { id } = query;

  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

  // Fetch job details for confirmation
  useEffect(() => {
    if (id) {
      fetch(`https://job-postinggtwoowow.onrender.com/api/jobs/${id}`)
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch job details');
          return res.json();
        })
        .then(setJob)
        .catch(err => {
          console.error(err);
          setError('Unable to load job details.');
        });
    }
  }, [id]);

  // Handle deletion
  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this job?')) return;

    try {
      await fetch(`https://job-postinggtwoowow.onrender.com/api/jobs/${id}`, {
        method: 'DELETE',
      });
      push('/admin/jobs');
    } catch (error) {
      console.error('Failed to delete job:', error);
      setError('Failed to delete job. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-28 bg-blue-50 min-h-screen">
        <h1 className="text-4xl font-bold text-red-700 mb-8 text-center">Delete Job</h1>

        {error && (
          <p className="text-red-600 mb-6 text-center">{error}</p>
        )}

        {!job && !error && (
          <p className="text-center text-gray-600">Loading job details...</p>
        )}

        {job && (
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-sky-800">{job.title}</h2>
            <p className="text-gray-700">{job.company} - {job.location}</p>
            <p className="text-gray-600 mt-4">{job.description}</p>

            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-500 transition w-full"
            >
              Confirm Delete
            </button>
          </div>
        )}
      </div>
    </>
  );
}
