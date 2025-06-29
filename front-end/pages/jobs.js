import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/jobs')
      .then(res => res.json())
      .then(setJobs)
      .catch(console.error);
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-54 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>
        {jobs.length === 0 ? (
          <p>No jobs found.</p>
        ) : (
          jobs.map(job => (
            <div key={job._id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <div className="mt-2 space-x-4">
                <Link href={`/jobs/${job._id}`} className="text-blue-600 hover:underline">
                  View Details
                </Link>
                <Link href={`/apply/${job._id}`} className="text-green-600 hover:underline">
                  Apply
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
