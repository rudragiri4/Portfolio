"use client";

import { motion } from "framer-motion";
import { 
    Terminal, Code, Database, Globe, Layers, Cpu, Layout, 
    Server, Wrench, GitBranch, Share2, Square
} from "lucide-react";
import TiltCard from "./TiltCard";

const mernStack = [
    { letter: "M", name: "MONGODB", icon: Database },
    { letter: "E", name: "EXPRESS", icon: Server },
    { letter: "R", name: "REACT", icon: Code },
    { letter: "N", name: "NODE.JS", icon: Cpu },
];

const skillCategories = [
    {
        title: "Frontend Development",
        count: "6 technologies",
        icon: Layout,
        skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Bootstrap"]
    },
    {
        title: "Backend Development",
        count: "3 technologies",
        icon: Server,
        skills: ["Node.js", "Express.js", "NestJS"]
    },
    {
        title: "Databases",
        count: "2 technologies",
        icon: Database,
        skills: ["MongoDB", "SQL"]
    },
    {
        title: "Languages",
        count: "2 technologies",
        icon: Globe,
        skills: ["Java", "Python"]
    },
    {
        title: "Tools & Concepts",
        count: "4 technologies",
        icon: Wrench,
        skills: ["Git & GitHub", "REST APIs", "Data Structures", "Algorithms"]
    },
];

export default function Skills() {
    return (
        <section id="skills" className="w-full bg-[#FAFAFA] py-24 md:py-32 flex flex-col items-center">
            <div className="max-w-6xl w-full px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-neutral-200 text-xs font-bold text-neutral-400 mb-6 tracking-widest uppercase">
                        What I Work With
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black tracking-tight text-neutral-900 mb-6">
                        Diverse Tech <span className="text-neutral-400">Arsenal</span>
                    </h2>
                    <p className="text-neutral-500 font-medium max-w-xl mx-auto">
                        The tools and technologies I use to bring ideas to life.
                    </p>
                </div>

                {/* MERN Stack Spotlight */}
                <div className="mb-12 p-8 md:p-12 rounded-[2.5rem] bg-white border border-neutral-200 relative overflow-hidden shadow-sm">
                    <div className="absolute inset-0 grid-background opacity-20" />
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-bold text-blue-600 mb-6 uppercase tracking-wider">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                            Full Stack Expertise
                        </div>
                        <h3 className="text-3xl font-black text-neutral-900 mb-12">MERN Stack Developer</h3>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
                            {mernStack.map((tech) => (
                                <TiltCard key={tech.letter} className="w-full">
                                    <motion.div
                                        whileHover={{ y: -5 }}
                                        className="bg-white border border-neutral-100 rounded-3xl p-8 flex flex-col items-center group transition-all hover:bg-neutral-50 hover:border-neutral-200 shadow-sm h-full"
                                    >
                                        <span className="text-6xl font-black text-neutral-900 mb-6 group-hover:scale-110 transition-transform">{tech.letter}</span>
                                        <div className="flex flex-col items-center gap-2">
                                            <tech.icon className="w-4 h-4 text-neutral-400 group-hover:text-neutral-600 transition-colors" />
                                            <span className="text-[10px] font-black tracking-tighter text-neutral-500 group-hover:text-neutral-800 uppercase">{tech.name}</span>
                                        </div>
                                    </motion.div>
                                </TiltCard>
                            ))}
                        </div>
                        
                        <div className="mt-12 flex items-center gap-3 text-neutral-400 text-[10px] font-bold tracking-widest uppercase">
                            <span className="opacity-30">&lt;</span> Building Modern Web Apps <span className="opacity-30">/&gt;</span>
                        </div>
                    </div>
                </div>

                {/* Detailed Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((cat, index) => (
                        <TiltCard 
                            key={cat.title} 
                            className={`${cat.title === "Tools & Concepts" ? "md:col-span-2" : ""}`}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white border border-neutral-200 rounded-[2rem] p-8 group hover:border-neutral-300 transition-all shadow-sm h-full"
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-neutral-50 flex items-center justify-center border border-neutral-100 group-hover:bg-neutral-100 transition-colors">
                                            <cat.icon className="w-5 h-5 text-neutral-600" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-neutral-900 mb-1">{cat.title}</h4>
                                            <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider">{cat.count}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill) => (
                                        <div 
                                            key={skill}
                                            className="px-4 py-2 rounded-xl bg-neutral-50 border border-neutral-100 text-xs font-bold text-neutral-600 flex items-center gap-2 select-none hover:bg-neutral-900 hover:text-white transition-all cursor-default"
                                        >
                                            <Square className="w-2.5 h-2.5 fill-current opacity-20" />
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </TiltCard>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .grid-background {
                    background-image: linear-gradient(to right, #1a1a1a 1px, transparent 1px),
                                    linear-gradient(to bottom, #1a1a1a 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}</style>
        </section>
    );
}
