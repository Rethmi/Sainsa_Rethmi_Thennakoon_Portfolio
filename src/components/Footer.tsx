'use client';

import React from 'react';
import { 
    Mail, 
    Phone, 
    MapPin, 
    ArrowUp, 
    Github, 
    Linkedin, 
    Sparkles 
} from 'lucide-react';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

     

    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About Me', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'UI/UX Designs', href: '#designs' },
        { label: 'Education', href: '#education' },
        { label: 'Awards & Honors', href: '#awards' },
        { label: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/Rethmi',
            icon: <Github className="w-4 h-4" />,
            hoverColor: 'hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-white/40'
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/in/sainsa-rethmi-thennakoon-238a54291/',
            icon: <Linkedin className="w-4 h-4" />,
            hoverColor: 'hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-500/40'
        },
        {
            name: 'Email',
            href: 'mailto:reththennakoon.edu@gmail.com',
            icon: <Mail className="w-4 h-4" />,
            hoverColor: 'hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-400 dark:hover:border-purple-500/40'
        },
        {
            name: 'WhatsApp',
            href: 'https://wa.me/94704839927',
            icon: <Phone className="w-4 h-4" />,
            hoverColor: 'hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-400 dark:hover:border-emerald-500/40'
        }
    ];

    return (
        <footer className="relative bg-slate-100/90 dark:bg-[#02020a] text-slate-900 dark:text-white border-t border-slate-200 dark:border-white/10 transition-colors duration-500 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/5 dark:bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-pink-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-200/80 dark:border-white/10">
                    
                    {/* Brand & Bio Column (5 cols) */}
                    <div className="lg:col-span-5 space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold text-lg shadow-md shadow-indigo-500/25">
                                SR
                            </div>
                            <div>
                                <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                                    Sainsa Rethmi Thennakoon
                                </h3>
                                <p className="text-xs font-semibold text-indigo-600 dark:text-cyan-400 uppercase tracking-wider">
                                    Aspiring UI/UX Engineer &amp; Full-Stack Developer
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed max-w-md">
                            Crafting intuitive, human-centered digital interfaces and scalable software solutions. Merging visual aesthetic elegance with technical precision to build delightful web and mobile products.
                        </p>

                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span>Available for new projects &amp; collaborations</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-2.5 pt-1">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-gray-400 transition-all duration-300 shadow-sm hover:scale-105 ${social.hoverColor}`}
                                    title={social.name}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Navigation Column (3 cols) */}
                    <div className="lg:col-span-3 space-y-4">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                                Explore
                            </h4>
                        </div>
                        <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs font-medium">
                            {quickLinks.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1.5 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-gray-600 group-hover:bg-indigo-600 dark:group-hover:bg-cyan-400 transition-colors" />
                                        <span>{item.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Get In Touch & Action Column (4 cols) */}
                    <div className="lg:col-span-4 space-y-4">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                            Get In Touch
                        </h4>
                        
                        <p className="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">
                            Have an inspiring project, a design challenge, or just want to connect? Let's build something remarkable together.
                        </p>

                        <div className="space-y-2.5 text-xs">
                            <a 
                                href="mailto:reththennakoon.edu@gmail.com"
                                className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-400 dark:hover:border-cyan-400/50 text-slate-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-cyan-300 transition-all shadow-sm group"
                            >
                                <Mail className="w-4 h-4 text-indigo-600 dark:text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="truncate font-mono">reththennakoon.edu@gmail.com</span>
                            </a>

                            <a 
                                href="tel:+94704839927"
                                className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-emerald-400 dark:hover:border-emerald-400/50 text-slate-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-300 transition-all shadow-sm group"
                            >
                                <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                                <span className="font-mono">+94 70 483 9927</span>
                            </a>

                            <div className="flex items-center gap-3 p-2.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 shadow-sm">
                                <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
                                <span>Bandarawela &amp; Colombo, Sri Lanka</span>
                            </div>
                        </div>

                        {/* Quick Resume Button */}
                        {/* <button
                            onClick={handleDownloadCV}
                            className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-md shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download Resume (PDF)</span>
                        </button> */}
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <p className="text-xs text-slate-500 dark:text-gray-500">
                        © {new Date().getFullYear()} <span className="font-semibold text-slate-700 dark:text-gray-300">Sainsa Rethmi Thennakoon</span>. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="text-xs text-slate-500 dark:text-gray-500 hidden md:inline">
                            Designed with Figma &bull; Built with React &bull; Styled with Tailwind
                        </span>

                        {/* Back to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-indigo-400 dark:hover:border-cyan-400/50 text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-cyan-300 text-xs font-semibold shadow-sm hover:scale-105 active:scale-95 transition-all"
                            aria-label="Back to Top"
                        >
                            <span>Back to Top</span>
                            <ArrowUp className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;