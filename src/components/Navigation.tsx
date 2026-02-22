// 'use client';

// import { useState, useEffect } from 'react';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
// import { FiGithub, FiLinkedin, FiMenu, FiX, FiMail } from 'react-icons/fi';

// // Props receive කරන්න interface එකක් දාන්න (TypeScript නම්)
// export default function Navigation({ scrollToSection, isMobileMenuOpen, setIsMobileMenuOpen }: any) {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const { scrollY } = useScroll();

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 20);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const navLinks = [
//         { href: 'home', label: 'Home' }, // මෙතන # අයින් කරන්න පහසුවට
//         { href: 'about', label: 'About' },
//         { href: 'skills', label: 'Skills' },
//         { href: 'projects', label: 'Projects' },
//         { href: 'education', label: 'Education' },
//         { href: 'awards', label: 'Awards' },
//         { href: 'contact', label: 'Contact' },
//     ];

//     // ... socialLinks variable එක එහෙමම තියන්න ...

//     return (
//         <motion.nav 
//            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         isScrolled 
//         ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-cyan-500/10' // මෙන්න මෙතන (Deep Blue Background)
//         : 'bg-transparent'
//     }`}
//         >
//             <div className="max-w-7xl mx-auto px-6">
//                 <div className="flex items-center justify-between h-20">
                    
//                     {/* Logo - click කරාම home එකට යන්න */}
//                     <motion.a
//                         onClick={() => scrollToSection('home')}
//                         className="flex items-center gap-3 group cursor-pointer"
//                         whileHover={{ scale: 1.02 }}
//                     >
//                         <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
//                             SR
//                         </div>
//                         <span className="text-xl font-bold text-white hidden sm:block">Portfolio</span>
//                     </motion.a>

//                     {/* Desktop Navigation */}
//                     <div className="hidden md:flex items-center gap-2">
//                         <div className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 p-1.5 rounded-full">
//                             {navLinks.map((link) => (
//                                 <button // <a> වෙනුවට <button> පාවිච්චි කිරීම වඩාත් සුදුසුයි smooth scroll වලදී
//                                     key={link.href}
//                                     onClick={() => scrollToSection(link.href)}
//                                     className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all rounded-full hover:bg-white/10 relative group"
//                                 >
//                                     {link.label}
//                                     <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-1/2" />
//                                 </button>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Mobile Menu Toggle */}
//                     <button
//                         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                         className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
//                     >
//                         {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Menu Overlay */}
//             <AnimatePresence>
//                 {isMobileMenuOpen && (
//                     <motion.div 
//                         // ... animation props ...
//                         className="md:hidden absolute top-20 left-0 right-0 bg-[#030014]/95 backdrop-blur-2xl border-b border-white/10"
//                     >
//                         <div className="p-6 space-y-3">
//                             {navLinks.map((link) => (
//                                 <button
//                                     key={link.href}
//                                     onClick={() => scrollToSection(link.href)} // Function එක call කරනවා
//                                     className="block w-full text-left p-4 text-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
//                                 >
//                                     {link.label}
//                                 </button>
//                             ))}
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </motion.nav>
//     );
// }

'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'; // Icons එකතු කරා

export default function Navigation({ scrollToSection, isMobileMenuOpen, setIsMobileMenuOpen, theme, toggleTheme }: any) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: 'home', label: 'Home' },
        { href: 'about', label: 'About' },
        { href: 'skills', label: 'Skills' },
        { href: 'projects', label: 'Projects' },
        { href: 'education', label: 'Education' },
        { href: 'awards', label: 'Awards' },
        { href: 'contact', label: 'Contact' },
    ];

    return (
        <motion.nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                ? 'bg-white/80 dark:bg-[#030712]/80 backdrop-blur-xl border-b border-gray-200 dark:border-cyan-500/10' 
                : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    
                    {/* Logo */}
                    <motion.a
                        onClick={() => scrollToSection('home')}
                        className="flex items-center gap-3 group cursor-pointer"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                            SR
                        </div>
                        <span className="text-xl font-bold text-slate-900 dark:text-white hidden sm:block">Portfolio</span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        <div className="flex items-center bg-gray-100 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 p-1.5 rounded-full">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    className="px-5 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white transition-all rounded-full hover:bg-gray-200 dark:hover:bg-white/10 relative group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-1/2" />
                                </button>
                            ))}
                        </div>

                        {/* Theme Toggle Button - Desktop */}
                        <button
                            onClick={toggleTheme}
                            className="p-3 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-yellow-400 hover:scale-110 transition-transform"
                        >
                            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu & Theme Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-yellow-400"
                        >
                            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                        
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white"
                        >
                            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-20 left-0 right-0 bg-white/95 dark:bg-[#030014]/95 backdrop-blur-2xl border-b border-gray-200 dark:border-white/10"
                    >
                        <div className="p-6 space-y-3">
                            {navLinks.map((link) => (
                                <button
                                    key={link.href}
                                    onClick={() => scrollToSection(link.href)}
                                    className="block w-full text-left p-4 text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-2xl transition-all"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}