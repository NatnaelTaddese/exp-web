import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#030302] text-white pt-12 pb-8 w-dvw border-2 border-[#e0e0e01e]">
      <div className="container mx-auto px-4">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center sm:text-left">
              Bahta Express
            </h3>
            <p className="text-gray-400 mb-4 text-center sm:text-left">
              Delivering quality transportation services since 2010. Reliable,
              safe, and comfortable.
            </p>
            <div className="flex space-x-4 sm:justify-start justify-center">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center sm:text-left">
              Contact Us
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center sm:justify-start justify-center">
                <FiPhone className="mr-2" /> <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center sm:justify-start justify-center">
                <FiMail className="mr-2" /> <span>info@bahtaexpress.com</span>
              </li>
              <li className="flex items-start sm:justify-start justify-center">
                <FiMapPin className="mr-2 mt-1" />
                <span>
                  Customer Service Hours:
                  <br />
                  Monday-Friday: 8am - 6pm
                  <br />
                  Saturday: 9am - 3pm
                </span>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center sm:text-left">
              Our Locations
            </h3>
            <div className="space-y-4 text-gray-400">
              <div>
                <h4 className="font-medium text-white text-center sm:text-left">
                  Main Terminal
                </h4>
                <p className="text-center sm:text-left">
                  Merkato, Military Tera
                  <br />
                  Addis Ababa, Ethiopia
                  <br />
                  +251-911-258-790 <br />
                  +251-911-282-956
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white text-wrap text-center sm:text-left">
                  Branch Office
                </h4>
                <p className="text-center sm:text-left">
                  Jiantianmao, 408-7,
                  <br />
                  In front of Futian Market
                  <br />
                  Yiwu City, Zhejiang Province,
                  <br />
                  PRC (People Republic of China)
                  <br />
                  +86-132-3657-3839 <em>(Wechat Only)</em>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-center sm:text-left">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400 mb-6 text-center sm:text-left">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/schedule"
                  className="hover:text-white transition-colors"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-2 text-center sm:text-left">
              Newsletter
            </h3>
            <div className="flex sm:justify-start justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className=" bg-[#1a1a1a] border-2 border-[#e0e0e01e] text-white px-2 py-3 focus:outline-none focus:border-[#e6e8ea50]"
              />
              <button className="bg-[#e6e8eaf2] hover:bg-[#000000d2] hover:text-amber-50 border-4 border-[#e0e0e01e] text-black font-medium py-3 px-3 inline-flex items-center justify-center transition-colors duration-300 disabled:opacity-70">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Bahta Express. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a
                href="/privacy"
                className="hover:text-gray-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-gray-400 transition-colors"
              >
                Terms of Service
              </a>
              <a href="/faq" className="hover:text-gray-400 transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
