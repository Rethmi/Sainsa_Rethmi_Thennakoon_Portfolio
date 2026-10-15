import React from 'react';
import { MapPin, Phone, GraduationCap, Code2, Sparkles, Bug } from 'lucide-react';
import { FiDownload } from 'react-icons/fi';

const About = () => {
    // const handleDownloadCV = () => {
    //     const link = document.createElement('a');
    //     link.href = '/cv/Sainsa_Rethmi_Thennakoon_CV.pdf'; 
    //     link.download = 'Sainsa_Rethmi_Thennakoon_CV.pdf';
    //     link.click();
    // };

    return (
        /* Section Container with Theme-adaptive background */
        <section id="about" className="py-24 px-6 relative overflow-hidden bg-slate-50 dark:bg-[#030014] transition-colors duration-500">
            
            {/* Background Decorations - Subtle Blur effects */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full -translate-y-1/2 opacity-50 dark:opacity-100" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full opacity-50 dark:opacity-100" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-cyan-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                        About Me
                    </h2>
                    <div className="h-1.5 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-cyan-500 dark:to-purple-500 mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    
                    {/* Left Side: Content */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
                        <div className="space-y-6 text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
                            <p>
                                I am an <span className="text-slate-900 dark:text-white font-semibold">Aspiring UI/UX Engineer &amp; Full-Stack Developer</span> specializing in creating intuitive, human-centered digital experiences and scalable software solutions. With hands-on expertise in <span className="text-indigo-600 dark:text-cyan-400 font-medium">Figma, React, and Java Spring Boot</span>, 
                                I focus on transforming complex ideas into responsive, visually compelling interfaces with a strong emphasis on usability and accessibility.
                            </p>
                            
                            <p>
                                My engineering journey is driven by continuous learning and academic excellence. 
                                Currently reading for my <span className="text-slate-900 dark:text-white font-semibold">BSc (Hons) Top-Up Degree at London Tech City Campus in partnership with Wrexham University</span>, 
                                alongside completing my <span className="text-purple-600 dark:text-purple-400 font-medium">Graduate Diploma in Software Engineering at IJSE</span>, 
                                I have engineered systems ranging from <span className="text-purple-600 dark:text-purple-400">enterprise platforms</span> to 
                                <span className="text-purple-600 dark:text-purple-400"> creative digital experiences</span>.
                            </p>
                        </div>

                        {/* Info Tiles */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InfoTile 
                                icon={<MapPin className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />} 
                                text="Bandarawela, Sri Lanka" 
                            />
                            <InfoTile 
                                icon={<Phone className="w-5 h-5 text-purple-600 dark:text-purple-400" />} 
                                text="+94 70 483 9927" 
                            />
                            <div className="md:col-span-2 space-y-3">
                                <InfoTile 
                                    icon={<GraduationCap className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />} 
                                    text="BSc (Hons) Top-Up Degree – London Tech City Campus (Wrexham University) [Current]" 
                                />
                                <InfoTile 
                                    icon={<GraduationCap className="w-5 h-5 text-pink-600 dark:text-pink-400" />} 
                                    text="Graduate Diploma in Software Engineering – IJSE" 
                                />
                            </div>
                        </div>

                       <div className="pt-4">
                                <a
                                    href="/Sainsa Rethmi Thennakoon CV.pdf"
                                    download
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-1"
                                >
                                    <FiDownload className="w-5 h-5" />
                                    Download CV
                                </a>
                            </div>
                    </div>

                    {/* Right Side: Focus Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right duration-1000">
                        <FocusCard 
                            icon={<Code2 className="w-8 h-8 text-indigo-600 dark:text-cyan-400" />}
                            title="Development"
                            desc="Building robust backends with Spring Boot and dynamic frontends with React."
                        />
                        <FocusCard 
                            icon={<Sparkles className="w-8 h-8 text-purple-600 dark:text-purple-400" />}
                            title="UI/UX Design"
                            desc="Creating intuitive, modern interfaces that provide seamless user journeys."
                        />
                        <FocusCard 
    icon={<Bug className="w-8 h-8 text-green-600 dark:text-green-400" />}
    title="QA Engineering"
    desc="Ensuring software quality through manual and automated testing using tools like Selenium, focusing on bug detection and performance."
/>
                        
                        <div className="md:col-span-2 p-6 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-slate-200 dark:border-white/10 rounded-[2rem] relative overflow-hidden group shadow-sm">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white dark:bg-white/10 rounded-2xl text-indigo-600 dark:text-cyan-400 shadow-sm">
                                    <GraduationCap className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Current Academic Focus</h3>
                                    <p className="text-sm text-slate-600 dark:text-gray-300 mt-1">
                                        Reading for <span className="font-semibold text-indigo-600 dark:text-cyan-400">BSc (Hons) Top-Up Degree</span> at London Tech City Campus in partnership with Wrexham University.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// Helper Component for Info Tiles
const InfoTile = ({ icon, text }: { icon: React.ReactNode, text: string }) => (
    <div className="flex items-center space-x-3 p-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/10 transition-colors shadow-sm dark:shadow-none">
        {icon}
        <span className="text-slate-600 dark:text-gray-300 font-medium">{text}</span>
    </div>
);

// Helper Component for Focus Cards
const FocusCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <div className="p-8 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2rem] hover:border-indigo-500 dark:hover:border-purple-500/50 transition-all duration-500 group shadow-md dark:shadow-none">
        <div className="mb-4 p-3 bg-slate-100 dark:bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-500">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">{desc}</p>
    </div>
);

export default About;