import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Info, X } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tech: string[];
    category: string;
    githubUrl?: string;
    image: string;
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Tech name එකට අදාල icon එක ගන්නා function එක
    const getTechIcon = (tech: string) => {
        const iconMap: { [key: string]: string } = {
            "React.js": "react",
            "React Native": "react",
            "Node.js": "nodedotjs",
            "Express.js": "express",
            "MongoDB": "mongodb",
            "MySQL": "mysql",
            "Spring Boot": "springboot",
            "JavaScript": "javascript",
            "JavaFX": "openjdk",
            "Hibernate": "hibernate",
            "Python": "python",
            "JWT": "jsonwebtokens",
            "Firebase": "firebase",
            "HTML/CSS": "html5",
            "Java": "openjdk"
        };
        
        const iconName = iconMap[tech] || "codeforces";
        // Light mode එකේදී අඳුරු පාටක් (334155) සහ Dark mode එකේදී ලා පාටක් (67e8f9) පාවිච්චි කරනවා
        return `https://cdn.simpleicons.org/${iconName}/67e8f9`; 
    };

    const projects: Project[] = [
        {
            title: "Hotel Booking System",
            description: "Full-stack hotel booking platform with Spring Boot backend and interactive frontend. Features MySQL integration and JWT authentication.",
            tech: ["Spring Boot", "MySQL", "JavaScript", "JWT"],
            category: "Web",
            githubUrl: "https://github.com/Rethmi/SmartStay_hotel_booking.git",
            image: "/src/assets/hotel_booking.png"
        },
        {
            title: "Art & Craft Gallery",
            description: "Web-based platform for sharing DIY craft ideas with React.js frontend and Node.js backend.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
            category: "Web",
            githubUrl: "https://github.com/Rethmi/HandSpireCollective_Frontend.git",
            image: "/src/assets/craft.png"
        },
        {
            title: "Streakify Mobile App",
            description: "Lightweight React Native mobile application for recording daily thoughts and mood tracking.",
            tech: ["React Native", "JavaScript", "Firebase"],
            category: "Mobile",
            githubUrl: "https://github.com/Rethmi/Streakify-MobileApp-AMD_Final_Project-.git",
            image: "/src/assets/habit.png"
        },
        {
            title: "Complaint Management System",
            description: "A desktop system to handle patient registrations, therapy sessions, and secure therapist authentication with Hibernate ORM.",
            tech: ["JavaFX", "MySQL", "Hibernate"],
            category: "Desktop",
            githubUrl: "https://github.com/Rethmi/Complaint-Management-System.git",
            image: "/src/assets/hotel_booking.png"
        },
        {
            title: "BookShop Management System",
            description: "Developed a BookShop Management System to manage books, customers, billing, and inventory efficiently.",
            tech: ["Java", "MySQL"],
            category: "Desktop",
            githubUrl: "https://github.com/Rethmi/BookShop-Management-System-First-semester-final-project-.git",
            image: "/src/assets/book.png"
        },
        {
            title: "Strategic Patient Risk Stratification",
            description: "Predictive risk model using custom Vitality Complexity Index (VCI) to stratify patients into risk categories.",
            tech: ["Python", "Data Science"],
            category: "Data Science",
            githubUrl: "https://github.com/Rethmi/Vitality-Health-Network-V.H.N-Data-Science",
            image: "/src/assets/python.png"
        }
    ];

    return (
        /* Section Background & Text Colors */
        <section id="projects" className="py-24 px-6 bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            /* Card background and border */
                            className="bg-white dark:bg-gray-900/50 border border-slate-200 dark:border-gray-800 rounded-2xl overflow-hidden group hover:border-indigo-500 dark:hover:border-cyan-500/50 transition-all duration-300 shadow-lg dark:shadow-xl"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-slate-900/10 dark:bg-black/40 group-hover:bg-transparent transition-all" />
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl font-bold group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors text-slate-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2">
                                        <a href={project.githubUrl} target="_blank" className="text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                                            <Github size={18}/>
                                        </a>
                                        <button onClick={() => setSelectedProject(project)} className="text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
                                            <Info size={18}/>
                                        </button>
                                    </div>
                                </div>

                                <p className="text-slate-600 dark:text-gray-400 text-sm mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-4 items-center">
                                    {project.tech.map((t, i) => (
                                        <div key={i} className="group/icon relative">
                                            <img 
                                                src={getTechIcon(t)} 
                                                alt={t} 
                                                className="w-5 h-5 grayscale opacity-70 group-hover/icon:grayscale-0 group-hover/icon:opacity-100 transition-all duration-300" 
                                            />
                                            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover/icon:opacity-100 transition-opacity whitespace-nowrap">
                                                {t}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal - Dark/Light compatible */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-900/60 dark:bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
                            className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 p-8 rounded-3xl max-w-2xl w-full shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-3xl font-bold text-indigo-600 dark:text-cyan-400">{selectedProject.title}</h3>
                                <button onClick={() => setSelectedProject(null)} className="text-slate-500 hover:text-red-500"><X size={24}/></button>
                            </div>
                            
                            <p className="text-slate-600 dark:text-gray-300 mb-6">{selectedProject.description}</p>
                            
                            <div className="flex flex-wrap gap-6 mb-8 p-4 bg-slate-100 dark:bg-gray-800/30 rounded-xl">
                                {selectedProject.tech.map((t, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2">
                                        <img src={getTechIcon(t)} alt={t} className="w-8 h-8" />
                                        <span className="text-[10px] text-slate-500 dark:text-gray-400 font-medium">{t}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <button onClick={() => setSelectedProject(null)} className="px-6 py-2 bg-slate-200 dark:bg-gray-800 text-slate-700 dark:text-white rounded-lg hover:bg-slate-300 dark:hover:bg-gray-700 transition-colors">
                                    Close
                                </button>
                                <a href={selectedProject.githubUrl} target="_blank" className="px-6 py-2 bg-indigo-600 dark:bg-cyan-500 text-white dark:text-black font-bold rounded-lg hover:bg-indigo-700 dark:hover:bg-cyan-400 transition-colors flex items-center gap-2">
                                    <Github size={18}/> GitHub
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;