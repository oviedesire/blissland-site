import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* School Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Blissland Academy</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 School Lane</p>
              <p>City, State 12345</p>
            </address>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="text-gray-300 space-y-2">
              <p>Phone: <a href="tel:+1234567890" className="hover:text-white">(123) 456-7890</a></p>
              <p>Email: <a href="mailto:info@newlifeschool.edu" className="hover:text-white">info@newlifeschool.edu</a></p>
              <p>Office Hours: 8:00 AM - 4:00 PM</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/admissions" className="hover:text-white">Admissions</Link></li>
              <li><Link href="/academics" className="hover:text-white">Academics</Link></li>
              <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <p className="text-gray-300 mb-4">Follow Us</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 12a11 11 0 11-10.1-11v2.5h3V9.3h-3v2a3 3 0 013-3v2.5h-2a5 5 0 015-5v2.5" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75-2.35 8-7 8-7" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="currentColor" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Blissland Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
