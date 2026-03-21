"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section id="hero" className="w-full max-w-6xl min-h-[80vh] flex flex-col justify-center items-center text-center relative pt-20">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-8"
            >
                <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-white/50 border border-neutral-200 shadow-sm text-[10px] font-bold tracking-widest text-neutral-500 mb-6 uppercase">
                    👋 Welcome to my portfolio
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-neutral-900 leading-[0.9] text-gradient"
                >
                    I&apos;m <span className="text-blue-600">Rudra</span>.<br className="hidden md:block" />{" "}
                    Building experiences.
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-600 font-medium leading-relaxed"
                >
                    I&apos;m a Full-stack Developer crafting beautiful, highly functional, and user-centric applications using modern web technologies.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10">
                    <Magnetic strength={0.2}>
                        <a href="#projects" className="px-10 py-4 bg-neutral-900 text-white rounded-full font-bold hover:bg-neutral-800 transition-all hover:scale-105 shadow-2xl shadow-neutral-900/10 flex items-center gap-2">
                            View My Work <ArrowRight className="w-4 h-4" />
                        </a>
                    </Magnetic>
                    <div className="flex items-center gap-6 px-8 py-4 bg-white/40 border border-neutral-200 rounded-full backdrop-blur-sm">
                        <Magnetic strength={0.5}><a href="https://github.com" className="text-neutral-500 hover:text-neutral-950 transition-colors block p-2"><Github className="w-5 h-5" /></a></Magnetic>
                        <Magnetic strength={0.5}><a href="https://linkedin.com" className="text-neutral-500 hover:text-blue-600 transition-colors block p-2"><Linkedin className="w-5 h-5" /></a></Magnetic>
                        <Magnetic strength={0.5}><a href="https://twitter.com" className="text-neutral-500 hover:text-sky-500 transition-colors block p-2"><Twitter className="w-5 h-5" /></a></Magnetic>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
