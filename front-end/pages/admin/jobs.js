'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';

export default function AdminJobs() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await fetch('https://job-postinggtwoowow.onrender.com/api/jobs');
      if (!res.ok) throw new Error('Failed to fetch jobs');
      const data = await res.json();
      setJobs(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Delete this job?')) return;

    try {
      await fetch(`https://job-postinggtwoowow.onrender.com/api/jobs/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });
      fetchJobs();
    } catch (error) {
      console.error('Failed to delete job:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16 min-h-screen">
        <h1 className="text-4xl font-bold text-sky-900 mb-12 text-center">Manage Jobs</h1>

        <div className="text-center mb-12">
          <Link href="/admin/new-job">
            <a className="inline-block bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-500 transition">
              Create New Job
            </a>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map(job => (
            <div
              key={job._id}
              className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between"
            >
              {/* Top Row: Logo + Company + Location */}
              <div className="flex items-center mb-4">
                <Image
                  src={job.logo || '/company-placeholder.png'}
                  alt={job.company}
                  width={50}
                  height={50}
                  className="rounded mr-4 object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold text-sky-900">{job.company}</h3>
                  <p className="text-gray-500">{job.location}</p>
                </div>
              </div>

              {/* Job Title */}
              <h4 className="text-xl font-bold text-gray-700 mb-2">{job.title}</h4>

              {/* Type, Contract, Salary */}
              <p className="text-gray-500 mb-1">{job.type || 'Full-Time • Remote'}</p>
              <p className="text-gray-500 mb-1">{job.contract || 'Permanent'}</p>
              <p className="text-green-600 font-semibold mb-2">{job.salary || 'Negotiable'}</p>

              {/* Description */}
              <p className="text-gray-500 mb-4">{job.description}</p>

              {/* Bottom Row: Buttons */}
              <div className="flex flex-wrap gap-3 mt-auto">
                <Link href={`/jobs/${job._id}`}>
                  <a className="flex-1 bg-sky-900 text-white px-4 py-2 rounded-full hover:bg-sky-800 transition text-center">
                    Details
                  </a>
                </Link>
                <Link href={`/admin/edit-job/${job._id}`}>
                  <a className="flex-1 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-400 transition text-center">
                    Edit
                  </a>
                </Link>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="flex-1 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-500 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
