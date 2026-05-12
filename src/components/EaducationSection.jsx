"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const EducationSection = () => {
  const educationData = [
    {
      degree: "Honours in Islamic History & Culture (Running)",
      institute: "Thakurgaon Govt College",
      year: "2022 - Present",
      description:
        "Currently pursuing Honours in Islamic History and Culture, exploring historical civilizations, cultural heritage and the evolution of societies alongside my journey in web development.",
    },

    {
      degree: "Higher Secondary Certificate (HSC)",
      institute: "Samir Uddin Smrity College",
      year: "2021",
      description:
        "Completed HSC in Science while developing analytical thinking, creativity and a passion for modern technology and web development.",
    },

    {
      degree: "Secondary School Certificate (SSC)",
      institute: "Charta High School",
      year: "2019",
      description:
        "Completed SSC from Science background with a strong interest in mathematics, technology and logical problem solving.",
    },
  ];

  return (
    <section
      id="education"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28 text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            My{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Education Qualification
            </span>
          </h2>

          {/* Animated Border */}
          <div className="flex justify-center mt-4 sm:mt-5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "7rem" }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="h-[3px] rounded-full bg-linear-to-r from-cyan-400 to-blue-500"
            />
          </div>

          <p className="text-gray-400 mt-5 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-2">
            My academic journey and continuous learning path in technology and
            software development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-8 sm:space-y-10">
          {/* Timeline Line */}
          <div className="absolute left-[15px] sm:left-4 top-0 h-full w-[2px] bg-linear-to-b from-cyan-400 via-blue-500 to-transparent opacity-40" />

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative pl-12 sm:pl-14"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 sm:top-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.35)]">
                <FaGraduationCap className="text-cyan-400 text-xs sm:text-sm" />
              </div>

              {/* Card */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 lg:p-7 transition-all duration-500">
                {/* Hover Background Animation */}
                <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-cyan-500/10 to-blue-500/10 transition-transform duration-700 group-hover:translate-x-0" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Top Section */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-snug text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {item.degree}
                    </h3>

                    {/* Year */}
                    <div className="flex items-center gap-2 text-cyan-400 text-xs sm:text-sm font-medium">
                      <FaCalendarAlt className="shrink-0" />

                      <span>
                        {item.degree.includes("Running")
                          ? `Running`
                          : `Completed ${item.year}`}
                      </span>
                    </div>
                  </div>

                  {/* Institute */}
                  <h4 className="text-base sm:text-lg font-semibold text-blue-400 mb-3 leading-snug">
                    {item.institute}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
