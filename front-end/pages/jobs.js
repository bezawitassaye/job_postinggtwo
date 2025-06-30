'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(`https://job-postinggtwooow.onrender.com/api/jobs`);
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error(err);
        setError('Failed to load jobs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [API_BASE_URL]);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-24 space-y-6 p-4">
        <h1 className="text-3xl font-bold mb-6 text-sky-900">Available Jobs</h1>

        {loading && <p>Loading jobs...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && jobs.length === 0 && (
          <p>No jobs found.</p>
        )}

        {!loading && !error && jobs.length > 0 && (
          <div className="space-y-4">
            {jobs.map(job => (
              <div key={job._id} className="border p-4 rounded shadow bg-white">
                <h2 className="text-xl font-semibold text-sky-800">{job.title}</h2>
                <p className="text-gray-700">{job.company}</p>
                <p className="text-gray-700">{job.location}</p>
                <div className="mt-2 space-x-4">
                  <Link
                    href={`/jobs/${job._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View Details
                  </Link>
                  <Link
                    href={`/apply/${job._id}`}
                    className="text-green-600 hover:underline"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
