import Image from 'next/image';
import Link from 'next/link';

export default function PopularJobs() {
  const jobs = [
    {
      id: 1,
      company: 'Tech Innovators',
      location: 'San Francisco, CA',
      logo: '/company-placeholder.png',
      title: 'Senior Frontend Developer',
      type: 'Full-Time • Remote',
      contract: 'Permanent',
      salary: '$120,000 - $150,000',
      description: 'Build responsive web applications with modern frameworks and ensure top-notch UX.',
      posted: '2 days ago',
    },
    {
      id: 2,
      company: 'Global Finance Ltd.',
      location: 'New York, NY',
      logo: '/company-placeholder.png',
      title: 'Financial Analyst',
      type: 'Full-Time • Hybrid',
      contract: 'Contract',
      salary: '$80,000 - $100,000',
      description: 'Analyze financial data, prepare reports, and support business strategy planning.',
      posted: '5 days ago',
    },
    {
      id: 3,
      company: 'Creative Agency',
      location: 'Remote',
      logo: '/company-placeholder.png',
      title: 'UX/UI Designer',
      type: 'Full-Time • Remote',
      contract: 'Permanent',
      salary: '$90,000 - $110,000',
      description: 'Design intuitive user experiences for web and mobile products in a collaborative team.',
      posted: '1 week ago',
    },
  ];

  return (
    <section className="bg-blue-50 mt-23 mb-23 py-16">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-sky-900 mb-2">Popular Jobs</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Global talent centers for specialized skills, or delivering managed <br></br> programs across focused industries
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-6 flex flex-col justify-between">
              
              {/* Top Row: Logo + Company + Location */}
              <div className="flex items-center mb-4">
                <Image src={job.logo} alt={job.company} width={50} height={50} className="rounded mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-sky-900">{job.company}</h3>
                  <p className="text-gray-500">{job.location}</p>
                </div>
              </div>

              {/* Job Title */}
              <h4 className="text-xl font-bold text-gray-400 mb-2">{job.title}</h4>

              {/* Type / Contract */}
              <p className="text-gray-400 mb-1">{job.type}</p>
              <p className="text-gray-400 mb-1">{job.contract}</p>

              {/* Salary */}
              <p className="text-green-400 font-semibold mb-2">{job.salary}</p>

              {/* Description */}
              <p className="text-gray-400 mb-4">{job.description}</p>

              {/* Bottom Row: Apply + Posted Time */}
              <div className="flex items-center justify-between mt-auto">
                <button className="bg-sky-900 text-white px-5 py-2 rounded-full hover:bg-sky-800 transition">
                  Apply
                </button>
                <span className="text-sm text-gray-400">{job.posted}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Browse More */}
        <div className="text-center mt-12">
          <Link href="/jobs">
            <span className="inline-block text-sky-900 border border-sky-900 px-6 py-3 rounded-full hover:bg-sky-900 hover:text-white transition cursor-pointer">
              Browse More Jobs
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
