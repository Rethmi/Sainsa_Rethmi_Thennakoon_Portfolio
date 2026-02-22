// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiAward, FiMapPin, FiCalendar, FiStar } from 'react-icons/fi';

// const achievements = [
//   {
//     year: "2025",
//     title: "Finalist - Top 6 Teams",
//     event: "Circle Edge 2024 Final",
//     location: "Shangri-La, Colombo",
//     description: "Competed as one of the elite top 6 teams in the grand finale of the island-wide IJSE hackathon, showcasing advanced software engineering solutions.",
//     icon: <FiStar className="text-yellow-400" />,
//     isGrand: true
//   },
//   {
//     year: "2024",
//     title: "Semi-Finalist",
//     event: "IJSE Hackathon 2024",
//     location: "IJSE Panadura",
//     description: "Successfully advanced through competitive preliminary rounds and represented the Panadura branch at the regional semifinals.",
//     icon: <FiAward className="text-indigo-400" />,
//     isGrand: false
//   }
// ];

// export default function Awards() {
//   return (
//     // The id="awards" here is what connects it to your navigation link
//     <section id="awards" className="py-24 bg-[#030014] text-white relative overflow-hidden">
      
//       {/* Background Glow Effect */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-indigo-500/10 blur-[120px] rounded-full" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
//             Honors & <span className="bg-gradient-to-r from-indigo-500 to-purple-400 bg-clip-text text-transparent">Achievements</span>
//           </h2>
//           <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full" />
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {achievements.map((award, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               className={`group relative p-8 rounded-3xl border transition-all duration-500 ${
//                 award.isGrand 
//                 ? 'border-indigo-500/30 bg-white/5 shadow-[0_0_30px_rgba(79,70,229,0.1)]' 
//                 : 'border-white/10 bg-white/5 hover:border-white/20'
//               }`}
//             >
//               <div className="flex items-start justify-between mb-6">
//                 <div className="p-4 bg-indigo-600/20 rounded-2xl text-2xl group-hover:scale-110 transition-transform duration-300">
//                   {award.icon}
//                 </div>
//                 <span className="text-sm font-mono text-indigo-400 bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-400/20">
//                   {award.year}
//                 </span>
//               </div>

//               <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
//                 {award.title}
//               </h3>
//               <h4 className="text-lg font-medium text-gray-300 mb-4">{award.event}</h4>
              
//               <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
//                 <div className="flex items-center gap-1.5">
//                   <FiMapPin className="text-indigo-500" />
//                   {award.location}
//                 </div>
//                 <div className="flex items-center gap-1.5">
//                   <FiCalendar className="text-indigo-500" />
//                   {award.year}
//                 </div>
//               </div>

//               <p className="text-gray-400 leading-relaxed italic border-l-2 border-indigo-500/30 pl-4">
//                 {award.description}
//               </p>

//               {award.isGrand && (
//                 <div className="absolute -top-3 -right-3 bg-gradient-to-tr from-yellow-500 to-orange-400 text-black text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-tighter shadow-lg rotate-3">
//                   Grand Finalist
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiMapPin, FiCalendar, FiStar } from 'react-icons/fi';

const achievements = [
  {
    year: "2025",
    title: "Finalist - Top 6 Teams",
    event: "Circle Edge 2024 Final",
    location: "Shangri-La, Colombo",
    description: "Competed as one of the elite top 6 teams in the grand finale of the island-wide IJSE hackathon, showcasing advanced software engineering solutions.",
    icon: <FiStar className="text-yellow-500 dark:text-yellow-400" />,
    isGrand: true
  },
  {
    year: "2024",
    title: "Semi-Finalist",
    event: "IJSE Hackathon 2024",
    location: "IJSE Panadura",
    description: "Successfully advanced through competitive preliminary rounds and represented the Panadura branch at the regional semifinals.",
    icon: <FiAward className="text-indigo-600 dark:text-indigo-400" />,
    isGrand: false
  }
];

export default function Awards() {
  return (
    <section id="awards" className="py-24 bg-slate-50 dark:bg-[#030014] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      
      {/* Background Glow Effect - Light and Dark variants */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-indigo-200/40 dark:bg-indigo-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Honors & <span className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-3xl border transition-all duration-500 ${
                award.isGrand 
                ? 'border-indigo-500/30 bg-white dark:bg-white/5 shadow-xl dark:shadow-[0_0_30px_rgba(79,70,229,0.1)]' 
                : 'border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 hover:border-indigo-300 dark:hover:border-white/20 shadow-md dark:shadow-none'
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-4 bg-indigo-50 dark:bg-indigo-600/20 rounded-2xl text-2xl group-hover:scale-110 transition-transform duration-300">
                  {award.icon}
                </div>
                <span className="text-sm font-mono text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-400/10 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-400/20">
                  {award.year}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-slate-900 dark:text-white">
                {award.title}
              </h3>
              <h4 className="text-lg font-medium text-slate-600 dark:text-gray-300 mb-4">{award.event}</h4>
              
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-500 dark:text-gray-400">
                <div className="flex items-center gap-1.5">
                  <FiMapPin className="text-indigo-600 dark:text-indigo-500" />
                  {award.location}
                </div>
                <div className="flex items-center gap-1.5">
                  <FiCalendar className="text-indigo-600 dark:text-indigo-500" />
                  {award.year}
                </div>
              </div>

              <p className="text-slate-600 dark:text-gray-400 leading-relaxed italic border-l-2 border-indigo-200 dark:border-indigo-500/30 pl-4">
                {award.description}
              </p>

              {award.isGrand && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-tr from-yellow-500 to-orange-400 text-white dark:text-black text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-tighter shadow-lg rotate-3">
                  Grand Finalist
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}