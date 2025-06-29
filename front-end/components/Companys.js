import { FaGoogle, FaMicrosoft, FaAmazon, FaFacebookF, FaApple } from 'react-icons/fa';

export default function Company() {
  return (
    <section className="bg-white border-b border-gray-300 mt-20 mb-20">
      <div className="max-w-7xl mx-auto  px-4 py-12 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Text with Tall Right Border */}
        <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-10 md:border-r-4 md:border-gray-300 flex justify-center md:justify-start">
          <p className="text-2xl md:text-4xl text-sky-800 font-regular text-center md:text-left">
            We worked with <br></br> <span >industry leaders</span>
          </p>
        </div>

        {/* Company Logos */}
        <div className="flex flex-wrap justify-center md:justify-start gap-10 md:pl-10">
          <div className="flex flex-col items-center text-gray-600">
            <FaGoogle size={50} />
            <span className="mt-2">Google</span>
          </div>
          <div className="flex flex-col items-center text-gray-600">
            <FaMicrosoft size={50} />
            <span className="mt-2">Microsoft</span>
          </div>
          <div className="flex flex-col items-center text-gray-600">
            <FaAmazon size={50} />
            <span className="mt-2">Amazon</span>
          </div>
          <div className="flex flex-col items-center text-gray-600">
            <FaFacebookF size={50} />
            <span className="mt-2">Facebook</span>
          </div>
           <div className="flex flex-col items-center text-gray-600">
            <FaApple size={50} />
            <span className="mt-2">Apple</span>
          </div>
        </div>
      </div>
    </section>
  );
}
