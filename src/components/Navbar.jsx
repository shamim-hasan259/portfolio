"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out py-5 border-b border-white/5 ${
        isScrolled
          ? "py-3 bg-[#05050a]/90 backdrop-blur-xl shadow-2xl"
          : " bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4  flex items-center justify-between">
        <div>
          <Link className="flex flex-col group leading-none" href="/">
            <span className="text-4xl font-black tracking-tighter bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-500 uppercase">
              Shamim
            </span>
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, key) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={key}
                href={item.href}
                className={` font-bold transition-all duration-300 relative group py-2 tracking-widest ${
                  isActive
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden relative z-[60] p-2 text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all border border-white/10"
        >
          {isMenuOpen ? (
            <X size={25} strokeWidth={2} />
          ) : (
            <Menu size={25} strokeWidth={2} />
          )}
        </button>

        <div
          className={`fixed inset-0 bg-[#05050a] flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden z-[55] ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-10 text-center">
            {navItems.map((item, key) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={key}
                  href={item.href}
                  className={`font-bold  tracking-wider transition-colors ${
                    isActive
                      ? "text-cyan-400"
                      : "text-gray-100 hover:text-cyan-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};
