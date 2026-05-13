"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Link from "next/link";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaWhatsapp,
  FaFacebookF,
} from "react-icons/fa";
const CONTACT_INFO = [
  {
    id: 1,
    title: "Email",
    value: "mdshamimhasan791@gmail.com",
    icon: <FaEnvelope />,
    gradient: "from-cyan-400 to-blue-500",
    shadow: "shadow-cyan-500/20",
    hoverBorder: "hover:border-cyan-400/40",
    fullWidth: false,
  },
  {
    id: 2,
    title: "Phone",
    value: "+880 1765102417",
    icon: <FaPhoneAlt />,
    gradient: "from-blue-400 to-indigo-500",
    shadow: "shadow-blue-500/20",
    hoverBorder: "hover:border-blue-400/40",
    fullWidth: false,
  },
  {
    id: 3,
    title: "Location",
    value: "Baliadangi, Thakurgaon, Bangladesh",
    icon: <FaMapMarkerAlt />,
    gradient: "from-purple-400 to-pink-500",
    shadow: "shadow-purple-500/20",
    hoverBorder: "hover:border-purple-400/40",
    fullWidth: true,
  },
];

const SOCIAL_LINKS = [
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/md.shamim.hasan.457240/",
    icon: <FaFacebookF />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/md-shamim-hasan-48133b243/",
    icon: <FaLinkedin />,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    id: 4,
    name: "WhatsApp",
    url: "https://wa.me/8801765102417",
    icon: <FaWhatsapp />,
    gradient: "from-green-400 to-emerald-500",
  },
];

const inputVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully 🚀");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error.text);
          alert("Something went wrong!");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-28 text-white"
    >
      {/* Background Glow - এখানেও bg-linear ব্যবহার করা হয়েছে */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-blue-500/10 blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold">
            Contact{" "}
            <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
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
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-2 sm:p-4"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Let’s Build Something Amazing
            </h3>
            <p className="text-gray-400 mb-8 text-sm sm:text-base">
              I’m always open to discussing new projects, creative ideas and
              opportunities to be part of your vision.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {CONTACT_INFO.map((item) => (
                <div
                  key={item.id}
                  className={`relative flex flex-col items-center text-center rounded-2xl border border-white/10  bg-white/5 p-6  overflow-hidden transition duration-300 hover:bg-white/10 hover:scale-[1.03] ${
                    item.fullWidth ? "sm:col-span-2" : ""
                  }`}
                >
                  {/* soft brand glow background */}
                  <div
                    className={`absolute inset-0 opacity-10 bg-linear-to-br ${item.gradient}`}
                  />

                  {/* icon */}
                  <div
                    className={`relative z-10 h-14 w-14 rounded-2xl bg-linear-to-r ${item.gradient} flex items-center justify-center text-2xl mb-4 shadow-md`}
                  >
                    {item.icon}
                  </div>

                  {/* text */}
                  <p className="text-gray-400 text-sm mb-1 relative z-10">
                    {item.title}
                  </p>

                  <h5 className="font-medium text-sm break-all relative z-10 text-white">
                    {item.value}
                  </h5>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 max-w-sm mx-auto lg:mx-0">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  className=" relative rounded-2xl  p-5 flex flex-col items-center justify-center  bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-105 transition duration-300 overflow-hidden"
                >
                  {/* soft brand glow background */}
                  <div
                    className={`absolute inset-0 opacity-10 bg-gradient-to-br ${link.gradient}`}
                  />

                  {/* icon */}
                  <div className="relative z-10 text-3xl text-white">
                    {link.icon}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
              Send Me a{" "}
              <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Message
              </span>
            </h3>
            <p className="text-gray-400 mb-8 text-sm sm:text-base">
              Feel free to contact me anytime.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={inputVariants}
              >
                <label className="text-sm text-gray-300 mb-2 block">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan-400 focus:bg-white/10 transition"
                />
              </motion.div>

              <motion.div
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={inputVariants}
              >
                <label className="text-sm text-gray-300 mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan-400 focus:bg-white/10 transition"
                />
              </motion.div>

              <motion.div
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={inputVariants}
              >
                <label className="text-sm text-gray-300 mb-2 block">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="user_phone"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-cyan-400 focus:bg-white/10 transition"
                />
              </motion.div>

              <motion.div
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={inputVariants}
              >
                <label className="text-sm text-gray-300 mb-2 block">
                  Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  required
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none resize-none focus:border-cyan-400 focus:bg-white/10 transition"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white rounded-xl bg-linear-to-r from-cyan-400 to-blue-500 py-3 font-semibold duration-300"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
