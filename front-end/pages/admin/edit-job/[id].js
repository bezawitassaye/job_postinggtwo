'use client';

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
  const [type, setType] = useState('');
  const [contract, setContract] = useState('');
  const [salary, setSalary] = useState('');
  const [logo, setLogo] = useState('');

  useEffect(() => {
    if (id) {
      fetch(`https://job-postinggtwoowow.onrender.com/api/jobs/${id}`)
        .then(res => res.json())
        .then(data => {
          setTitle(data.title);
          setCompany(data.company);
          setLocation(data.location);
          setDescription(data.description);
          setType(data.type || '');
          setContract(data.contract || '');
          setSalary(data.salary || '');
          setLogo(data.logo || '');
        });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(`https://job-postinggtwoowow.onrender.com/api/jobs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title, company, location, description,
          type, contract, salary, logo
        }),
      });
      push('/admin/jobs');
    } catch (error) {
      console.error('Failed to update job:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-20 min-h-screen">
        <h1 className="text-4xl font-bold text-sky-900 mb-8 text-center">Edit Job</h1>
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
            placeholder="Job Type"
            value={type}
            onChange={e => setType(e.target.value)}
          />
          <input
            className="border p-3 w-full rounded"
            placeholder="Contract Type"
            value={contract}
            onChange={e => setContract(e.target.value)}
          />
          <input
            className="border p-3 w-full rounded"
            placeholder="Salary"
            value={salary}
            onChange={e => setSalary(e.target.value)}
          />
          <input
            className="border p-3 w-full rounded"
            placeholder="Logo URL"
            value={logo}
            onChange={e => setLogo(e.target.value)}
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
            className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-400 transition"
          >
            Update Job
          </button>
        </form>
      </div>
    </>
  );
}
