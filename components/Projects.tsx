"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import TiltCard from "./TiltCard";

const projects = [
    {
        title: "Expense Management System",
        desc: "A powerful expense tracking and management application for individuals and teams. Track spending, categorize expenses, generate reports, and maintain financial clarity.",
        tags: ["ReactJS", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        github: "#",
        live: "https://incredible-jelly-891da1.netlify.app/login",
        status: "live"
    },
    {
        title: "E-commerce Platform",
        desc: "A modern, full-stack e-commerce solution with real-time inventory, secure payments, and an intuitive admin dashboard. Built with a focus on performance and user experience.",
        tags: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
        github: "#",
        live: "#",
        status: "maintenance"
    },
    {
        title: "Task Management App",
        desc: "A collaborative task management tool featuring drag-and-drop mechanics, real-time updates, and team workspace support. Includes notifications and priority tracking.",
        tags: ["React", "Firebase", "Framer Motion", "Tailwind CSS"],
        github: "#",
        live: "#",
        status: "maintenance"
    },
    {
        title: "AI Content Generator",
        desc: "An AI-powered application that generates high-quality marketing copy, blog posts, and social media content with a single click using OpenAI APIs.",
        tags: ["Next.js", "OpenAI", "Node.js", "MongoDB"],
        github: "#",
        live: "#",
        status: "maintenance"
    },
];

export default function Projects() {
    const handleProjectClick = (e: React.MouseEvent, project: any) => {
        if (project.status === "maintenance") {
            e.preventDefault();
            alert("This project is currently under maintenance. Please check back later!");
        }
    };

    return (
        <section id="projects" className="w-full max-w-6xl py-24 md:py-32">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-neutral-900 mb-4">
                    Projects
                </h2>
                <p className="text-neutral-500 font-medium tracking-tight">Handpicked selection of my best work</p>
            </motion.div>

            <div className="flex flex-col gap-6">
                {projects.map((project, index) => (
                    <TiltCard key={project.title}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white border border-neutral-100 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row gap-8 md:items-start group hover:border-neutral-200 transition-all shadow-sm relative overflow-hidden h-full"
                        >
                            <div className="absolute inset-0 grid-background opacity-20" />
                            
                            {/* Large Number */}
                            <div className="flex-shrink-0 relative z-10">
                                <span className="text-6xl md:text-8xl font-black text-neutral-100 group-hover:text-neutral-200 transition-colors leading-none select-none tracking-tighter">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0 relative z-10">
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-2xl font-black text-neutral-900 group-hover:text-blue-600 transition-colors tracking-tight">
                                            {project.title}
                                        </h3>
                                        {project.status === "maintenance" && (
                                            <span className="w-fit px-3 py-1 bg-amber-50 border border-amber-100 text-amber-600 text-[8px] font-bold uppercase tracking-widest rounded-full">
                                                Under Maintenance
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex gap-4 flex-shrink-0">
                                        <a
                                            href={project.github}
                                            className="text-neutral-400 hover:text-neutral-900 transition-colors p-2 rounded-full hover:bg-neutral-50"
                                            aria-label="GitHub"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={project.live}
                                            onClick={(e) => handleProjectClick(e, project)}
                                            className={`text-neutral-400 ${project.status === "maintenance" ? "cursor-not-allowed" : "hover:text-blue-600"} transition-colors p-2 rounded-full hover:bg-neutral-50`}
                                            aria-label={project.status === "maintenance" ? "Under Maintenance" : "Live Demo"}
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                                <p className="text-neutral-600 font-medium leading-relaxed mb-8 max-w-2xl">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-1.5 bg-neutral-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </TiltCard>
                ))}
            </div>
        </section>
    );
}
