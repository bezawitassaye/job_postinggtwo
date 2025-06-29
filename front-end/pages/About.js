import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-16 bg-blue-50 min-h-screen">
        <h1 className="text-4xl font-bold text-sky-900 mb-6">About Us</h1>
        <p className="text-lg text-sky-800 leading-relaxed mb-6">
          Welcome to our Job Portal! We connect talented professionals with industry-leading companies.
          Our mission is to make job searching easier and more accessible for everyone.
        </p>
        <p className="text-lg text-sky-800 leading-relaxed mb-6">
          Founded in 2024, we focus on delivering up-to-date job listings across multiple sectors and
          empowering job seekers with tools like resume building, interview prep, and career advice.
        </p>
        <p className="text-lg text-sky-800 leading-relaxed">
          Join thousands of users who have found their dream jobs through our platform. We strive for
          excellence in service and user experience.
        </p>
      </div>
    </>
  );
}
