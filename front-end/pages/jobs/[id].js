'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function JobDetails() {
  const { query } = useRouter();
  const { id } = query;
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchJob = async () => {
        try {
          const res = await fetch(`https://job-postinggtwoowow.onrender.com/api/jobs/${id}`);
          if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
          const data = await res.json();
          setJob(data);
        } catch (err) {
          console.error(err);
          setError('Failed to load job. Please try again later.');
        } finally {
          setLoading(false);
        }
      };
      fetchJob();
    }
  }, [id]);

  return (
    <>
      <Navbar />
      <section className="bg-blue-50 pt-28 pb-16 min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          {loading && <p className="text-center text-gray-500">Loading job...</p>}
          {error && <p className="text-center text-red-600">{error}</p>}
          {!loading && !error && !job && (
            <p className="text-center text-gray-500">Job not found.</p>
          )}

          {!loading && !error && job && (
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-8 space-y-6">
              <div className="flex items-center mb-6">
                <Image
                  src={job.logo || '/copmany.png'}
                  alt={job.company}
                  width={80}
                  height={80}
                  className="rounded mr-6"
                />
                <div>
                  <h2 className="text-3xl font-bold text-sky-900">{job.company}</h2>
                  <p className="text-gray-500">{job.location}</p>
                </div>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{job.title}</h1>
              <p className="text-green-500 text-xl font-semibold mb-4">{job.salary}</p>
              
              <div className="space-y-2">
                <p className="text-gray-600"><span className="font-semibold">Type:</span> {job.type}</p>
                <p className="text-gray-600"><span className="font-semibold">Contract:</span> {job.contract}</p>
                <p className="text-gray-600"><span className="font-semibold">Posted:</span> {job.posted || 'Recently Posted'}</p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-2xl font-bold text-sky-900 mb-2">Job Description</h3>
                <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
              </div>

              <div className="flex space-x-4 mt-8">
                <Link
                  href="/jobs"
                  className="inline-block border border-sky-900 text-sky-900 px-5 py-2 rounded-full hover:bg-sky-900 hover:text-white transition"
                >
                  Back to Jobs
                </Link>
                <Link
                  href={`/apply/${job._id}`}
                  className="inline-block bg-sky-900 text-white px-5 py-2 rounded-full hover:bg-sky-800 transition"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
