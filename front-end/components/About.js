import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
export default function About() {
  return (
    <>
      <Navbar />

      {/* ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16 mt-100 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold text-sky-900 mb-4">Crafting Excellence Together</h2>
          <p className="text-gray-700">
            At our company, we believe in delivering exceptional solutions through collaboration,
            innovation, and dedication. Our team is committed to turning your vision into reality
            with precision and care.
          </p>
        </div>
        <div className="flex justify-center mt-20">
          <Image
            src="/Screenshot from 2025-06-29 15-23-35.png" 
            alt="About Us"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      {/* SPACE */}
      <div className="py-8" />

      {/* STATS SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-4xl font-bold text-sky-800">150+</h3>
          <p className="text-gray-600">Complete Projects</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-sky-800">100+</h3>
          <p className="text-gray-600">Team Members</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-sky-800">200+</h3>
          <p className="text-gray-600">Reviews</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-sky-800">20</h3>
          <p className="text-gray-600">Awards</p>
        </div>
      </section>

      {/* SPACE */}
      <div className="py-8" />

      {/* OUR MISSION SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center">
          <Image
            src="/interview.jpg"
            alt="Our Mission"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-sky-900 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            We strive to empower businesses with cutting-edge solutions that drive growth and
            success. Our mission is to deliver value through quality and innovation.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              High-quality deliverables
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              Customer-centric approach
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              Continuous improvement
            </li>
          </ul>
        </div>
      </section>

      {/* SPACE */}
      <div className="py-8" />

      {/* OUR VISION SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-sky-900 mb-4">Our Vision</h2>
          <p className="text-gray-700 mb-4">
            We envision a world where technology bridges gaps and creates opportunities for all.
            Our vision guides us to lead with integrity, creativity, and passion.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              Sustainable growth
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              Innovation-driven solutions
            </li>
            <li className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              Global impact
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Image
            src="/interview.jpg"
            alt="Our Vision"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>
      <Footer/>
    </>
  );
}
