"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaNpm,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiBetterauth,
} from "react-icons/si";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Frontend", "Backend", "Tools"];

  const skills = [
    {
      name: "HTML5",
      category: "Frontend",
      icon: <FaHtml5 />,
      gradient: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-500",
    },
    {
      name: "CSS3",
      category: "Frontend",
      icon: <FaCss3Alt />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "text-blue-500",
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: <FaJs />,
      gradient: "from-yellow-400/20 to-yellow-600/20",
      iconColor: "text-yellow-400",
    },
    {
      name: "React JS",
      category: "Frontend",
      icon: <FaReact />,
      gradient: "from-cyan-400/20 to-blue-500/20",
      iconColor: "text-cyan-400",
    },
    {
      name: "Next JS",
      category: "Frontend",
      icon: <SiNextdotjs />,
      gradient: "from-gray-700/20 to-black/20",
      iconColor: "text-white",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: <SiTailwindcss />,
      gradient: "from-cyan-400/20 to-sky-500/20",
      iconColor: "text-cyan-400",
    },
    {
      name: "Bootstrap",
      category: "Frontend",
      icon: <FaBootstrap />,
      gradient: "from-purple-500/20 to-indigo-500/20",
      iconColor: "text-purple-400",
    },

    {
      name: "Node JS",
      category: "Backend",
      icon: <FaNodeJs />,
      gradient: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-500",
    },
    {
      name: "Express JS",
      category: "Backend",
      icon: <SiExpress />,
      gradient: "from-gray-500/20 to-zinc-700/20",
      iconColor: "text-gray-300",
    },
    {
      name: "MongoDB",
      category: "Backend",
      icon: <SiMongodb />,
      gradient: "from-green-600/20 to-lime-500/20",
      iconColor: "text-green-500",
    },
    {
      name: "Better Auth",
      category: "Backend",
      icon: <SiBetterauth />,
      gradient: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-400",
    },

    {
      name: "NPM",
      category: "Tools",
      icon: <FaNpm />,
      gradient: "from-red-500/20 to-rose-600/20",
      iconColor: "text-red-500",
    },
    {
      name: "GitHub",
      category: "Tools",
      icon: <FaGithub />,
      gradient: "from-gray-600/20 to-black/20",
      iconColor: "text-white",
    },
    {
      name: "Figma",
      category: "Tools",
      icon: <FaFigma />,
      gradient: "from-pink-500/20 to-purple-500/20",
      iconColor: "text-pink-400",
    },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold">
            My{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="flex justify-center mt-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "7rem" }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="h-[3px] rounded-full bg-linear-to-r from-cyan-400 to-blue-500"
            />
          </div>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Technologies and tools I use to build modern web applications.
          </p>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full border text-sm sm:text-base transition-all duration-300
              ${
                activeCategory === category
                  ? "bg-linear-to-r from-cyan-400/90 to-blue-500/90 "
                  : "bg-white/5 border-white/10 text-gray-300 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.07 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 text-center"
              >
                {/* moving gradient bg */}
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "linear",
                  }}
                  className={`absolute inset-0 bg-linear-to-r ${skill.gradient} blur-2xl opacity-80`}
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* content */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`text-5xl mb-3 ${skill.iconColor}`}>
                    {skill.icon}
                  </div>

                  <h3 className="text-sm sm:text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Learning Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-14 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-10 text-center group"
          >
            {/* animated glow */}
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-700" />

            <div className="relative z-10">
              <h3 className="text-xl sm:text-3xl font-bold mb-4 text-white ">
                Always Learning,{" "}
                <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Always Growing
                </span>
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
                Technology evolves rapidly, and so do I. From mastering the
                fundamentals of HTML and CSS to exploring cutting-edge
                frameworks like Next.js, I'm constantly expanding my toolkit to
                deliver exceptional results.
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;
