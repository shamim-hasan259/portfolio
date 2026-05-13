// "use client";

// import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebookF } from "react-icons/fa";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="relative mt-20 border-t border-white/10 bg-white/5 backdrop-blur-xl text-white">
//       {/* Glow Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 blur-3xl -z-10" />

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
//           {/* Left */}
//           <div>
//             <h2 className="text-2xl font-bold">
//               Md <span className="text-cyan-400">Shamim</span>
//             </h2>
//             <p className="text-gray-400 text-sm mt-2 leading-relaxed">
//               Passionate MERN Stack Developer building modern, scalable and
//               high-performance web applications.
//             </p>
//           </div>

//           {/* Middle */}
//           <div className="flex flex-col items-start md:items-center gap-2 text-gray-400 text-sm">
//             <Link href="#home" className="hover:text-cyan-400 transition">
//               Home
//             </Link>
//             <Link href="#about" className="hover:text-cyan-400 transition">
//               About
//             </Link>
//             <Link href="#projects" className="hover:text-cyan-400 transition">
//               Projects
//             </Link>
//             <Link href="#contact" className="hover:text-cyan-400 transition">
//               Contact
//             </Link>
//           </div>

//           {/* Right Social */}
//           <div className="flex md:justify-end gap-4">
//             <a
//               href="https://github.com/"
//               target="_blank"
//               className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:text-cyan-400 hover:border-cyan-400 border border-white/10 transition"
//             >
//               <FaGithub />
//             </a>

//             <a
//               href="https://linkedin.com/"
//               target="_blank"
//               className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:text-blue-400 hover:border-blue-400 border border-white/10 transition"
//             >
//               <FaLinkedin />
//             </a>

//             <a
//               href="https://wa.me/8801XXXXXXXXX"
//               target="_blank"
//               className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:text-green-400 hover:border-green-400 border border-white/10 transition"
//             >
//               <FaWhatsapp />
//             </a>

//             <a
//               href="https://facebook.com/"
//               target="_blank"
//               className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center hover:text-blue-500 hover:border-blue-500 border border-white/10 transition"
//             >
//               <FaFacebookF />
//             </a>
//           </div>
//         </div>

//         {/* Bottom line */}
//         <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
//           © {new Date().getFullYear()} Md Shamim Hasan. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// "use client";

// import { motion } from "framer-motion";
// import { FaArrowUp, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

// const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="relative text-white overflow-hidden pt-20 pb-12">
//       {/* Subtle Background (more professional - less glow) */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-black/20 -z-10" />

//       {/* Thin top border glow line */}
//       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

//       <div className="max-w-6xl mx-auto px-6 relative z-10">
//         {/* Main Content */}
//         <div className="text-center">
//           {/* Brand */}
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-2xl sm:text-3xl font-semibold tracking-wide"
//           >
//             Built by{" "}
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
//               Shamim
//             </span>
//           </motion.h2>

//           {/* Role */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-gray-500 mt-2 text-sm tracking-wide"
//           >
//             MERN Stack Developer • UI Focused • Performance Driven
//           </motion.p>

//           {/* Divider */}
//           <div className="mt-8 w-24 h-[2px] mx-auto bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />

//           {/* Social */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="flex justify-center gap-5 mt-8"
//           >
//             <a
//               href="#"
//               className="group h-11 w-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center transition hover:border-cyan-400"
//             >
//               <FaGithub className="group-hover:text-cyan-400 transition" />
//             </a>

//             <a
//               href="#"
//               className="group h-11 w-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center transition hover:border-blue-400"
//             >
//               <FaLinkedin className="group-hover:text-blue-400 transition" />
//             </a>

//             <a
//               href="https://wa.me/8801XXXXXXXXX"
//               target="_blank"
//               className="group h-11 w-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center transition hover:border-green-400"
//             >
//               <FaWhatsapp className="group-hover:text-green-400 transition" />
//             </a>
//           </motion.div>

//           {/* Bottom Text */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-gray-600 text-xs mt-10"
//           >
//             © {new Date().getFullYear()} All rights reserved.
//           </motion.p>
//         </div>
//       </div>

//       {/* Back To Top Button */}
//       <motion.button
//         onClick={scrollToTop}
//         initial={{ opacity: 0, scale: 0 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.4 }}
//         viewport={{ once: true }}
//         className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-xl
//         bg-white/5 border border-white/10 backdrop-blur-xl
//         flex items-center justify-center
//         hover:border-cyan-400 hover:text-cyan-400
//         transition group"
//       >
//         <FaArrowUp className="group-hover:-translate-y-1 transition" />
//       </motion.button>
//     </footer>
//   );
// };

// export default Footer;
// "use client";

// import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebookF } from "react-icons/fa";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="relative mt-24 border-t border-white/10 bg-[#050816] text-white overflow-hidden">
//       {/* Background Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_40%)]" />

//       <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
//         {/* Top Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* Brand */}
//           <div>
//             <h2 className="text-2xl font-bold tracking-wide">
//               Md <span className="text-cyan-400">Shamim</span>
//             </h2>

//             <p className="text-gray-400 text-sm mt-4 leading-relaxed">
//               Building modern, scalable and high-performance web experiences
//               with clean architecture and smooth user experience.
//             </p>
//           </div>

//           {/* Navigation */}
//           <div className="flex flex-col gap-3 text-sm text-gray-400">
//             <h3 className="text-white font-semibold mb-2">Navigation</h3>

//             <Link href="#home" className="hover:text-cyan-400 transition">
//               Home
//             </Link>
//             <Link href="#about" className="hover:text-cyan-400 transition">
//               About
//             </Link>
//             <Link href="#projects" className="hover:text-cyan-400 transition">
//               Projects
//             </Link>
//             <Link href="#contact" className="hover:text-cyan-400 transition">
//               Contact
//             </Link>
//           </div>

//           {/* Contact CTA */}
//           <div>
//             <h3 className="text-white font-semibold mb-3">Let’s Connect</h3>

//             <p className="text-gray-400 text-sm mb-5">
//               Have an idea or project? Let’s build something amazing together.
//             </p>

//             <a
//               href="#contact"
//               className="inline-block px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-105 transition"
//             >
//               Hire Me
//             </a>
//           </div>
//         </div>

//         {/* Social Section */}
//         <div className="flex justify-center gap-4 mt-14">
//           <a
//             href="https://github.com/"
//             target="_blank"
//             className="group h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400 transition"
//           >
//             <FaGithub className="group-hover:text-cyan-400 transition" />
//           </a>

//           <a
//             href="https://linkedin.com/"
//             target="_blank"
//             className="group h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-400 transition"
//           >
//             <FaLinkedin className="group-hover:text-blue-400 transition" />
//           </a>

//           <a
//             href="https://wa.me/8801XXXXXXXXX"
//             target="_blank"
//             className="group h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-green-400 transition"
//           >
//             <FaWhatsapp className="group-hover:text-green-400 transition" />
//           </a>

//           <a
//             href="https://facebook.com/"
//             target="_blank"
//             className="group h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-500 transition"
//           >
//             <FaFacebookF className="group-hover:text-blue-500 transition" />
//           </a>
//         </div>

//         {/* Bottom */}
//         <div className="mt-14 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
//           © {new Date().getFullYear()} Md Shamim Hasan. Built with Next.js &
//           Framer Motion
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// "use client";

// import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebookF } from "react-icons/fa";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <footer className="relative mt-28 text-white overflow-hidden bg-[#050816]">
//       {/* Soft Animated Glow Background */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full" />
//         <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
//       </div>

//       <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-20">
//         {/* Top Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
//           {/* Brand */}
//           <div>
//             <h2 className="text-3xl font-bold tracking-tight">
//               Md <span className="text-cyan-400">Shamim</span>
//             </h2>

//             <p className="text-gray-400 text-sm mt-5 leading-relaxed">
//               Crafting fast, scalable and modern web applications with clean
//               architecture, smooth UX and performance-first mindset.
//             </p>

//             <div className="mt-6 text-xs text-gray-500">
//               MERN Stack Developer • UI/UX Enthusiast
//             </div>
//           </div>

//           {/* Navigation */}
//           <div>
//             <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-5">
//               Navigation
//             </h3>

//             <div className="flex flex-col gap-3 text-sm text-gray-400">
//               <Link href="#home" className="hover:text-cyan-400 transition">
//                 Home
//               </Link>
//               <Link href="#about" className="hover:text-cyan-400 transition">
//                 About
//               </Link>
//               <Link href="#projects" className="hover:text-cyan-400 transition">
//                 Projects
//               </Link>
//               <Link href="#contact" className="hover:text-cyan-400 transition">
//                 Contact
//               </Link>
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
//             <h3 className="text-lg font-semibold mb-2">Let’s Work Together</h3>

//             <p className="text-gray-400 text-sm mb-5">
//               Got a project or idea? I’m available for freelance &
//               collaborations.
//             </p>

//             <a
//               href="#contact"
//               className="inline-flex items-center justify-center w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:scale-[1.03] transition"
//             >
//               Hire Me
//             </a>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="my-14 border-t border-white/10" />

//         {/* Social + Bottom */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
//           {/* Social Icons */}
//           <div className="flex gap-4">
//             <a
//               href="https://github.com/"
//               target="_blank"
//               className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition"
//             >
//               <FaGithub />
//             </a>

//             <a
//               href="https://linkedin.com/"
//               target="_blank"
//               className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-400 hover:text-blue-400 transition"
//             >
//               <FaLinkedin />
//             </a>

//             <a
//               href="https://wa.me/8801XXXXXXXXX"
//               target="_blank"
//               className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-green-400 hover:text-green-400 transition"
//             >
//               <FaWhatsapp />
//             </a>

//             <a
//               href="https://facebook.com/"
//               target="_blank"
//               className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition"
//             >
//               <FaFacebookF />
//             </a>
//           </div>

//           {/* Copyright */}
//           <div className="text-gray-500 text-sm text-center md:text-right">
//             © {new Date().getFullYear()} Md Shamim Hasan. All rights reserved.
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import {
//   FaLinkedin,
//   FaWhatsapp,
//   FaFacebookF,
//   FaGithub,
//   FaArrowUp,
// } from "react-icons/fa";

// const SOCIAL_LINKS = [
//   {
//     id: 1,
//     name: "Facebook",
//     url: "https://facebook.com/",
//     icon: <FaFacebookF />,
//   },
//   {
//     id: 2,
//     name: "Linkedin",
//     url: "https://linkedin.com/",
//     icon: <FaLinkedin />,
//   },
//   {
//     id: 3,
//     name: "Github",
//     url: "https://github.com/",
//     icon: <FaGithub />,
//   },
//   {
//     id: 4,
//     name: "WhatsApp",
//     url: "https://wa.me/8801765102417",
//     icon: <FaWhatsapp />,
//   },
// ];

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="relative mt-20 border-t border-white/10 bg-[#050816] pt-16 pb-8 text-white overflow-hidden">
//       {/* ⭐ Premium Background Glow (ONLY CHANGE) */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.08),transparent_50%)]" />

//       {/* Top Glow Border */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />

//       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left">
//           {/* Brand Section */}
//           <div>
//             <motion.h2
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               className="text-2xl font-bold tracking-tight sm:text-3xl"
//             >
//               Md{" "}
//               <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                 Shamim
//               </span>
//             </motion.h2>

//             <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-xs mx-auto md:mx-0">
//               Passionate Full-Stack Developer creating seamless digital
//               experiences with modern web technologies.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="flex flex-col items-center md:items-start gap-4">
//             <h3 className="text-lg font-semibold text-white/90">Quick Links</h3>

//             <ul className="flex flex-col gap-3 text-sm text-gray-400">
//               <li>
//                 <Link
//                   href="#home"
//                   className="hover:text-cyan-400 hover:pl-2 transition-all"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#about"
//                   className="hover:text-cyan-400 hover:pl-2 transition-all"
//                 >
//                   About Me
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#projects"
//                   className="hover:text-cyan-400 hover:pl-2 transition-all"
//                 >
//                   My Projects
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="#contact"
//                   className="hover:text-cyan-400 hover:pl-2 transition-all"
//                 >
//                   Contact Me
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Social */}
//           <div className="flex flex-col items-center md:items-end gap-4">
//             <h3 className="text-lg font-semibold text-white/90">
//               Get in Touch
//             </h3>

//             <div className="flex gap-3">
//               {SOCIAL_LINKS.map((link) => (
//                 <Link
//                   key={link.id}
//                   href={link.url}
//                   target="_blank"
//                   className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-cyan-500/50 hover:bg-white/10"
//                 >
//                   <span className="text-xl text-gray-300 hover:text-white transition-colors">
//                     {link.icon}
//                   </span>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="my-10 h-px w-full bg-linear-to-r from-transparent via-white/5 to-transparent" />

//         {/* Bottom */}
//         <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
//           <p className="text-sm text-gray-500">
//             © {currentYear}{" "}
//             <span className="text-cyan-400/80 font-medium">
//               Md Shamim Hasan
//             </span>
//             . All rights reserved.
//           </p>

//           <motion.button
//             whileHover={{ y: -5 }}
//             onClick={scrollToTop}
//             className="group flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors"
//           >
//             <span>Back to top</span>
//             <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 group-hover:bg-cyan-500 group-hover:text-black transition-all">
//               <FaArrowUp />
//             </div>
//           </motion.button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaLinkedin,
  FaWhatsapp,
  FaFacebookF,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";

const SOCIAL_LINKS = [
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/md.shamim.hasan.457240/",
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/md-shamim-hasan-48133b243/",
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    name: "Github",
    url: "https://github.com/shamim-hasan259",
    icon: <FaGithub />,
  },
  {
    id: 4,
    name: "WhatsApp",
    url: "https://wa.me/8801765102417",
    icon: <FaWhatsapp />,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#050816] pt-16 pb-8 text-white overflow-hidden">
      {/* Premium Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.12),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(34,211,238,0.08),transparent_50%)]" />

      {/* Top Glow Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-linear-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left">
          {/* Brand */}
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Md{" "}
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Shamim Hasan
              </span>
            </motion.h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-400 max-w-xs mx-auto md:mx-0">
              Passionate Full-Stack Developer creating seamless digital
              experiences with modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-lg font-semibold text-white/90">Quick Links</h3>

            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>
                <Link
                  href="#home"
                  className="hover:text-cyan-400 hover:pl-2 transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-cyan-400 hover:pl-2 transition-all"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#education"
                  className="hover:text-cyan-400 hover:pl-2 transition-all"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="hover:text-cyan-400 hover:pl-2 transition-all"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="hover:text-cyan-400 hover:pl-2 transition-all"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="hover:text-cyan-400 hover:pl-2 transition-all"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <h3 className="text-lg font-semibold text-white/90">
              Get in Touch
            </h3>

            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:border-cyan-500/50 hover:bg-white/10"
                >
                  <span className="text-xl text-gray-300 hover:text-white transition-colors">
                    {link.icon}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-linear-to-r from-transparent via-white/5 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-gray-500">
            © {currentYear}{" "}
            <span className="text-cyan-400/80 font-medium">
              Md Shamim Hasan
            </span>
            . All rights reserved.
          </p>

          {/* 🔥 Improved Back to Top Button */}
          <motion.button
            whileHover={{ y: -6, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-sm font-medium text-gray-400 hover:text-cyan-400 transition-all"
          >
            <span className="tracking-wide">Back to top</span>

            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 group-hover:border-cyan-400/50 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]">
              {/* Glow Layer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* Icon */}
              <FaArrowUp className="relative z-10 group-hover:text-white transition" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
