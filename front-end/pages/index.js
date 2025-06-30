import Image from 'next/image';
import Company from '../components/Companys';  // Correct path based on your file structure
import ChooseUs from '../components/ChooseUs';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import JobCategory from '../components/JobCategory';
import OpportunitySection from '../components/OpportunitySection';
import PopularJobs from '../components/PopularJobs';
import Testimonials from '../components/Testimonials';
import ApplyProcess from '../components/ApplyProcess';


export default function Home() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', query);
  };



  return (
    <>
      <Navbar />
     
      <div className="pt-20 bg-blue-50 pt-45"> 
        <section className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row md:gap-20 items-center justify-between">
          
          {/* Left Column - Text */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-7xl font-bold text-sky-900">
              Welcome to Our Job Portal
            </h1>
            <p className="text-sky-800 text-2xl">
              Find your dream job, apply easily, and take the next step in your career with us.
              <span> And Explore the 10k+ skilled jobs</span>
              <br />
              <span className='text-gray-500 text-lg'>
                Find all recent job circulars available in the United
                States and around the globe in one place with an easy job application feature
              </span>
            </p>

            <div className="max-w-xl mt-8">
              <div className="flex items-center space-x-2">
                <div className="relative flex-grow">
                  <FaSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Job keyword"
                    className="w-full pl-10 pr-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600"
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="text-lg bg-sky-900 text-white px-10 py-3 rounded-full hover:bg-sky-800"
                >
                  Search
                </button>
              </div>
            </div>

            <button className="text-lg bg-sky-900 text-white px-6 py-3 rounded-full hover:bg-sky-800 mt-4">
              Get Started
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <Image
              src="/Screenshot from 2025-06-29 13-46-46.png"
              alt="Job Portal Illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>
      <Company/>
      <ChooseUs/>
      <JobCategory/>
      <OpportunitySection/>
      <PopularJobs/>
      <Testimonials/>
      <ApplyProcess/>
    


    </>
  );
}
