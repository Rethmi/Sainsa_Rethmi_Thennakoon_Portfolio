'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Layers, Figma } from 'lucide-react';

interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    location: string;
    type: string;
    description: string;
    responsibilities: string[];
    skills: string[];
    highlights: { label: string; value: string }[];
}

const experiences: ExperienceItem[] = [
    {
        role: "Associate UI/UX Engineer",
        company: "EonTech Global Group (Pvt) Ltd",
        period: "02 April 2026 – 02 October 2026",
        location: "Galle, Sri Lanka",
        type: "Professional Experience",
        description: "Contributed as an Associate UI/UX Engineer, spearheading user-centered design initiatives for enterprise applications, crafting responsive design systems, and bridging design with frontend engineering.",
        responsibilities: [
            "Designed responsive web and mobile interfaces, intuitive user flows, and wireframes using Figma.",
            "Collaborated with engineering teams to ensure pixel-perfect design implementation and visual consistency.",
            "Conducted user research and usability testing to improve user satisfaction and refine product features."
        ],
        skills: [
            "Figma",
            "Design Systems",
            "Wireframing & Prototyping",
            "User Research",
            "Usability Testing",
            "Responsive Web & Mobile",
            "Information Architecture",
            "Cross-Functional Collaboration"
        ],
        highlights: [
            { label: "Core Tool", value: "Figma" },
            { label: "Focus", value: "Web & Mobile UI/UX" },
            { label: "Methodology", value: "User-Centered Design" }
        ]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
            {/* Background Decorative Blurs */}
            <div className="absolute top-1/3 left-0 w-80 h-80 bg-indigo-500/10 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 dark:border-cyan-500/30 bg-indigo-500/10 dark:bg-cyan-500/10 text-indigo-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Briefcase className="w-3.5 h-3.5" />
                        Career Milestones
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Work <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 bg-clip-text text-transparent">Experience</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 mx-auto rounded-full mb-4" />
                    <p className="text-slate-600 dark:text-gray-400 max-w-xl mx-auto text-base">
                        Professional industry contributions where design thinking, user empathy, and engineering collaboration converge.
                    </p>
                </motion.div>

                {/* Experience Cards / Timeline */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group relative bg-white dark:bg-gray-900/50 border border-slate-200 dark:border-gray-800 rounded-3xl p-8 md:p-10 shadow-xl dark:shadow-2xl hover:border-indigo-500/40 dark:hover:border-cyan-500/40 transition-all duration-300"
                        >
                            {/* Decorative Corner Glow */}
                            <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-tr-3xl pointer-events-none" />

                            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 border-b border-slate-100 dark:border-gray-800/80 pb-8">
                                <div className="space-y-3">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                                            <Briefcase className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                                                {exp.role}
                                            </h3>
                                            <h4 className="text-lg md:text-xl font-semibold text-slate-700 dark:text-gray-200 mt-0.5">
                                                {exp.company}
                                            </h4>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-gray-400 pt-1">
                                        <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-gray-300">
                                            <Calendar className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                                            {exp.period}
                                        </span>
                                        <span className="flex items-center gap-1.5 font-medium">
                                            <MapPin className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                                            {exp.location}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2.5">
                                    <span className="px-4 py-1.5 rounded-full text-xs uppercase font-bold tracking-wider bg-indigo-100 dark:bg-cyan-500/10 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-cyan-500/20">
                                        {exp.type}
                                    </span>
                                    <div className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/20">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        Completed 6-Month Tenure
                                    </div>
                                </div>
                            </div>

                            {/* Summary & Highlights Grid */}
                            <div className="grid lg:grid-cols-3 gap-6 mb-8">
                                <div className="lg:col-span-2">
                                    <p className="text-slate-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                                        {exp.description}
                                    </p>

                                    {/* Key Responsibilities */}
                                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                                        Key Responsibilities &amp; Impact
                                    </h5>
                                    <ul className="space-y-3">
                                        {exp.responsibilities.map((resp, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
                                                <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Metric Highlights & Badges */}
                                <div className="bg-slate-50 dark:bg-gray-800/40 border border-slate-200/80 dark:border-gray-800 p-6 rounded-2xl flex flex-col justify-between gap-4">
                                    <div>
                                        <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-4">
                                            Role Highlights
                                        </h5>
                                        <div className="space-y-4">
                                            {exp.highlights.map((h, i) => (
                                                <div key={i} className="flex justify-between items-center border-b border-slate-200/60 dark:border-gray-700/60 pb-2">
                                                    <span className="text-xs text-slate-500 dark:text-gray-400">{h.label}</span>
                                                    <span className="text-xs font-bold text-slate-800 dark:text-gray-100">{h.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-2">
                                        <div className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-gray-300 bg-white dark:bg-gray-900/60 p-3 rounded-xl border border-slate-200 dark:border-gray-700">
                                            <Figma className="w-4 h-4 text-pink-500" />
                                            <span>Pixel-perfect Figma Hand-off to Dev Teams</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Skills / Tags */}
                            <div className="pt-4 border-t border-slate-100 dark:border-gray-800/80">
                                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-3 flex items-center gap-1.5">
                                    <Layers className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                                    Applied Competencies &amp; Technologies
                                </h5>
                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-gray-800/80 text-slate-700 dark:text-gray-300 border border-slate-200/80 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-cyan-400 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
