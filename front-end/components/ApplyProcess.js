import { FaUserPlus, FaUpload, FaBriefcase } from 'react-icons/fa';
import Link from 'next/link';

export default function ApplyProcess() {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus size={50} className="text-sky-900" />,
      title: "Create Account",
      description: "Sign up to unlock thousands of job opportunities and manage your applications easily.",
      linkText: "Register",
      linkHref: "/auth/register",
    },
    {
      id: 2,
      icon: <FaUpload size={50} className="text-sky-900" />,
      title: "Upload Your Resume",
      description: "Showcase your skills and experience by uploading a professional resume or CV.",
      linkText: "Upload CV",
      linkHref: "/upload",
    },
    {
      id: 3,
      icon: <FaBriefcase size={50} className="text-sky-900" />,
      title: "Apply Your Dream Job",
      description: "Browse through our listings and apply to positions that fit your career goals.",
      linkText: "Apply Now",
      linkHref: "/jobs",
    },
  ];

  return (
    <section className="bg-white-50 mt-23 mb-23 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-sky-900 mb-2">
            A Simple Process to Apply Job
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="  rounded-lg p-6 text-center shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-sky-900">
                {step.title}
              </h3>
              <p className="text-gray-400 mb-4">{step.description}</p>
              <Link
                href={step.linkHref}
                className="inline-block text-sky-900  px-6 py-2 rounded-full  transition-colors"
              >
                
                {step.linkText}
                <hr className="border-t border-blue-300  " />


              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
