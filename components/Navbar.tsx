"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Magnetic from "./Magnetic";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-white/70 backdrop-blur-xl border-b border-neutral-100 py-4" : "bg-transparent py-8"}`}
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <Magnetic strength={0.2}>
                    <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900">
                        Rudra<span className="text-blue-600">.</span>
                    </Link>
                </Magnetic>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Magnetic key={link.name} strength={0.3}>
                            <Link
                                href={link.href}
                                className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors"
                            >
                                {link.name}
                            </Link>
                        </Magnetic>
                    ))}
                    <div className="w-px h-4 bg-neutral-200 mx-4" />
                    <Magnetic strength={0.4}>
                        <a
                            href="#contact"
                            className="px-6 py-2.5 bg-neutral-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all hover:scale-105 shadow-lg shadow-neutral-200 block"
                        >
                            Let&apos;s Talk
                        </a>
                    </Magnetic>
                </div>

                {/* Mobile Nav Toggle */}
                <button
                    className="md:hidden text-neutral-900 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-full bg-white border-b border-neutral-100 py-8 px-6 md:hidden flex flex-col gap-6 shadow-xl"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-xl font-bold text-neutral-900 tracking-tight"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="w-fit px-8 py-3 bg-neutral-900 text-white rounded-full font-bold"
                    >
                        Let&apos;s Talk
                    </a>
                </motion.div>
            )}
        </motion.nav>
    );
}
