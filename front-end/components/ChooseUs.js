// components/ChooseUs.js

import { FaCheck } from 'react-icons/fa';
import Image from 'next/image';

export default function ChooseUs() {
  return (
    <section className="bg-white max-w-7xl mx-auto px-4 py-12">
      {/* Top Row */}
      <div className="border-b border-gray-300 pb-4 mb-8">
        <h2 className="text-3xl md:text-7xl  text-sky-800">
          Why should you <br></br> choose us ?
        </h2>
      </div>

      {/* Second Row */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Column 1: Features List */}
        <div className="space-y-4">

          <ul className="space-y-2 text-sky-900 text-lg">
            <li className="flex items-start ">
              <FaCheck className="text-sky-900 mt-1 mr-2" />
              <span>No Spam</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-sky-900 mt-1 mr-2" />
              <span>Premium Advantage</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-sky-900 mt-1 mr-2" />
              <span>Live CV Builder</span>
            </li>
            <li className="flex items-start">
              <FaCheck className="text-sky-900 mt-1 mr-2" />
              <span>24/7 Support Team</span>
            </li>
          </ul>
        </div>

        {/* Column 2: Description */}
        <div className="text-gray-500 text-lg">
          
          <p>
            We deliver exceptional quality and ensure you get the best opportunities without hassle.
            Our platform is designed to be user-friendly, secure, and effective in connecting you
            with the right employers.
          </p>
        </div>

        {/* Column 3: Button */}
        <div className="flex md:justify-end items-start">
          <button className=" border-2 border-gray-400 text-sky-800 px-4 py-4 hover:text-white text-lg rounded-full hover:bg-sky-800">
            Know More About Us
          </button>
        </div>
      </div>

      {/* Third Row: Oval Image */}
   <div className="flex justify-center pt-12">
  <div className="overflow-hidden rounded-full">
    <Image
      src="/interview.jpg"  // Put your image in /public folder and update the path
      alt="Choose Us Illustration"
      width={700}  // Increase the width to make it wider
      height={200}  // Decrease the height to make it more oval
      className="object-cover"
    />
  </div>
</div>

 

    </section>
  );
}
