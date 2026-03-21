"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ArrowRight } from "lucide-react";

const socials = [
    { icon: Github, label: "GitHub", href: "https://github.com/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/" },
    { icon: Mail, label: "Email", href: "mailto:goswamirudra006@gmail.com" },
];

export default function Contact() {
    return (
        <section id="contact" className="w-full max-w-6xl py-24 md:py-32">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="text-center"
            >
                {/* Availability Badge */}
                <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-10">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.3)]"></span>
                    Available for new opportunities
                </div>

                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-neutral-900 mb-8 leading-[0.9]">
                    Let&apos;s Build Something
                    <span className="block text-neutral-400 mt-2">
                        Great Together.
                    </span>
                </h2>

                <p className="text-lg md:text-xl text-neutral-500 font-medium mb-16 max-w-2xl mx-auto leading-relaxed">
                    I&apos;m currently open to freelance projects, internships, and full-time roles. If you have a project or opportunity, I&apos;d love to hear about it!
                </p>

                {/* Primary CTA */}
                <motion.a
                    href="mailto:goswamirudra006@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-4 px-10 py-5 bg-neutral-900 text-white font-black text-xs uppercase tracking-widest rounded-2xl shadow-2xl shadow-neutral-200 hover:bg-neutral-800 transition-colors mb-16"
                >
                    Say Hello <ArrowRight className="w-4 h-4" />
                </motion.a>

                {/* Divider */}
                <div className="flex items-center gap-4 max-w-xs mx-auto mb-12">
                    <div className="flex-1 h-px bg-neutral-100"></div>
                    <span className="text-neutral-300 text-[10px] font-bold uppercase tracking-widest">or find me on</span>
                    <div className="flex-1 h-px bg-neutral-100"></div>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-4">
                    {socials.map(({ icon: Icon, label, href }) => (
                        <motion.a
                            key={label}
                            href={href}
                            whileHover={{ y: -5, scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-3 px-6 py-4 bg-white border border-neutral-100 rounded-2xl text-neutral-400 hover:text-neutral-900 hover:border-neutral-200 transition-all font-bold text-xs uppercase tracking-widest shadow-sm"
                        >
                            <Icon className="w-4 h-4" />
                            {label}
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
