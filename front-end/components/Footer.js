import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-sky-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 border-b border-gray-600">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">JobPortal</h2>
          <p className="text-gray-300">
            Your trusted platform to find your dream job and hire top talent.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/about" className="hover:text-white">About</Link>
            </li>
            <li>
              <Link href="/jobs" className="hover:text-white">Jobs</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-white">Blogs</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-300">Email: support@jobportal.com</p>
          <p className="text-gray-300">Phone: +1 234 567 890</p>
          <p className="text-gray-300">Address: 123 Main St, City, Country</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-sky-950 text-gray-400 text-center py-4">
        &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
      </div>
    </footer>
  );
}
