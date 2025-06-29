import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';

export default function JobDetail() {
  const { query } = useRouter();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query.id) {
      setLoading(true);
      setError(null);
      
      fetch(`http://job-postinggtwoowow.onrender.com/api/jobs/${query.id}`)
        .then(res => {
          if (!res.ok) {
            throw new Error(`Error fetching job: ${res.statusText}`);
          }
          return res.json();
        })
        .then((data) => {
          setJob(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
          setError(error.message);
          setLoading(false);
        });
    }
  }, [query.id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!job) return <p>Job not found</p>;

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl">{job.title}</h1>
        <p className="text-lg">{job.company} - {job.location}</p>
        <p className="mt-4">{job.description}</p>
      </div>
    </div>
  );
}
