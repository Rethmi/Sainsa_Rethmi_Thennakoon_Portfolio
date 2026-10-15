'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, ExternalLink, Eye, X, Figma, Sparkles, Layers, ArrowRight } from 'lucide-react';

interface DesignProject {
    id: string;
    title: string;
    category: 'All' | 'Web UI' | 'Mobile App' | 'Dashboard';
    previewImage: string;
    tagline: string;
    description: string;
    longDescription: string;
    tools: string[];
    deliverables: string[];
    figmaUrl: string;
    featured: boolean;
}

const designs: DesignProject[] = [
    {
        id: "eontech-website-redesign",
        title: "EonTech Company Website Redesign",
        category: "Web UI",
        previewImage: "/assets/designs/eontech-redesign.svg",
        tagline: "Corporate digital transformation & modern brand elevation",
        description: "Modern company website redesign for EonTech Global Group, elevating visual identity, responsive navigation, service presentation, and high-conversion client touchpoints.",
        longDescription: "End-to-end redesign of the corporate web experience for EonTech Global Group. Features a modern dark-tech visual language, high-contrast typography, interactive enterprise service matrices, client trust validation, and responsive layouts crafted with Figma auto-layout and interactive prototyping.",
        tools: ["Figma", "Auto Layout 5.0", "Design Tokens", "Interactive Prototype"],
        deliverables: ["Full Website Redesign", "Mobile & Desktop Breakpoints", "Interactive Figma Prototype", "Design Component System"],
        figmaUrl: "https://www.figma.com/proto/f97ZH57TZggEqRcq126Dmo/Redesign-Eontech?t=FMkogq6694BfRxda-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2",
        featured: true
    },
    {
        id: "architect-studio-landing-page",
        title: "Architect Studio Landing Page Design",
        category: "Web UI",
        previewImage: "/assets/designs/architect-studio-design.svg",
        tagline: "Immersive architectural showcase with dynamic animations",
        description: "High-end architectural studio landing page design, featuring interactive project showcases, bespoke animations, and spatial aesthetics.",
        longDescription: "A minimalist, spatial-first landing page crafted for an elite architectural studio. Features bespoke micro-animations, fluid layout transitions, dynamic project monographs, and immersive portfolio walkthroughs built in Figma with Smart Animate.",
        tools: ["Figma", "Smart Animate", "Interactive Components", "Spatial Layouts"],
        deliverables: ["Animated Landing Page", "Dynamic Motion Prototypes", "Editorial Typography Scale", "Interactive Project Viewer"],
        figmaUrl: "https://www.figma.com/proto/JhrWGZffUGFWFpOu4FZD7G/Architect-Studio-Landing-page?t=1KKhalmywAstd8iJ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=31-2&starting-point-node-id=31%3A2",
        featured: true
    },
    {
        id: "healthcare-platform",
        title: "HealthCare Platform - Web App",
        category: "Web UI",
        previewImage: "/assets/designs/healthcare-design.svg",
        tagline: "Patient care management, triage & clinical scheduling",
        description: "Designed a healthcare platform UI for patient management, medical records, and doctor appointments.",
        longDescription: "Comprehensive web platform designed to streamline clinical workflows and patient scheduling. Features clinical triage dashboards, interactive appointment booking calendars, patient profile cards, and doctor consultation views.",
        tools: ["Figma", "Design Systems", "Auto Layout", "Healthcare UX"],
        deliverables: ["Patient Dashboard UI", "Doctor Schedule Management", "Interactive Appointment Flow", "Component Specs"],
        figmaUrl: "https://www.figma.com/proto/er9waWlKMe1DJZWO9Mvnmd/Healthcare-Web-Platform?t=zHsMnJsifESUqVjs-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=76-1563&starting-point-node-id=76%3A1563",
        featured: true
    },
    {
        id: "book-store-web-app",
        title: "Book Store - Web App (Biomela)",
        category: "Web UI",
        previewImage: "/assets/designs/bookstore-design.svg",
        tagline: "Biomedical books e-commerce & digital library",
        description: "Created an e-commerce UI for browsing and purchasing biomedical books.",
        longDescription: "Specialized e-commerce web platform designed for biomedical students and healthcare professionals. Features robust category exploration, reading sample previews, seamless cart interactions, and frictionless checkout flows.",
        tools: ["Figma", "E-Commerce UI", "Wireframing", "User Journeys"],
        deliverables: ["Bookstore Catalog UI", "Product Detail Screens", "Shopping Cart & Checkout Flow", "Responsive Views"],
        figmaUrl: "https://www.figma.com/proto/WhxhiM6ed6wyWxU0xdQuzs/Biomela-website?node-id=30-1798&t=YaSdN7EUz2Qa7wxO-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=30%3A1798",
        featured: false
    },
    {
        id: "food-delivery-app",
        title: "Food Delivery - Mobile App (QuickBite)",
        category: "Mobile App",
        previewImage: "/assets/designs/fooddelivery-design.svg",
        tagline: "Speed-oriented mobile food ordering & live courier tracking",
        description: "Designed a food delivery app UI for ordering and tracking food.",
        longDescription: "Thumb-optimized mobile application designed for quick food discovery and real-time order tracking. Includes custom restaurant menus, dietary filters, interactive order summaries, and live GPS courier tracking animations.",
        tools: ["Figma", "Mobile UI", "Micro-interactions", "Prototype Flows"],
        deliverables: ["iOS/Android UI Kit", "Live Order Tracking Flow", "Menu & Cart Screens", "Interactive Prototype"],
        figmaUrl: "https://www.figma.com/proto/AdzkBOx3Y325zAbM0lbegD/QuickBite?node-id=7-2&p=f&t=vpODGhuPYe7gBrD8-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=7%3A2",
        featured: true
    },
    {
        id: "villacare-platform",
        title: "VillaCare Management Platform - Web & Mobile App",
        category: "Dashboard",
        previewImage: "/assets/designs/villacare-design.svg",
        tagline: "Luxury villa bookings, occupancy & maintenance tracking",
        description: "Designed a villa management UI for bookings and maintenance tracking across web and mobile platforms.",
        longDescription: "Dual-platform hospitality management system combining guest booking pipelines, occupancy calendars, maintenance dispatch logs, and mobile staff inspection workflows.",
        tools: ["Figma", "Design System", "Dashboard UI", "Cross-Platform Layouts"],
        deliverables: ["Web Management Dashboard", "Mobile Staff Companion App", "Maintenance Log System", "Interactive Prototype"],
        figmaUrl: "https://www.figma.com/proto/z7gw7Seq08x9n5gkmX1EAW/VillaCare-Management-Platform?node-id=73-7748&p=f&t=0kOpXnPpf516dnPc-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=73%3A7748&show-proto-sidebar=1",
        featured: true
    }
];

export default function UIUXDesigns() {
    const [activeFilter, setActiveFilter] = useState<'All' | 'Web UI' | 'Mobile App' | 'Dashboard'>('All');
    const [selectedDesign, setSelectedDesign] = useState<DesignProject | null>(null);

    const filteredDesigns = activeFilter === 'All' 
        ? designs 
        : designs.filter(d => d.category === activeFilter);

    const categories: ('All' | 'Web UI' | 'Mobile App' | 'Dashboard')[] = [
        'All', 'Web UI', 'Mobile App', 'Dashboard'
    ];

    return (
        <section id="designs" className="py-24 px-6 bg-slate-50 dark:bg-[#030014] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
            {/* Background Ambience */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 dark:bg-pink-500/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/10 dark:bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-pink-500/30 dark:border-pink-500/30 bg-pink-500/10 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 text-xs font-semibold uppercase tracking-wider mb-4">
                        <Palette className="w-3.5 h-3.5" />
                        Figma &amp; Product Design
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        UI/UX <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 dark:from-pink-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">Designs</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-pink-500 to-indigo-600 dark:from-pink-400 dark:to-indigo-400 mx-auto rounded-full mb-4" />
                    <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-base">
                        A curated showcase of user experiences crafted in Figma — spanning design systems, mobile apps, responsive web interfaces, and high-density dashboards.
                    </p>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2.5 mt-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                                    activeFilter === category
                                        ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 scale-105'
                                        : 'bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Designs Grid */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredDesigns.map((design, index) => (
                            <motion.div
                                layout
                                key={design.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.35, delay: index * 0.05 }}
                                whileHover={{ y: -8 }}
                                className="group bg-white dark:bg-gray-900/60 border border-slate-200 dark:border-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-xl hover:border-pink-500/40 dark:hover:border-purple-500/50 transition-all duration-500 flex flex-col justify-between"
                            >
                                <div>
                                    {/* Preview Image with Overlay */}
                                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-black/60 border-b border-slate-100 dark:border-gray-800">
                                        <img 
                                            src={design.previewImage} 
                                            alt={design.title} 
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                        
                                        {/* Hover Overlay with Action Buttons */}
                                        <div className="absolute inset-0 bg-slate-900/60 dark:bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-sm p-4">
                                            <button 
                                                onClick={() => setSelectedDesign(design)}
                                                className="px-4 py-2.5 rounded-xl bg-white dark:bg-white/20 text-slate-900 dark:text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg hover:scale-105 transition-transform"
                                            >
                                                <Eye className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                                                View Case Details
                                            </button>
                                            <a 
                                                href={design.figmaUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="p-2.5 rounded-xl bg-pink-600 hover:bg-pink-700 text-white shadow-lg hover:scale-105 transition-transform"
                                                title="Open in Figma"
                                            >
                                                <Figma className="w-4 h-4" />
                                            </a>
                                        </div>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-white/90 dark:bg-black/70 backdrop-blur-md text-slate-800 dark:text-gray-200 border border-slate-200 dark:border-white/10 shadow-sm">
                                                {design.category}
                                            </span>
                                        </div>

                                        {/* Figma Icon Tag */}
                                        <div className="absolute top-4 right-4 z-10 w-7 h-7 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/20">
                                            <Figma className="w-3.5 h-3.5 text-pink-400" />
                                        </div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors mb-2">
                                            {design.title}
                                        </h3>
                                        <p className="text-xs font-medium text-indigo-600 dark:text-cyan-400 mb-3">
                                            {design.tagline}
                                        </p>
                                        <p className="text-slate-600 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed mb-4">
                                            {design.description}
                                        </p>

                                        {/* Tools Pills */}
                                        <div className="flex flex-wrap gap-1.5 mb-2">
                                            {design.tools.slice(0, 3).map((tool, i) => (
                                                <span 
                                                    key={i}
                                                    className="px-2.5 py-1 rounded-lg text-[10px] font-medium bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-300 border border-slate-200/60 dark:border-white/5"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                            {design.tools.length > 3 && (
                                                <span className="px-2 py-1 rounded-lg text-[10px] font-medium text-slate-400 dark:text-gray-500">
                                                    +{design.tools.length - 3}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Footer Action */}
                                <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-gray-800/80 flex items-center justify-between">
                                    <button
                                        onClick={() => setSelectedDesign(design)}
                                        className="text-xs font-semibold text-slate-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
                                    >
                                        <span>Explore Design</span>
                                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                    </button>

                                    <a
                                        href={design.figmaUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-medium text-pink-600 dark:text-pink-400 hover:underline flex items-center gap-1"
                                    >
                                        <Figma className="w-3 h-3" />
                                        Figma File
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Design Detail Modal */}
            <AnimatePresence>
                {selectedDesign && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-900/70 dark:bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
                        onClick={() => setSelectedDesign(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white dark:bg-gray-900 border border-slate-200 dark:border-gray-800 rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden my-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Image Banner */}
                            <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden">
                                <img
                                    src={selectedDesign.previewImage}
                                    alt={selectedDesign.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                                <button
                                    onClick={() => setSelectedDesign(null)}
                                    className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors z-20"
                                >
                                    <X size={20} />
                                </button>

                                <div className="absolute bottom-6 left-6 right-6 text-white">
                                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pink-600 text-white mb-2 inline-block">
                                        {selectedDesign.category}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold">{selectedDesign.title}</h3>
                                    <p className="text-sm text-pink-200 mt-1">{selectedDesign.tagline}</p>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 md:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-2">
                                        Project Overview &amp; UX Rationale
                                    </h4>
                                    <p className="text-slate-600 dark:text-gray-300 text-sm leading-relaxed">
                                        {selectedDesign.longDescription}
                                    </p>
                                </div>

                                {/* Deliverables Grid */}
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-3 flex items-center gap-1.5">
                                        <Sparkles className="w-3.5 h-3.5 text-pink-500" />
                                        Key Deliverables &amp; Outcomes
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {selectedDesign.deliverables.map((deliv, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-gray-800/50 border border-slate-200/80 dark:border-gray-800 text-xs font-medium text-slate-700 dark:text-gray-200"
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                                                <span>{deliv}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tools Used */}
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-2.5 flex items-center gap-1.5">
                                        <Layers className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                                        Design Tools &amp; Methods
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedDesign.tools.map((tool, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-gray-300 border border-slate-200 dark:border-gray-700"
                                            >
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Modal Actions */}
                            <div className="p-6 bg-slate-50 dark:bg-gray-800/40 border-t border-slate-200 dark:border-gray-800 flex flex-wrap items-center justify-between gap-4">
                                <button
                                    onClick={() => setSelectedDesign(null)}
                                    className="px-6 py-2.5 rounded-xl bg-slate-200 dark:bg-gray-800 text-slate-700 dark:text-white font-semibold text-xs hover:bg-slate-300 dark:hover:bg-gray-700 transition-colors"
                                >
                                    Close Preview
                                </button>
                                <a
                                    href={selectedDesign.figmaUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-pink-500/25 transition-all hover:scale-105"
                                >
                                    <Figma className="w-4 h-4" />
                                    Open Figma Project
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
