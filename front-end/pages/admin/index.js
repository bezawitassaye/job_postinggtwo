import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <>
      <Navbar />
      <div className="pt-28 bg-blue-50 min-h-screen px-4">
        <div className="max-w-5xl mx-auto py-12 border-b border-gray-300">
          <h1 className="text-4xl font-bold text-sky-900 mb-6">Admin Dashboard</h1>
          <p className="text-lg text-sky-800 mb-8">
            Welcome to the admin area. Manage jobs and view applications below.
          </p>
          <div className="space-y-4">
            <Link href="/admin/jobs">
              <span className="inline-block bg-sky-900 text-white px-6 py-3 rounded-full hover:bg-sky-800 cursor-pointer">
                Manage Jobs
              </span>
            </Link>
            <Link href="/applications">
              <span className="inline-block bg-sky-900 text-white px-6 py-3 rounded-full hover:bg-sky-800 cursor-pointer">
                View Applications
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
