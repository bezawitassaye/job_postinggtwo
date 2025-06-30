'use client';

import Navbar from '../components/Navbar';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submission logic here
    alert(`Thank you, ${formData.name}! We received your message.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-16 bg-blue-50 min-h-screen flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT COLUMN - IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/interview.jpg"  // <-- Replace with your image path
            alt="Contact Us"
            width={500}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* RIGHT COLUMN - FORM */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-sky-900 mb-6">Contact Us</h1>
          <p className="text-lg text-sky-800 mb-8">
            Have questions or want to get in touch? Fill out the form below and we’ll get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-semibold text-sky-900">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-semibold text-sky-900">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-semibold text-sky-900">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-sky-900 text-white rounded-full px-10 py-3 hover:bg-sky-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
