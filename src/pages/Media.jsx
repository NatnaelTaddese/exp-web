import { useState } from "react";
import { motion } from "framer-motion";
import PostCard from "../components/ui/PostCard";

import BG from "../assets/images/Container.jpeg";
import posts from "../constants/posts";

export default function Media() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen pt-48 pb-16 bg-[#d2d4d6]">
      {" "}
      {/* Changed background to match contact */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              {" "}
              {/* Changed text color */}
              Read our latest Posts
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              {" "}
              {/* Changed text color */}
              Stay updated with the latest news and insights about logistics and
              shipping between China and Ethiopia.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <PostCard
              title="Shipping Container Best Practices"
              description="Learn about the best practices for shipping containers from China to Ethiopia, including packing, documentation, and customs clearance procedures."
              image={BG}
              author={{ name: "John Doe" }}
              date="April 1, 2025"
              tags={["Shipping", "Containers", "Best Practices"]}
              slug="shipping-container-best-practices"
              index={0}
            />

            {/* Example of using minimal props with defaults */}
            <PostCard
              title="Import Regulations Update 2025"
              description="New import regulations have been implemented that affect shipments from China to Ethiopia. Read about the key changes and how they might impact your business."
              image={BG}
              index={1}
            />

            <PostCard
              title="Air Freight vs Sea Freight: Pros and Cons"
              description="Comparing the advantages and disadvantages of air freight and sea freight options for shipping goods from China to Ethiopia."
              image={BG}
              author={{ name: "Jane Smith" }}
              date="March 25, 2025"
              tags={["Air Freight", "Sea Freight", "Logistics"]}
              slug="air-vs-sea-freight"
              index={2}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
