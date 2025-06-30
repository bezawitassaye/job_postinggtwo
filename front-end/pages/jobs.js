'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('https://job-postinggtwoowow.onrender.com/api/jobs');
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
  }, []);

  return (
    <>
      <Navbar />

      <section className="bg-blue-50 pt-28 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4">

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-sky-900 mb-2">Available Jobs</h1>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Explore our curated listings tailored for your career growth.
            </p>
          </div>

          {/* Loading / Error */}
          {loading && <p className="text-center text-gray-500">Loading jobs...</p>}
          {error && <p className="text-center text-red-600">{error}</p>}
          {!loading && !error && jobs.length === 0 && (
            <p className="text-center text-gray-500">No jobs found.</p>
          )}

          {/* Job Cards */}
          {!loading && !error && jobs.length > 0 && (
            <div className="grid gap-8 md:grid-cols-3">
              {jobs.map(job => (
                <div
                  key={job._id}
                  className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between"
                >
                  {/* Top Row: Logo + Company + Location */}
                  <div className="flex items-center mb-4">
                    <Image
                      src={job.logo || '/copmany.png'}
                      alt={job.company}
                      width={50}
                      height={50}
                      className="rounded mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-sky-900">{job.company}</h3>
                      <p className="text-gray-500">{job.location}</p>
                    </div>
                  </div>

                  {/* Job Title */}
                  <h4 className="text-xl font-bold text-gray-400 mb-2">{job.title}</h4>

                  {/* Type / Contract */}
                  <p className="text-gray-400 mb-1">{job.type}</p>
                  <p className="text-gray-400 mb-1">{job.contract}</p>

                  {/* Salary */}
                  <p className="text-green-400 font-semibold mb-2">{job.salary}</p>

                  {/* Description */}
                  <p className="text-gray-400 mb-4">{job.description}</p>

                  {/* Bottom Row: Apply + Posted Time */}
                  <div className="flex items-center justify-between mt-auto">
                    <Link
                      href={`/apply/${job._id}`}
                      className="bg-sky-900 text-white px-5 py-2 rounded-full hover:bg-sky-800 transition"
                    >
                      Apply
                    </Link>
                    <span className="text-sm text-gray-400">{job.posted || 'Recently Posted'}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Browse More */}
          <div className="text-center mt-12">
            <Link href="/jobs">
              <span className="inline-block text-sky-900 border border-sky-900 px-6 py-3 rounded-full hover:bg-sky-900 hover:text-white transition cursor-pointer">
                Refresh Jobs
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
