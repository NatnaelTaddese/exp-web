import { motion } from "framer-motion";
import { FaTruck, FaShieldAlt, FaGlobe, FaUserClock } from "react-icons/fa";

import InventoryImage from "../../assets/images/inventory-01.jpeg";

export default function Features() {
  return (
    <section className="bg-[#030302] py-16 md:py-24">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-xl text-3xl md:text-4xl font-bold text-white lg:text-5xl"
        >
          Premium logistics solutions across Ethiopia and beyond.
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative space-y-4"
          >
            <p className="text-gray-400">
              Bahta Express provides end-to-end logistics solutions from China
              to Ethiopia.{" "}
              <span className="text-white font-bold">
                Our comprehensive services
              </span>{" "}
              ensure your cargo arrives safely and on schedule.
            </p>
            <p className="text-gray-400">
              With decades of experience in international shipping and local
              distribution, we've built a reputation for reliability,
              transparency, and exceptional customer service.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FaTruck className="h-5 w-5 text-white" />
                  <h3 className="text-sm font-medium text-white">
                    Fast Delivery
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Optimized routes and efficient processes ensure your shipments
                  arrive on time, every time.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FaShieldAlt className="h-5 w-5 text-white" />
                  <h3 className="text-sm font-medium text-white">
                    Secure Transport
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">
                  Advanced tracking and security measures protect your valuable
                  cargo throughout its journey.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative mt-6 sm:mt-0"
          >
            <div className="aspect-[4/3] relative rounded-sm border-2 border-[#e0e0e01e] overflow-hidden">
              <img
                src={InventoryImage}
                alt="Bahta Express Logistics Services"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <FaGlobe className="h-5 w-5 text-white" />
                      <h3 className="text-sm font-medium text-white">
                        Global Network
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Strong partnerships in China and throughout Ethiopia.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <FaUserClock className="h-5 w-5 text-white" />
                      <h3 className="text-sm font-medium text-white">
                        24/7 Support
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Our team is always available to address your concerns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
