import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/components/AuthContext';

export default function AdminApplications() {
  const { user, token } = useAuth();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    if (user?.isAdmin) {
      fetch('http://localhost:5000/api/applications', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(setApplications);
    }
  }, [user]);

  if (!user?.isAdmin) return <p>Unauthorized</p>;

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Applications</h1>
        <ul className="space-y-4">
          {applications.map(app => (
            <li key={app._id} className="border p-4 rounded shadow">
              <p><strong>User:</strong> {app.user?.email}</p>
              <p><strong>Job:</strong> {app.job?.title}</p>
              <p><strong>Message:</strong> {app.message}</p>
              <a
                href={`http://localhost:5000/api/applications/${app._id}/resume`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Download Resume
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
