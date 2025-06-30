'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';

export default function NewJob() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [contract, setContract] = useState('');
  const [salary, setSalary] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobData = {
      title,
      company,
      location,
      description,
      type,
      contract,
      salary,
      logo: '/copmany.png',    // FORCE DEFAULT
    };

    try {
      await fetch('https://job-postinggtwoowow.onrender.com/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobData),
      });
      router.push('/admin/jobs');
    } catch (error) {
      console.error('Error posting job:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-20 min-h-screen">
        <h1 className="text-4xl font-bold text-sky-900 mb-8 text-center">Post a New Job</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6 border border-gray-200">
          <input
            className="border p-3 w-full rounded"
            placeholder="Job Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <input
            className="border p-3 w-full rounded"
            placeholder="Company Name"
            value={company}
            onChange={e => setCompany(e.target.value)}
            required
          />
          <input
            className="border p-3 w-full rounded"
            placeholder="Location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            required
          />
          <input
            className="border p-3 w-full rounded"
            placeholder="Job Type (e.g. Full-Time • Remote)"
            value={type}
            onChange={e => setType(e.target.value)}
          />
          <input
            className="border p-3 w-full rounded"
            placeholder="Contract (e.g. Permanent, Contract)"
            value={contract}
            onChange={e => setContract(e.target.value)}
          />
          <input
            className="border p-3 w-full rounded"
            placeholder="Salary (e.g. $100,000 - $120,000)"
            value={salary}
            onChange={e => setSalary(e.target.value)}
          />
          <textarea
            className="border p-3 w-full rounded"
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
