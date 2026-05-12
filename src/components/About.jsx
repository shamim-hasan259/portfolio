"use client";
import { motion } from "framer-motion";
import { FaCode, FaBolt, FaUsers, FaLightbulb } from "react-icons/fa";
const About = () => {
  const features = [
    {
      title: "Clean Code",
      description:
        "Maintainable, scalable and production-ready code for long-term success.",
      icon: <FaCode />,
    },
    {
      title: "Performance",
      description:
        "Optimized applications for speed, efficiency and smooth UX.",
      icon: <FaBolt />,
    },
    {
      title: "User-Centric",
      description: "Designing intuitive interfaces focused on real user needs.",
      icon: <FaUsers />,
    },
    {
      title: "Innovation",
      description: "Always exploring modern technologies and better solutions.",
      icon: <FaLightbulb />,
    },
  ];
  return (
    <section
      id="about"
      className="py-16 text-white relative overflow-hidden z-0"
    >
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-blue-500/5 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-20 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold ">
            About{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="flex justify-center">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="h-[3px] bg-linear-to-r from-cyan-400 to-blue-500 rounded-full"
            />
          </div>
          <h3 className="text-2xl md:text-4xl font-bold mt-6">
            Crafting{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg italic">
            "Passionate MERN Stack Developer building scalable, fast and modern
            web applications."
          </p>
        </motion.div>
        <div className="space-y-14 mb-20 relative">
          <div className="absolute left-3 top-0 w-[2px] h-full bg-linear-to-b from-cyan-400 via-blue-500 to-transparent opacity-30" />

          {[
            {
              title: "My Journey",
              color: "cyan",
              text: "I’m Shamim, a MERN Stack Developer who loves turning ideas into real-world applications with clean UI.",
            },
            {
              title: "What Drives Me",
              color: "blue",
              text: "I enjoy building fast, responsive and user-friendly interfaces using React and Next.js.",
            },
            {
              title: "My Philosophy",
              color: "cyan",
              text: "Every project is a chance to improve. I focus on performance, simplicity and clean architecture.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative pl-10"
            >
              <div
                className={`absolute left-0 top-2 w-3 h-3 rounded-full ${
                  item.color === "cyan" ? "bg-cyan-400" : "bg-blue-500"
                } shadow-[0_0_12px]`}
              />
              <h3
                className={`text-xl md:text-2xl font-bold mb-2 ${
                  item.color === "cyan" ? "text-cyan-400" : "text-blue-400"
                }`}
              >
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl
                         hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/10
                         hover:scale-[1.03] transition-all duration-300 group"
            >
              <div className="text-2xl mb-3 text-cyan-400 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>

              <h4 className="text-lg font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h4>

              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
