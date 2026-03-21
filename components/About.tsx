"use client";

import { motion } from "framer-motion";
import { Terminal, Layers, Zap, Award } from "lucide-react";

const highlights = [
    {
        title: "MERN Stack",
        label: "EXPERTISE",
        icon: Terminal,
    },
    {
        title: "Problem Solver",
        label: "FOCUS",
        icon: Zap,
    },
    {
        title: "Full Stack",
        label: "ROLE",
        icon: Layers,
    },
    {
        title: "UI/UX Design",
        label: "INTEREST",
        icon: Award,
    },
];

export default function About() {
    return (
        <section id="about" className="w-full max-w-6xl py-24 md:py-32">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="bg-white/70 backdrop-blur-md border border-neutral-100 rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-12 items-center mb-12 shadow-sm"
            >
                <div className="flex-1 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-neutral-900">Get to know me</h2>
                    <div className="space-y-4 text-lg text-neutral-600 leading-relaxed font-medium">
                        <p>
                            I'm a passionate Full-stack Developer with a strong foundation in modern web technologies. I specialize in building scalable, user-centric applications that solve real-world problems and provide seamless digital experiences.
                        </p>
                        <p>
                            With expertise in the MERN stack and a keen eye for design, I enjoy turning complex requirements into elegant, efficient code. I'm constantly learning and exploring new frameworks to stay at the forefront of the ever-evolving web development landscape.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/3 aspect-square rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 shadow-inner border border-white p-2 overflow-hidden flex items-center justify-center">
                    <img src="/IMG-20251217-WA0048.jpg" alt="My Portrait" className="w-full h-full object-cover rounded-xl" />
                </div>
            </motion.div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {highlights.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-sm relative overflow-hidden group hover:border-neutral-200 hover:shadow-md transition-all"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-neutral-100 transition-colors border border-neutral-100">
                                <item.icon className="w-6 h-6 text-neutral-900" />
                            </div>
                            <h3 className="text-xl font-bold text-neutral-900 mb-2 tracking-tight">{item.title}</h3>
                            <p className="text-[10px] font-black tracking-widest text-neutral-400 uppercase">{item.label}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
