import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "info@bahtaexpress.com",
          subject: formData.subject,
          text: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSubmitting(false);
      alert("There was an error sending your message. Please try again later.");
    }
  };

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Have questions about our logistics services? We're here to help
              with your shipping needs from China to Ethiopia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="bg-[#0c0c0c] border-2 border-[#e0e0e01e] p-6 rounded-sm">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#e6e8ea25] p-3 rounded-sm">
                      <FaMapMarkerAlt className="text-white h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">Our Location</h4>
                      <p className="text-gray-400 mt-1">
                        Addis Ababa, Ethiopia
                      </p>
                      <p className="text-gray-400">Guangzhou, China</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#e6e8ea25] p-3 rounded-sm">
                      <FaPhone className="text-white h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">Call Us</h4>
                      <p className="text-gray-400 mt-1">+251-911-282-956</p>
                      <p className="text-gray-400">+251-943-282-956</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-[#e6e8ea25] p-3 rounded-sm">
                      <FaEnvelope className="text-white h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-medium">Email Us</h4>
                      <p className="text-gray-400 mt-1">
                        info@bahtaexpress.com
                      </p>
                      <p className="text-gray-400">support@bahtaexpress.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="bg-[#0c0c0c] border-2 border-[#e0e0e01e] p-6 sm:p-8 rounded-sm">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Send Us a Message
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#e6e8ea15] border border-[#e6e8ea25] p-6 text-center rounded-sm"
                  >
                    <FaPaperPlane className="text-white h-12 w-12 mx-auto mb-4" />
                    <h4 className="text-white text-xl font-medium mb-2">
                      Message Sent!
                    </h4>
                    <p className="text-gray-300">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-gray-300 mb-2"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#1a1a1a] border-2 border-[#e0e0e01e] text-white px-4 py-3 focus:outline-none focus:border-[#e6e8ea50]"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-gray-300 mb-2"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#1a1a1a] border-2 border-[#e0e0e01e] text-white px-4 py-3 focus:outline-none focus:border-[#e6e8ea50]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-gray-300 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#1a1a1a] border-2 border-[#e0e0e01e] text-white px-4 py-3 focus:outline-none focus:border-[#e6e8ea50]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-gray-300 mb-2"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="w-full bg-[#1a1a1a] border-2 border-[#e0e0e01e] text-white px-4 py-3 focus:outline-none focus:border-[#e6e8ea50]"
                      ></textarea>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#e6e8eaf2] hover:bg-[#000000d2] hover:text-amber-50 border-4 border-[#e0e0e01e] text-black font-medium py-3 px-8 inline-flex items-center justify-center transition-colors duration-300 disabled:opacity-70"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <FaPaperPlane className="ml-2" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
