// import React, { useEffect, useState } from 'react';
// import { Mail, Linkedin, Github, Send, ArrowRight } from 'lucide-react';
// import profileImg from '../../assets/profile.png';

// interface TypingAnimationProps {
//     texts: string[];
//     speed?: number;
//     delay?: number;
//     className?: string;
// }

// const TypingAnimation: React.FC<TypingAnimationProps> = ({
//     texts,
//     speed = 100,
//     delay = 2000,
//     className = ""
// }) => {
//     const [displayedText, setDisplayedText] = useState('');
//     const [currentTextIndex, setCurrentTextIndex] = useState(0);
//     const [isDeleting, setIsDeleting] = useState(false);
//     const [charIndex, setCharIndex] = useState(0);

//     useEffect(() => {
//         const currentFullText = texts[currentTextIndex];
        
//         const timeout = setTimeout(() => {
//             if (!isDeleting && charIndex < currentFullText.length) {
//                 setDisplayedText(currentFullText.slice(0, charIndex + 1));
//                 setCharIndex(prev => prev + 1);
//             } else if (isDeleting && charIndex > 0) {
//                 setDisplayedText(currentFullText.slice(0, charIndex - 1));
//                 setCharIndex(prev => prev - 1);
//             } else if (!isDeleting && charIndex === currentFullText.length) {
//                 setTimeout(() => setIsDeleting(true), delay);
//             } else {
//                 setIsDeleting(false);
//                 setCurrentTextIndex((prev) => (prev + 1) % texts.length);
//             }
//         }, isDeleting ? speed / 2 : speed);

//         return () => clearTimeout(timeout);
//     }, [charIndex, isDeleting, currentTextIndex, texts, speed, delay]);

//     return (
//         <span className={className}>
//             <span className="text-purple-400">{displayedText}</span>
//             <span className="animate-pulse ml-1 border-r-2 border-purple-500">&nbsp;</span>
//         </span>
//     );
// };

// const Hero = () => {
//     const scrollToProjects = () => {
//         const projectsSection = document.getElementById('projects');
//         if (projectsSection) {
//             projectsSection.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#030014] py-20 px-6">
//             {/* Background Glows */}
//             <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[120px] rounded-full" />
//             <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full" />

//             <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
//                 {/* Left Content */}
//                 <div className="text-left space-y-8">
//                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium w-fit">
//                         <span className="relative flex h-2 w-2">
//                             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                             <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
//                         </span>
//                         AVAILABLE FOR WORK
//                     </div>

//                     <div className="space-y-3">
//                         <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
//                             Sainsa Rethmi <br />
//                             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
//                                 Thennakoon
//                             </span>
//                         </h1>
//                         <h2 className="text-2xl md:text-4xl font-semibold text-gray-300">
//                             <TypingAnimation 
//                                 texts={["Full-Stack Developer", "UI/UX Designer", "Web Developer", "Problem Solver"]} 
//                                 speed={80} 
//                             />
//                         </h2>
//                     </div>

//                     <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
//                         Passionate about crafting <span className="text-white font-medium">exceptional digital experiences</span>. 
//                         I blend technical expertise with design sensibility to build scalable, user-centric applications.
//                     </p>

//                     <div className="flex flex-col gap-6">
//                         {/* Primary Action Button */}
//                         <button 
//                             onClick={scrollToProjects}
//                             className="group w-fit px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex items-center gap-3 shadow-lg shadow-indigo-500/25 active:scale-95"
//                         >
//                             View Projects
//                             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                         </button>

//                         {/* Social Links Section */}
//                         <div className="flex items-center gap-5 pt-2">
//                             <a 
//                                 href="https://www.linkedin.com/in/sainsa-rethmi-thennakoon-238a54291/" 
//                                 target="_blank" 
//                                 rel="noopener noreferrer"
//                                 className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all shadow-sm"
//                                 title="LinkedIn"
//                             >
//                                 <Linkedin className="w-6 h-6" />
//                             </a>
//                             <a 
//                                 href="https://github.com/Rethmi" 
//                                 target="_blank" 
//                                 rel="noopener noreferrer"
//                                 className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all shadow-sm"
//                                 title="GitHub"
//                             >
//                                 <Github className="w-6 h-6" />
//                             </a>
//                             <a 
//                                 href="mailto:reththennakoon.edu@gmail.com" 
//                                 className="p-3 bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-purple-400 hover:border-purple-400/50 hover:bg-purple-400/10 transition-all shadow-sm"
//                                 title="Email"
//                             >
//                                 <Mail className="w-6 h-6" />
//                             </a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Image Section */}
//                 <div className="relative flex justify-center lg:justify-end">
//                     <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
//                         {/* Decorative Background Glow for Image */}
//                         <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-[2.5rem] rotate-6 scale-105 blur-sm" />
                        
//                         {/* Main Image Container */}
//                         <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0a0a16] shadow-2xl z-10">
//                             <img 
//                                 src={profileImg} 
//                                 alt="Sainsa Rethmi Thennakoon" 
//                                 className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
//                             />
                            
//                             {/* Subtle Overlay Gradient */}
//                             <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/40 to-transparent pointer-events-none" />
//                         </div>

//                         {/* Visual Accent - Small Floating Element */}
//                         <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-500/10 backdrop-blur-xl border border-white/10 rounded-2xl z-20 flex items-center justify-center animate-pulse">
//                             <div className="text-center">
//                                 <p className="text-indigo-400 font-bold text-xl">2+</p>
//                                 <p className="text-[10px] text-gray-400 uppercase">Years Exp.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;
import React, { useEffect, useState } from 'react';
import { Mail, Linkedin, Github, ArrowRight } from 'lucide-react';
import profileImg from '../../assets/profile.png';

interface TypingAnimationProps {
    texts: string[];
    speed?: number;
    delay?: number;
    className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({
    texts,
    speed = 100,
    delay = 2000,
    className = ""
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentFullText = texts[currentTextIndex];
        
        const timeout = setTimeout(() => {
            if (!isDeleting && charIndex < currentFullText.length) {
                setDisplayedText(currentFullText.slice(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setDisplayedText(currentFullText.slice(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            } else if (!isDeleting && charIndex === currentFullText.length) {
                setTimeout(() => setIsDeleting(true), delay);
            } else {
                setIsDeleting(false);
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            }
        }, isDeleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentTextIndex, texts, speed, delay]);

    return (
        <span className={className}>
            <span className="text-indigo-600 dark:text-purple-400">{displayedText}</span>
            <span className="animate-pulse ml-1 border-r-2 border-indigo-600 dark:border-purple-500">&nbsp;</span>
        </span>
    );
};

const Hero = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-[#030014] py-20 px-6 transition-colors duration-500">
            {/* Background Glows - Adjusted for Light Mode */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-200/40 dark:bg-purple-900/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-200/40 dark:bg-blue-900/20 blur-[120px] rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Content */}
                <div className="text-left space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-medium w-fit">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        AVAILABLE FOR WORK
                    </div>

                    <div className="space-y-3">
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white tracking-tight">
                            Sainsa Rethmi <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
                                Thennakoon
                            </span>
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-semibold text-slate-700 dark:text-gray-300">
                            <TypingAnimation 
                                texts={["Full-Stack Developer", "UI/UX Designer", "Web Developer", "Problem Solver"]} 
                                speed={80} 
                            />
                        </h2>
                    </div>

                    <p className="text-slate-600 dark:text-gray-400 max-w-lg text-lg leading-relaxed">
                        Passionate about crafting <span className="text-slate-900 dark:text-white font-medium">exceptional digital experiences</span>. 
                        I blend technical expertise with design sensibility to build scalable, user-centric applications.
                    </p>

                    <div className="flex flex-col gap-6">
                        <button 
                            onClick={scrollToProjects}
                            className="group w-fit px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all flex items-center gap-3 shadow-lg shadow-indigo-500/25 active:scale-95"
                        >
                            View Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <div className="flex items-center gap-5 pt-2">
                            <SocialIcon 
                                href="https://www.linkedin.com/in/sainsa-rethmi-thennakoon-238a54291/" 
                                icon={<Linkedin className="w-6 h-6" />} 
                                hoverClass="hover:text-blue-600 hover:border-blue-600/50 hover:bg-blue-600/10"
                                title="LinkedIn"
                            />
                            <SocialIcon 
                                href="https://github.com/Rethmi" 
                                icon={<Github className="w-6 h-6" />} 
                                hoverClass="hover:text-slate-900 dark:hover:text-white hover:border-slate-900/50 dark:hover:border-white/50 hover:bg-slate-900/10 dark:hover:bg-white/10"
                                title="GitHub"
                            />
                            <SocialIcon 
                                href="mailto:reththennakoon.edu@gmail.com" 
                                icon={<Mail className="w-6 h-6" />} 
                                hoverClass="hover:text-purple-600 hover:border-purple-600/50 hover:bg-purple-600/10"
                                title="Email"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Image Section */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                        {/* Decorative Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 dark:from-purple-500/30 dark:to-blue-500/30 rounded-[2.5rem] rotate-6 scale-105 blur-sm" />
                        
                        {/* Main Image Container */}
                        <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0a0a16] shadow-2xl z-10">
                            <img 
                                src={profileImg} 
                                alt="Sainsa Rethmi Thennakoon" 
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 dark:from-[#030014]/40 to-transparent pointer-events-none" />
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/80 dark:bg-indigo-500/10 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl z-20 flex items-center justify-center animate-pulse shadow-xl">
                            <div className="text-center">
                                <p className="text-indigo-600 dark:text-indigo-400 font-bold text-xl">2+</p>
                                <p className="text-[10px] text-slate-500 dark:text-gray-400 uppercase font-semibold">Years Exp.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Sub-component for Social Icons to keep code clean
const SocialIcon = ({ href, icon, hoverClass, title }: { href: string, icon: React.ReactNode, hoverClass: string, title: string }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-slate-500 dark:text-gray-400 transition-all shadow-sm ${hoverClass}`}
        title={title}
    >
        {icon}
    </a>
);

export default Hero;