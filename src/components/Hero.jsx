import { motion } from "framer-motion";
import Section from "./Section";
import { FaArrowRight, FaPhone, FaPhoneAlt } from "react-icons/fa";

import Background from "../assets/images/main-background.png";

export default function Hero() {
  return (
    <Section
      className="relative min-h-[85vh] flex items-center"
      background={Background}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center items-center h-full">
        <div className="max-w-3xl">
          <div className="text-center flex flex-col justify-center items-center">
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 mt-42 sm:mt-0"
            >
              LOGISTICS SOLUTIONS FROM CHINA TO ETHIOPIA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl"
            >
              Experience premium transportation across Ethiopia with Bahta
              Express. Safe, and always on schedule.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="/schedule"
                className="bg-[#e6e8eaf2] hover:bg-[#000000d2] hover:text-amber-50 border-4 border-[#e0e0e01e] text-black font-medium py-3 px-6 inline-flex items-center justify-center transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
                <FaArrowRight className="ml-2" />
              </motion.a>

              <motion.a
                href="/services"
                className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-medium py-3 px-6 inline-flex items-center justify-center transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Talk to an expert
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="tel:+251911282956"
                className="mt-3 text-amber-50 opacity-70 font-light text-sm py-3 px-6 inline-flex items-center justify-center transition-colors duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhoneAlt className="mr-2" />

                <span className="smooth-link">+251-911-282-956</span>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Optional floating features cards */}
    </Section>
  );
}
