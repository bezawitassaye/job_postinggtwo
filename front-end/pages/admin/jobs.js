import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function AdminJobs() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await fetch('https://job-postinggtwoowow.onrender.com/api/jobs');
    const data = await res.json();
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Delete this job?')) return;

    try {
      await fetch(`https://job-postinggtwooow.onrender.com/api/jobs/${id}`, {
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
      <div className="max-w-5xl mx-auto px-4 py-35  min-h-screen">
        <h1 className="text-4xl font-bold text-sky-900 mb-8">Manage Jobs</h1>
        <Link href="/admin/new-job" className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-500 transition mb-6">
          Create New Job
        </Link>
        <ul className="space-y-6">
          {jobs.map(job => (
            <li key={job._id} className="bg-white border border-gray-200 rounded-lg p-6 shadow">
              <h2 className="text-2xl font-bold text-sky-800">{job.title}</h2>
              <p className="text-gray-700 mb-4">{job.company} - {job.location}</p>
              <div className="space-x-4">
                <Link
                  href={`/admin/edit-job/${job._id}`}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-400 transition"
                >
                  Edit
                </Link>
                <Link
                  href={`/admin/delete-job/${job._id}`}
                  className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-500 transition"
                >
                  Delete
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
