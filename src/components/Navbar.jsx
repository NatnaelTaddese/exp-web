import { useState, useEffect } from "react";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Media", path: "/media" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#000000d2] shadow-md backdrop-blur-lg py-2 text-amber-50 border-b-4 border-[#e0e0e01e]"
          : "bg-[#e6e8eaf2] backdrop-blur-sm py-4 "
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold ">
              Bahta <i>Express</i>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                to={link.path}
                key={link.name}
                className="font-medium smooth-link"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Telegram Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://t.me/bahtaexpress"
              target="_blank"
              rel="noopener noreferrer"
              className={` px-4 py-2 flex items-center justify-center font-medium border-2 border-[#fff0]  transition-colors ${
                isScrolled
                  ? "text-amber-50 hover:border-amber-50"
                  : "text-black hover:border-black"
              } `}
            >
              <FaTelegram className="mr-2" />
              Get Support
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden  focus:outline-none ${
              isScrolled ? "text-amber-50" : "text-gray-800"
            }`}
            onClick={toggleMenu}
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 0 },
                closed: { rotate: 0 },
              }}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white overflow-hidden mt-4 mb-[-1rem]"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="container mx-auto px-4 py-3">
              <motion.div className="flex flex-col space-y-4 text-center">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    className="text-gray-800 py-2 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                    variants={itemVariants}
                  >
                    <Link to={link.path} key={link.name}>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

                <motion.a
                  href="tel:+123456789"
                  className="text-black px-4 py-2 flex items-center justify-center font-medium border-2 border-black transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  variants={itemVariants}
                >
                  <FaTelegram className="mr-2" />
                  Get Support
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
