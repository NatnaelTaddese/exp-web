import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PostCard({
  title,
  description,
  image,
  author = { name: "Admin" }, // Default value for author
  date = "No date", // Default value for date
  tags = [], // Default empty array for tags
  slug,
  index = 0,
}) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, delay: index * 0.1 },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col h-full bg-[#0c0c0c] border-2 border-[#e0e0e01e] rounded-sm overflow-hidden"
    >
      <div className="relative overflow-hidden h-48 sm:h-56">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="flex flex-col flex-grow p-5 space-y-4">
        {/* Tags - Only render if tags exist and have length */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#e6e8ea25] text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">
          {title || "Untitled Post"}
        </h2>

        {/* Description */}
        <p className="text-gray-400 flex-grow">
          {description
            ? description.length > 120
              ? `${description.substring(0, 120)}...`
              : description
            : "No description available"}
        </p>

        {/* Author and Date */}
        <div className="flex justify-between items-center pt-4 border-t border-[#e0e0e01e]">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-[#e6e8ea25] p-2 rounded-sm mr-3">
              <FaUser className="text-white h-4 w-4" />
            </div>
            <span className="text-sm text-gray-300">{author.name}</span>
          </div>

          <div className="flex items-center text-gray-400 text-sm">
            <FaCalendarAlt className="mr-2 h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>

        {/* Read More Link */}
        <motion.div
          className="mt-2"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <Link
            to={`/blog/${slug || "post"}`}
            className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
          >
            Read more
            <FaArrowRight className="ml-2 h-3 w-3" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
