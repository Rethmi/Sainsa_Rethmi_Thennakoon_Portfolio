// import React from 'react';
// import { MapPin, Phone, Download, GraduationCap, Code2, Sparkles, Award } from 'lucide-react';

// const About = () => {
//     const handleDownloadCV = () => {
//         // Hariyama path eka danna
//         const link = document.createElement('a');
//         link.href = '/cv/Sainsa_Rethmi_Thennakoon_CV.pdf'; 
//         link.download = 'Sainsa_Rethmi_Thennakoon_CV.pdf';
//         link.click();
//     };

//     return (
//         <section id="about" className="py-24 px-6 relative overflow-hidden bg-[#030014]">
//             {/* Background Decorations */}
//             <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full -translate-y-1/2" />
            
//             <div className="max-w-7xl mx-auto relative z-10">
//                 <div className="text-center mb-16">
//                     <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//                         About Me
//                     </h2>
//                     <div className="h-1.5 w-20 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
//                 </div>

//                 <div className="grid lg:grid-cols-2 gap-16 items-start">
                    
//                     {/* Left Side: Content */}
//                     <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
//                         <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
//     <p>
//         I am a <span className="text-white font-semibold">Full-Stack Developer</span> specializing in building 
//         high-performance, user-centric applications. With expertise in <span className="text-cyan-400">Java, Spring Boot, and React</span>, 
//         I focus on creating seamless digital experiences that solve real-world challenges through clean and scalable code.
//     </p>
    
//     <p>
//         My journey in software engineering is fueled by a commitment to continuous learning and technical excellence. 
//         Currently pursuing a <span className="text-white font-medium">Diploma in Software Engineering at IJSE</span>, 
//         I have gained extensive hands-on experience by architecting systems ranging from <span className="text-purple-400">enterprise management platforms</span> to 
//         <span className="text-purple-400"> creative digital galleries</span>.
//     </p>

    
// </div>

//                         {/* Info Tiles */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div className="flex items-center space-x-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
//                                 <MapPin className="w-5 h-5 text-cyan-400" />
//                                 <span className="text-gray-300">Bandarawela, Sri Lanka</span>
//                             </div>
//                             <div className="flex items-center space-x-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
//                                 <Phone className="w-5 h-5 text-purple-400" />
//                                 <span className="text-gray-300">+94 70 483 9927</span>
//                             </div>
//                             <div className="flex items-center space-x-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
//                                 <GraduationCap className="w-5 h-5 text-pink-400" />
//                                 <span className="text-gray-300"> Diploma in Software Engineering   IJSE</span>
//                             </div>
                             
//                         </div>

//                         <button
//                             onClick={handleDownloadCV}
//                             className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:scale-105 shadow-xl shadow-indigo-500/20 active:scale-95 overflow-hidden"
//                         >
//                             <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
//                             <span>Download Resume</span>
//                             <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
//                         </button>
//                     </div>

//                     {/* Right Side: Skills/Focus Cards */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right duration-1000">
//                         <FocusCard 
//                             icon={<Code2 className="w-8 h-8 text-cyan-400" />}
//                             title="Development"
//                             desc="Building robust backends with Spring Boot and dynamic frontends with React."
//                         />
//                         <FocusCard 
//                             icon={<Sparkles className="w-8 h-8 text-purple-400" />}
//                             title="UI/UX Design"
//                             desc="Creating intuitive, modern interfaces that provide seamless user journeys."
//                         />
//                         <div className="md:col-span-2 p-8 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-white/10 rounded-[2rem] relative overflow-hidden group">
//                             <div className="relative z-10 flex flex-col items-center text-center space-y-4">
//                                 <h3 className="text-xl font-bold text-white">Current Focus</h3>
//                                 <p className="text-gray-400 max-w-sm">
//                                     Deepening my expertise in cloud-native applications and microservices architecture.
//                                 </p>
//                             </div>
//                             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
//                                 <Code2 className="w-24 h-24" />
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </section>
//     );
// };

// // Helper Component for Cards
// const FocusCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
//     <div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:border-purple-500/50 transition-all duration-500 group">
//         <div className="mb-4 p-3 bg-white/5 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-500">
//             {icon}
//         </div>
//         <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//         <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
//     </div>
// );

// export default About;
import React from 'react';
import { MapPin, Phone, Download, GraduationCap, Code2, Sparkles } from 'lucide-react';

const About = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv/Sainsa_Rethmi_Thennakoon_CV.pdf'; 
        link.download = 'Sainsa_Rethmi_Thennakoon_CV.pdf';
        link.click();
    };

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
                                I am a <span className="text-slate-900 dark:text-white font-semibold">Full-Stack Developer</span> specializing in building 
                                high-performance, user-centric applications. With expertise in <span className="text-indigo-600 dark:text-cyan-400 font-medium">Java, Spring Boot, and React</span>, 
                                I focus on creating seamless digital experiences that solve real-world challenges through clean and scalable code.
                            </p>
                            
                            <p>
                                My journey in software engineering is fueled by a commitment to continuous learning and technical excellence. 
                                Currently pursuing a <span className="text-slate-900 dark:text-white font-medium">Diploma in Software Engineering at IJSE</span>, 
                                I have gained extensive hands-on experience by architecting systems ranging from <span className="text-purple-600 dark:text-purple-400">enterprise management platforms</span> to 
                                <span className="text-purple-600 dark:text-purple-400"> creative digital galleries</span>.
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
                            <div className="md:col-span-2">
                                <InfoTile 
                                    icon={<GraduationCap className="w-5 h-5 text-pink-600 dark:text-pink-400" />} 
                                    text="Diploma in Software Engineering - IJSE" 
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleDownloadCV}
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all duration-300 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl hover:scale-105 shadow-xl shadow-indigo-500/20 active:scale-95 overflow-hidden"
                        >
                            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                            <span>Download Resume</span>
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
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
                        
                        {/* Current Focus Card */}
                        <div className="md:col-span-2 p-8 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2rem] relative overflow-hidden group shadow-md dark:shadow-none">
                            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Current Focus</h3>
                                <p className="text-slate-600 dark:text-gray-400 max-w-sm">
                                    Deepening my expertise in cloud-native applications and microservices architecture.
                                </p>
                            </div>
                            <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity">
                                <Code2 className="w-24 h-24 text-slate-900 dark:text-white" />
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