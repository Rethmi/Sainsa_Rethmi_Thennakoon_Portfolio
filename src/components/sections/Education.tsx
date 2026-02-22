// import React from 'react';
// import { Award, Calendar, GraduationCap, MapPin } from 'lucide-react';

// const Education = () => {
//     const education = [
//         {
//             degree: "Graduate Diploma in Software Engineering (GDSE)",
//             institution: "Institute of Software Engineering (IJSE)",
//             period: "2024 - 2026",
//             status: "Current",
//             description: "Focusing on Full-stack development, Architecture, and Enterprise solutions."
//         },
//         {
//             degree: "Diploma in Information & Communication Technology",
//             institution: "ESOFT Metro Campus",
//             location: "Bandarawela",
//             period: "2022",
//             status: "Completed"
//         },
//         {
//             degree: "Diploma in English",
//             institution: "ESOFT Metro Campus",
//             location: "Bandarawela",
//             period: "2022",
//             status: "Completed"
//         },
//         {
//             degree: "G.C.E Advanced Level - Physical Science",
//             institution: "Vishaka Girls' College",
//             location: "Bandarawela",
//             period: "2018 - 2021",
//             status: "Completed"
//         }
//     ];

//     return (
//         <section id="education" className="py-24 px-6 bg-[#030712] relative overflow-hidden">
//             {/* Background Decorative Circles */}
//             <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-[120px]" />
//             <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[120px]" />

//             <div className="max-w-4xl mx-auto relative">
//                 <div className="text-center mb-20">
//                     <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
//                         My Education Journey
//                     </h2>
//                     <p className="text-gray-400 max-w-lg mx-auto italic">
//                         "The beautiful thing about learning is that no one can take it away from you."
//                     </p>
//                 </div>

//                 <div className="relative border-l-2 border-gray-800 ml-4 md:ml-8 space-y-12">
//                     {education.map((edu, index) => (
//                         <div key={index} className="relative pl-8 group">
//                             {/* Timeline Dot */}
//                             <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-gray-900 transition-all duration-500 group-hover:scale-125 
//                                 ${edu.status === 'Current' ? 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-pulse' : 'bg-gray-600 group-hover:bg-purple-500'}`} 
//                             />

//                             <div className="bg-gray-900/40 backdrop-blur-md border border-gray-800 p-6 rounded-2xl transition-all duration-300 group-hover:border-cyan-500/30 group-hover:bg-gray-800/40 group-hover:-translate-y-1 shadow-xl">
//                                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                                     <div className="flex items-center gap-4">
//                                         <div className="p-3 bg-gray-800 rounded-xl group-hover:bg-cyan-500/10 transition-colors">
//                                             <GraduationCap className="w-6 h-6 text-cyan-400" />
//                                         </div>
//                                         <div>
//                                             <h3 className="text-xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">
//                                                 {edu.degree}
//                                             </h3>
//                                             <p className="text-gray-400 flex items-center gap-2 mt-1">
//                                                 <span className="font-medium text-gray-300">{edu.institution}</span>
//                                                 {edu.location && (
//                                                     <span className="flex items-center text-sm">
//                                                         <MapPin className="w-3 h-3 mr-1" /> {edu.location}
//                                                     </span>
//                                                 )}
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <div className="flex flex-row md:flex-col items-center md:items-end gap-3">
//                                         <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold 
//                                             ${edu.status === 'Current' 
//                                                 ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
//                                                 : 'bg-gray-800 text-gray-400 border border-gray-700'}`}
//                                         >
//                                             {edu.status}
//                                         </span>
//                                         <div className="flex items-center text-sm text-gray-500 font-mono">
//                                             <Calendar className="w-3 h-3 mr-2" />
//                                             {edu.period}
//                                         </div>
//                                     </div>
//                                 </div>
                                
//                                 {edu.description && (
//                                     <p className="mt-4 text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4">
//                                         {edu.description}
//                                     </p>
//                                 )}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Education;

import React from 'react';
import { Calendar, GraduationCap, MapPin } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: "Graduate Diploma in Software Engineering (GDSE)",
            institution: "Institute of Software Engineering (IJSE)",
            period: "2024 - 2026",
            status: "Current",
            description: "Focusing on Full-stack development, Architecture, and Enterprise solutions."
        },
        {
            degree: "Diploma in Information & Communication Technology",
            institution: "ESOFT Metro Campus",
            location: "Bandarawela",
            period: "2022",
            status: "Completed"
        },
        {
            degree: "Diploma in English",
            institution: "ESOFT Metro Campus",
            location: "Bandarawela",
            period: "2022",
            status: "Completed"
        },
        {
            degree: "G.C.E Advanced Level - Physical Science",
            institution: "Vishaka Girls' College",
            location: "Bandarawela",
            period: "2018 - 2021",
            status: "Completed"
        }
    ];

    return (
        <section id="education" className="py-24 px-6 bg-slate-50 dark:bg-[#030712] relative overflow-hidden transition-colors duration-500">
            {/* Background Decorative Circles */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo-200/40 dark:bg-cyan-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-200/40 dark:bg-purple-500/10 rounded-full blur-[120px]" />

            <div className="max-w-4xl mx-auto relative">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-500 bg-clip-text text-transparent">
                        My Education Journey
                    </h2>
                    <p className="text-slate-500 dark:text-gray-400 max-w-lg mx-auto italic">
                        "The beautiful thing about learning is that no one can take it away from you."
                    </p>
                </div>

                {/* Vertical Timeline Line */}
                <div className="relative border-l-2 border-slate-200 dark:border-gray-800 ml-4 md:ml-8 space-y-12">
                    {education.map((edu, index) => (
                        <div key={index} className="relative pl-8 group">
                            
                            {/* Timeline Dot */}
                            <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 transition-all duration-500 group-hover:scale-125 
                                ${edu.status === 'Current' 
                                    ? 'bg-indigo-600 dark:bg-cyan-400 shadow-[0_0_15px_rgba(79,70,229,0.5)] dark:shadow-[0_0_15px_rgba(34,211,238,0.8)] animate-pulse' 
                                    : 'bg-slate-300 dark:bg-gray-600 group-hover:bg-purple-600'}`} 
                            />

                            {/* Card Content */}
                            <div className="bg-white dark:bg-gray-900/40 backdrop-blur-md border border-slate-200 dark:border-gray-800 p-6 rounded-2xl transition-all duration-300 group-hover:border-indigo-500/30 dark:group-hover:border-cyan-500/30 group-hover:bg-slate-50 dark:group-hover:bg-gray-800/40 group-hover:-translate-y-1 shadow-lg dark:shadow-xl">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-slate-100 dark:bg-gray-800 rounded-xl group-hover:bg-indigo-500/10 dark:group-hover:bg-cyan-500/10 transition-colors">
                                            <GraduationCap className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-slate-600 dark:text-gray-400 flex items-center gap-2 mt-1">
                                                <span className="font-medium text-slate-800 dark:text-gray-300">{edu.institution}</span>
                                                {edu.location && (
                                                    <span className="flex items-center text-sm">
                                                        <MapPin className="w-3 h-3 mr-1 text-slate-400" /> {edu.location}
                                                    </span>
                                                )}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-row md:flex-col items-center md:items-end gap-3">
                                        <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold border
                                            ${edu.status === 'Current' 
                                                ? 'bg-indigo-100 dark:bg-cyan-500/10 text-indigo-700 dark:text-cyan-400 border-indigo-200 dark:border-cyan-500/20' 
                                                : 'bg-slate-100 dark:bg-gray-800 text-slate-500 dark:text-gray-400 border-slate-200 dark:border-gray-700'}`}
                                        >
                                            {edu.status}
                                        </span>
                                        <div className="flex items-center text-sm text-slate-500 dark:text-gray-500 font-mono">
                                            <Calendar className="w-3 h-3 mr-2" />
                                            {edu.period}
                                        </div>
                                    </div>
                                </div>
                                
                                {edu.description && (
                                    <p className="mt-4 text-slate-600 dark:text-gray-400 text-sm leading-relaxed border-t border-slate-100 dark:border-gray-800 pt-4">
                                        {edu.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;