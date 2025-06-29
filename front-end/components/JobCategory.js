// components/JobCategory.js
import { 
  FaCode, FaStethoscope, FaBusinessTime, FaChalkboardTeacher, FaTools,
  FaTruck, FaPaintBrush, FaBuilding, FaChartLine, FaHammer, 
  FaUserSecret, FaLaptopCode, FaHospital, FaUniversity, 
  FaStore, FaBriefcase
} from 'react-icons/fa';


export default function JobCategory() {
  const categories = [
    { icon: <FaCode className="text-sky-900 text-4xl" />, name: "Technology", openings: 120 },
    { icon: <FaStethoscope className="text-sky-900 text-4xl" />, name: "Healthcare", openings: 85 },
    { icon: <FaBusinessTime className="text-sky-900 text-4xl" />, name: "Business & Finance", openings: 95 },
    { icon: <FaChalkboardTeacher className="text-sky-900 text-4xl" />, name: "Education", openings: 70 },
    { icon: <FaTools className="text-sky-900 text-4xl" />, name: "Engineering", openings: 65 },
    { icon: <FaTruck className="text-sky-900 text-4xl" />, name: "Logistics", openings: 50 },
    { icon: <FaPaintBrush className="text-sky-900 text-4xl" />, name: "Design & Arts", openings: 40 },
    { icon: <FaBuilding className="text-sky-900 text-4xl" />, name: "Real Estate", openings: 55 },
    { icon: <FaChartLine className="text-sky-900 text-4xl" />, name: "Marketing", openings: 90 },
    { icon: <FaHammer className="text-sky-900 text-4xl" />, name: "Construction", openings: 45 },
    { icon: <FaUserSecret className="text-sky-900 text-4xl" />, name: "Security", openings: 35 },
    { icon: <FaLaptopCode className="text-sky-900 text-4xl" />, name: "IT Support", openings: 75 },
    { icon: <FaHospital className="text-sky-900 text-4xl" />, name: "Pharmaceutical", openings: 30 },
    { icon: <FaUniversity className="text-sky-900 text-4xl" />, name: "Research", openings: 25 },
  ];

  return (
    <section className="bg-white max-w-7xl mx-auto px-4 py-12">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-sky-900">
          Job Category
        </h2>
        <p className="text-gray-400 text-lg mt-2 max-w-2xl mx-auto">
          Global talent centers for specialized skills or delivering managed programs across focused industries
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300"
          >
            {category.icon}
            <h3 className="mt-4 text-xl font-semibold text-sky-900">{category.name}</h3>
            <p className="text-gray-500 mt-1">({category.openings} openings)</p>
          </div>
        ))}
      </div>
    </section>
  );
}


