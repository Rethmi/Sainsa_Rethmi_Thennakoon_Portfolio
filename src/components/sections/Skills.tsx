// import React from 'react';
// import { motion, type Variants,   } from 'framer-motion';
// import { 
//     Code2, Braces, Terminal, Cpu, 
//     Globe, Layout, Smartphone, Palette, 
//     Database, HardDrive, Github,
//     Server, Coffee, Zap, Binary, Layers, Sparkles
// } from "lucide-react";

// // Variants type-safe widiyata define kala (Errors nathi wenna)
// const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//         opacity: 1,
//         transition: { 
//             staggerChildren: 0.15,
//             delayChildren: 0.2 
//         }
//     }
// };

// const cardVariants: Variants = {
//     hidden: { 
//         y: 50, 
//         opacity: 0,
//         scale: 0.9
//     },
//     visible: { 
//         y: 0, 
//         opacity: 1,
//         scale: 1,
//         transition: { 
//             type: "spring", 
//             stiffness: 100, 
//             damping: 12 
//         }
//     }
// };

// const Skills: React.FC = () => {
//     const skillGroups = [
//         {
//             title: "Languages",
//             icon: <Code2 className="w-7 h-7 text-cyan-400" />,
//             color: "group-hover:border-cyan-500/50",
//             glow: "bg-cyan-500/10",
//             skills: [
//                 { name: "Java", icon: <Coffee className="w-4 h-4 text-orange-400" /> },
//                 { name: "JavaScript", icon: <span className="text-[10px] font-bold text-yellow-400">JS</span> },
//                 { name: "TypeScript", icon: <Braces className="w-4 h-4 text-blue-400" /> },
//                 { name: "Python", icon: <Terminal className="w-4 h-4 text-green-400" /> },
//                 { name: "SQL", icon: <Database className="w-4 h-4 text-gray-400" /> },
//             ]
//         },
//         {
//             title: "Frontend",
//             icon: <Layout className="w-7 h-7 text-blue-400" />,
//             color: "group-hover:border-blue-500/50",
//             glow: "bg-blue-500/10",
//             skills: [
//                 { name: "React", icon: <Zap className="w-4 h-4 text-cyan-400" /> },
//                 { name: "React Native", icon: <Smartphone className="w-4 h-4 text-blue-300" /> },
//                 { name: "Tailwind", icon: <Palette className="w-4 h-4 text-teal-400" /> },
//                 { name: "JavaFX", icon: <Globe className="w-4 h-4 text-orange-400" /> },
//                 { name: "Bootstrap", icon: <Layers className="w-4 h-4 text-purple-500" /> },
//             ]
//         },
//         {
//             title: "Backend",
//             icon: <Server className="w-7 h-7 text-indigo-400" />,
//             color: "group-hover:border-indigo-500/50",
//             glow: "bg-indigo-500/10",
//             skills: [
//                 { name: "Spring Boot", icon: <Cpu className="w-4 h-4 text-green-500" /> },
//                 { name: "Node.js", icon: <Zap className="w-4 h-4 text-green-400" /> },
//                 { name: "Express.js", icon: <Binary className="w-4 h-4 text-gray-400" /> },
//             ]
//         },
//         {
//             title: "Tools & DB",
//             icon: <HardDrive className="w-7 h-7 text-emerald-400" />,
//             color: "group-hover:border-emerald-500/50",
//             glow: "bg-emerald-500/10",
//             skills: [
//                 { name: "MySQL", icon: <Database className="w-4 h-4 text-blue-500" /> },
//                 { name: "MongoDB", icon: <HardDrive className="w-4 h-4 text-green-600" /> },
//                 { name: "Git & GitHub", icon: <Github className="w-4 h-4 text-white" /> },
//             ]
//         }
//     ];

//     return (
//         <section id="skills" className="py-24 px-6 relative bg-[#020617] overflow-hidden min-h-screen flex items-center">
//             {/* --- Animated Background Glows --- */}
//             <div className="absolute inset-0 z-0 pointer-events-none">
//                 <motion.div 
//                     animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
//                     transition={{ duration: 8, repeat: Infinity }}
//                     className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[130px] rounded-full" 
//                 />
//                 <motion.div 
//                     animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
//                     transition={{ duration: 10, repeat: Infinity, delay: 1 }}
//                     className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/20 blur-[130px] rounded-full" 
//                 />
//             </div>

//             <div className="max-w-7xl mx-auto relative z-10 w-full">
//                 {/* --- Section Header --- */}
//                 <div className="text-center mb-20">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         className="space-y-4"
//                     >
//                         <div className="flex items-center justify-center gap-2 mb-2">
//                             <Sparkles className="w-5 h-5 text-blue-500" />
//                             <span className="text-blue-500 font-mono tracking-[0.3em] uppercase text-xs font-bold">My Abilities</span>
//                         </div>
//                         <h2 className="text-4xl md:text-5xl font-[900] tracking-tight text-white uppercase">
//     Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Expertise</span>
// </h2>
//                         <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full" />
//                     </motion.div>
//                 </div>

//                 {/* --- Skills Grid --- */}
//                 <motion.div 
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//                 >
//                     {skillGroups.map((group, idx) => (
//                         <motion.div
//                             key={idx}
//                             variants={cardVariants}
//                             whileHover={{ y: -15 }}
//                             className="group relative"
//                         >
//                             {/* Card Outer Glow on Hover */}
//                             <div className={`absolute inset-0 ${group.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] blur-2xl`} />

//                             <div className={`relative h-full p-8 bg-[#0f172a]/40 border border-white/5 rounded-[2.5rem] backdrop-blur-xl transition-all duration-500 ${group.color} shadow-2xl overflow-hidden`}>
                                
//                                 {/* Card Header Overlay Animation */}
//                                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

//                                 <div className="mb-8 w-16 h-16 flex items-center justify-center bg-slate-900/80 rounded-2xl border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-black/40">
//                                     {group.icon}
//                                 </div>

//                                 <h3 className="text-xl font-extrabold text-white mb-8 tracking-widest uppercase border-b border-white/5 pb-3">
//                                     {group.title}
//                                 </h3>

//                                 <div className="space-y-4">
//                                     {group.skills.map((skill, sIdx) => (
//                                         <motion.div 
//                                             key={sIdx}
//                                             whileHover={{ x: 8, backgroundColor: "rgba(255,255,255,0.05)" }}
//                                             className="flex items-center gap-4 p-3 rounded-xl bg-black/20 border border-white/5 hover:border-white/10 transition-all cursor-default group/skill"
//                                         >
//                                             <div className="w-8 h-8 flex items-center justify-center bg-slate-900 rounded-lg group-hover/skill:scale-110 transition-transform">
//                                                 {skill.icon}
//                                             </div>
//                                             <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors tracking-wide">
//                                                 {skill.name}
//                                             </span>
//                                         </motion.div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Skills;
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
    Code2, Braces, Terminal, Cpu, 
    Globe, Layout, Smartphone, Palette, 
    Database, HardDrive, Github,
    Server, Coffee, Zap, Binary, Layers, Sparkles
} from "lucide-react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { 
            staggerChildren: 0.15,
            delayChildren: 0.2 
        }
    }
};

const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: { 
        y: 0, 
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 100, damping: 12 }
    }
};

const Skills: React.FC = () => {
    const skillGroups = [
        {
            title: "Languages",
            icon: <Code2 className="w-7 h-7 text-indigo-600 dark:text-cyan-400" />,
            color: "group-hover:border-indigo-500/50 dark:group-hover:border-cyan-500/50",
            glow: "bg-indigo-500/10 dark:bg-cyan-500/10",
            skills: [
                { name: "Java", icon: <Coffee className="w-4 h-4 text-orange-500" /> },
                { name: "JavaScript", icon: <span className="text-[10px] font-bold text-yellow-600 dark:text-yellow-400">JS</span> },
                { name: "TypeScript", icon: <Braces className="w-4 h-4 text-blue-600 dark:text-blue-400" /> },
                { name: "Python", icon: <Terminal className="w-4 h-4 text-green-600 dark:text-green-400" /> },
                { name: "SQL", icon: <Database className="w-4 h-4 text-slate-500 dark:text-gray-400" /> },
            ]
        },
        {
            title: "Frontend",
            icon: <Layout className="w-7 h-7 text-blue-600 dark:text-blue-400" />,
            color: "group-hover:border-blue-500/50",
            glow: "bg-blue-500/10",
            skills: [
                { name: "React", icon: <Zap className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> },
                { name: "React Native", icon: <Smartphone className="w-4 h-4 text-blue-500 dark:text-blue-300" /> },
                { name: "Tailwind", icon: <Palette className="w-4 h-4 text-teal-600 dark:text-teal-400" /> },
                { name: "JavaFX", icon: <Globe className="w-4 h-4 text-orange-600 dark:text-orange-400" /> },
                { name: "Bootstrap", icon: <Layers className="w-4 h-4 text-purple-600 dark:text-purple-500" /> },
            ]
        },
        {
            title: "Backend",
            icon: <Server className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />,
            color: "group-hover:border-indigo-500/50",
            glow: "bg-indigo-500/10",
            skills: [
                { name: "Spring Boot", icon: <Cpu className="w-4 h-4 text-green-600 dark:text-green-500" /> },
                { name: "Node.js", icon: <Zap className="w-4 h-4 text-green-600 dark:text-green-400" /> },
                { name: "Express.js", icon: <Binary className="w-4 h-4 text-slate-500 dark:text-gray-400" /> },
            ]
        },
        {
            title: "Tools & DB",
            icon: <HardDrive className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />,
            color: "group-hover:border-emerald-500/50",
            glow: "bg-emerald-500/10",
            skills: [
                { name: "MySQL", icon: <Database className="w-4 h-4 text-blue-600 dark:text-blue-500" /> },
                { name: "MongoDB", icon: <HardDrive className="w-4 h-4 text-green-700 dark:text-green-600" /> },
                { name: "Git & GitHub", icon: <Github className="w-4 h-4 text-slate-800 dark:text-white" /> },
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 px-6 relative bg-slate-50 dark:bg-[#020617] overflow-hidden min-h-screen flex items-center transition-colors duration-500">
            {/* --- Animated Background Glows --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-300/30 dark:bg-blue-600/20 blur-[130px] rounded-full" 
                />
                <motion.div 
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-300/30 dark:bg-cyan-600/20 blur-[130px] rounded-full" 
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                {/* --- Section Header --- */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <Sparkles className="w-5 h-5 text-indigo-600 dark:text-blue-500" />
                            <span className="text-indigo-600 dark:text-blue-500 font-mono tracking-[0.3em] uppercase text-xs font-bold">My Abilities</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-[900] tracking-tight text-slate-900 dark:text-white uppercase">
                            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-blue-400 dark:to-cyan-400">Expertise</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-indigo-600 dark:bg-blue-600 mx-auto rounded-full" />
                    </motion.div>
                </div>

                {/* --- Skills Grid --- */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skillGroups.map((group, idx) => (
                        <motion.div
                            key={idx}
                            variants={cardVariants}
                            whileHover={{ y: -15 }}
                            className="group relative"
                        >
                            <div className={`absolute inset-0 ${group.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] blur-2xl`} />

                            <div className={`relative h-full p-8 bg-white/70 dark:bg-[#0f172a]/40 border border-slate-200 dark:border-white/5 rounded-[2.5rem] backdrop-blur-xl transition-all duration-500 ${group.color} shadow-xl dark:shadow-2xl overflow-hidden`}>
                                
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 dark:via-blue-500 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                                <div className="mb-8 w-16 h-16 flex items-center justify-center bg-slate-100 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                                    {group.icon}
                                </div>

                                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-widest uppercase border-b border-slate-100 dark:border-white/5 pb-3">
                                    {group.title}
                                </h3>

                                <div className="space-y-4">
                                    {group.skills.map((skill, sIdx) => (
                                        <motion.div 
                                            key={sIdx}
                                            whileHover={{ x: 8, backgroundColor: "rgba(99, 102, 241, 0.05)" }}
                                            className="flex items-center gap-4 p-3 rounded-xl bg-slate-50/50 dark:bg-black/20 border border-slate-200/50 dark:border-white/5 hover:border-indigo-500/30 dark:hover:border-white/10 transition-all cursor-default group/skill shadow-sm dark:shadow-none"
                                        >
                                            <div className="w-8 h-8 flex items-center justify-center bg-white dark:bg-slate-900 rounded-lg group-hover/skill:scale-110 transition-transform shadow-sm">
                                                {skill.icon}
                                            </div>
                                            <span className="text-sm font-bold text-slate-600 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors tracking-wide">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;