import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';


export default function JobDetail() {
  const { query } = useRouter();
  const [job, setJob] = useState(null);

  useEffect(() => {
    if (query.id) {
      fetch(`http://localhost:5000/api/jobs/${query.id}`)
        .then(res => res.json())
        .then(setJob);
    }
  }, [query.id]);

  if (!job) return <p>Loading...</p>;

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
