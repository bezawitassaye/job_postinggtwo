import { useEffect, useState } from 'react';
import { useAuth } from '../components/AuthContext';
import Navbar from '../components/Navbar';

export default function AppliedJobsPage() {
  const { user } = useAuth();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/api/applications/${user.id}`)
        .then(res => res.json())
        .then(setApplications);
    }
  }, [user]);

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl mb-4">Your Applied Jobs</h1>
        {applications.length === 0 ? (
          <p>No applications found.</p>
        ) : (
          <ul className="space-y-2">
            {applications.map(app => (
              <li key={app._id} className="border p-2 rounded">
                Applied to Job ID: {app.jobId} on {new Date(app.createdAt).toLocaleDateString()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
