"use client";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import SlideText from "./SlideText";
import heroImag from "../../assets/shamim-removebg-preview.png";
import Image from "next/image";
import { motion } from "framer-motion";
const socialLinks = [
  {
    icon: <FaGithub size={20} />,
    url: "https://github.com/shamim-hasan259",
  },
  {
    icon: <FaLinkedin size={20} />,
    url: "https://www.linkedin.com/in/md-shamim-hasan-48133b243/",
  },
  {
    icon: <FaFacebook size={20} />,
    url: "https://www.facebook.com/md.shamim.hasan.457240/",
  },
  {
    icon: <FaWhatsapp size={20} />,
    url: "https://wa.me/8801765102417",
  },
];
const Hero = () => {
  return (
    <section className="pt-8 md:pt-10 py-15" id="hero">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <motion.div
            className="flex-1 space-y-3 sm:space-y-5 mt-10"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h4 className="uppercase bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-medium mb-5">
              Well Come To My Portfolio
            </h4>

            <h1 className="text-3xl md:text-6xl">
              Hi, I{`'`}m{" "}
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                Shamim
              </span>
            </h1>

            <h3 className="flex items-center gap-2">
              <span className="font-bold text-2xl md:text-3xl"> I am a</span>{" "}
              <SlideText />
            </h3>

            <p className="text-sm sm:text-lg font-medium">
              Passionate about building scalable and high-performance MERN stack
              applications through clean code, modern technologies, and seamless
              user experiences.
            </p>
            <div className="flex items-center flex-wrap gap-4 pt-4">
              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 text-white font-medium hover:scale-105 transition-transform duration-300"
              >
                Download Resume
                <Download size={18} />
              </a>

              <a
                href="#projects"
                className="px-5 py-3 rounded-full border border-cyan-400 text-cyan-400 font-medium hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View My Works
              </a>
            </div>
            <div className="flex items-center gap-3 pt-5">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 border border-white/20 text-white 
                 hover:bg-linear-to-r hover:from-cyan-400 hover:to-blue-500 
                 hover:scale-100 hover:-translate-x-1 transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex-1 mt-5 flex justify-center relative pt-10"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="rounded-full p-[4px] bg-linear-to-r from-cyan-400 to-blue-500">
              <div className="rounded-full overflow-hidden">
                <Image
                  src={heroImag}
                  width={400}
                  height={400}
                  alt="heroImg"
                  className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] object-cover rounded-full transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <span className="absolute top-[18%] left-[8%] sm:left-[10%] md:left-[20%] bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm">
              React
            </span>

            <span className="absolute top-[10%] right-[12%] sm:right-[14%] md:right-[25%] bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm">
              Next.js
            </span>

            <span className="absolute top-[38%] right-[-10%] sm:right-[2%] md:right-[4%] bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm">
              MongoDB
            </span>

            <span className="absolute bottom-[20%] right-[0%] sm:right-[3%] md:right-[10%] bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm">
              Node.js
            </span>

            <span className="absolute top-[55%] left-[-15%] sm:left-[2%] md:left-[4%] bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm">
              Express.js
            </span>

            <span className="absolute bottom-[2%] left-[18%] sm:left-[20%] md:left-[22%] bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm">
              Tailwind
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
