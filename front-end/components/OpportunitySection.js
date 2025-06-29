import Image from 'next/image';
import { FaUsers, FaStar, FaChalkboardTeacher, FaComments } from 'react-icons/fa';

export default function OpportunitySection() {
  const features = [
    {
      icon: <FaUsers className="text-sky-900 text-6xl" />,
      title: "Inclusive Workplace",
      description: "We foster a culture where everyone feels welcomed, valued, and empowered to do their best work.",
    },
    {
      icon: <FaStar className="text-yellow-500 text-6xl" />,
      title: "Best-in-Class Applications",
      description: "Access top-tier tools and platforms to streamline your job search and application process.",
    },
    {
      icon: <FaChalkboardTeacher className="text-purple-900 text-6xl" />,
      title: "Job Search Workshops",
      description: "Learn from experts with practical workshops to improve your job search strategy.",
    },
    {
      icon: <FaComments className="text-blue-600 text-6xl" />,
      title: "Interview Preparation",
      description: "Gain confidence with tailored coaching and prep for real-world interviews.",
    },
  ];

  return (
    <section className="bg-white max-w-7xl mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Column: Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/Screenshot from 2025-06-29 15-23-35.png"
            alt="Opportunity Illustration"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column: Text and Grid */}
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-sky-900">
            A HUGE opportunity change your life and career
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className=" rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
              >
                {feature.icon}
                <h3 className="mt-4 text-xl font-semibold text-sky-900">{feature.title}</h3>
                <p className="text-gray-500 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

