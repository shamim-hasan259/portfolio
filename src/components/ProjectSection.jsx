"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectSection = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "Full-stack MERN e-commerce platform with authentication, cart system, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
      tech: ["React", "Node", "MongoDB", "Express"],
      live: "#",
      github: "#",
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern animated developer portfolio built with Next.js and Framer Motion.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      live: "#",
      github: "#",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Blog Platform",
      description:
        "Dynamic blog system with CRUD, authentication and admin panel.",
      image:
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800",
      tech: ["React", "Node", "MongoDB"],
      live: "#",
      github: "#",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section id="projects" className="py-20 text-white relative">
      {/* background */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="h-[3px] w-24 mx-auto mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Some of my real-world projects using MERN stack and modern UI
            design.
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition duration-500`}
              />

              {/* content */}
              <div className="relative z-10 p-5">
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* tech */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-cyan-500 text-black font-medium hover:bg-cyan-400 transition"
                  >
                    Live <FaExternalLinkAlt />
                  </a>

                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition"
                  >
                    Code <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectSection;
