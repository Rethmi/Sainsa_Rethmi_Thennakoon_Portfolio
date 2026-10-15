'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

interface NavigationProps {
    activeSection?: string;
    scrollToSection: (id: string) => void;
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
    theme: string;
    toggleTheme: () => void;
}

export default function Navigation({ 
    activeSection = 'home',
    scrollToSection, 
    isMobileMenuOpen, 
    setIsMobileMenuOpen, 
    theme, 
    toggleTheme 
}: NavigationProps) {
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
        { href: 'experience', label: 'Experience' },
        { href: 'projects', label: 'Projects' },
        { href: 'designs', label: 'UI/UX Designs' },
        { href: 'education', label: 'Education' },
        { href: 'awards', label: 'Awards & Achievements' },
        { href: 'contact', label: 'Contact' },
    ];

    return (
        <motion.nav 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                ? 'bg-white/90 dark:bg-[#030712]/90 backdrop-blur-xl border-b border-gray-200 dark:border-cyan-500/10 shadow-sm dark:shadow-none' 
                : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    
                    {/* Logo */}
                    <motion.a
                        onClick={() => scrollToSection('home')}
                        className="flex items-center gap-3 group cursor-pointer shrink-0"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-indigo-500/20">
                            SR
                        </div>
                        <span className="text-xl font-bold text-slate-900 dark:text-white hidden sm:block tracking-tight">
                            Portfolio
                        </span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center gap-4">
                        <div className="flex items-center bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200/80 dark:border-white/10 p-1.5 rounded-full shadow-inner dark:shadow-none">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href;
                                return (
                                    <button
                                        key={link.href}
                                        onClick={() => scrollToSection(link.href)}
                                        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all relative group whitespace-nowrap ${
                                            isActive
                                                ? 'text-indigo-600 dark:text-cyan-300 font-semibold bg-white dark:bg-white/10 shadow-sm'
                                                : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-200/60 dark:hover:bg-white/10'
                                        }`}
                                    >
                                        {link.label}
                                        <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 bg-indigo-500 dark:bg-cyan-400 transition-all rounded-full ${
                                            isActive ? 'w-1/2' : 'w-0 group-hover:w-1/3'
                                        }`} />
                                    </button>
                                );
                            })}
                        </div>

                        {/* Theme Toggle Button - Desktop */}
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-yellow-400 hover:scale-110 transition-transform shadow-sm"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </button>
                    </div>

                    {/* Compact Tablet Navigation (1024px - 1279px) */}
                    <div className="hidden lg:flex xl:hidden items-center gap-3">
                        <div className="flex items-center bg-gray-100/90 dark:bg-white/5 backdrop-blur-md border border-gray-200/80 dark:border-white/10 p-1 rounded-full">
                            {navLinks.slice(0, 6).map((link) => {
                                const isActive = activeSection === link.href;
                                return (
                                    <button
                                        key={link.href}
                                        onClick={() => scrollToSection(link.href)}
                                        className={`px-2.5 py-1 text-[11px] font-medium rounded-full transition-all ${
                                            isActive
                                                ? 'text-indigo-600 dark:text-cyan-300 font-semibold bg-white dark:bg-white/10 shadow-sm'
                                                : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white'
                                        }`}
                                    >
                                        {link.label}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-yellow-400"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
                        </button>

                        <button
                            onClick={() => setIsMobileMenuOpen((prev: boolean) => !prev)}
                            className="p-2 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white"
                            aria-label="Open More Menu"
                        >
                            {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu & Theme Toggle */}
                    <div className="flex items-center gap-3 lg:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-yellow-400"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                        
                        <button
                            onClick={() => setIsMobileMenuOpen((prev: boolean) => !prev)}
                            className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-slate-900 dark:text-white"
                            aria-label="Open Navigation Menu"
                        >
                            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile / Tablet Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="xl:hidden absolute top-20 left-0 right-0 bg-white/95 dark:bg-[#030014]/95 backdrop-blur-2xl border-b border-gray-200 dark:border-white/10 max-h-[calc(100vh-5rem)] overflow-y-auto shadow-2xl"
                    >
                        <div className="p-6 space-y-2">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href;
                                return (
                                    <button
                                        key={link.href}
                                        onClick={() => scrollToSection(link.href)}
                                        className={`flex items-center justify-between w-full text-left p-3.5 text-base font-medium rounded-2xl transition-all ${
                                            isActive
                                                ? 'text-indigo-600 dark:text-cyan-300 bg-indigo-50 dark:bg-white/10 font-semibold'
                                                : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                                        }`}
                                    >
                                        <span>{link.label}</span>
                                        {isActive && (
                                            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-cyan-400" />
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}