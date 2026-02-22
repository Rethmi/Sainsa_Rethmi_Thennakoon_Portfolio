// import React, { useState, type ChangeEvent, type FormEvent } from 'react';
// import { Mail, Phone, Linkedin, Send, User, MessageSquare, ExternalLink } from 'lucide-react';
// import { motion } from 'framer-motion';

// // Types define kala errors nathi wenna
// interface FormData {
//     name: string;
//     email: string;
//     subject: string;
//     message: string;
// }

// const Contact: React.FC = () => {
//     const [formData, setFormData] = useState<FormData>({
//         name: '',
//         email: '',
//         subject: '',
//         message: ''
//     });

//     // Input change handle karana function eka (Type safe)
//     const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e: FormEvent) => {
//         e.preventDefault();
        
//         const mailSubject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
//         const mailBody = encodeURIComponent(
//             `Name: ${formData.name}\n` +
//             `Email: ${formData.email}\n\n` +
//             `Message:\n${formData.message}`
//         );

//         // Email client eka open kireema
//         window.location.href = `mailto:reththennakoon.edu@gmail.com?subject=${mailSubject}&body=${mailBody}`;
        
//         setFormData({ name: '', email: '', subject: '', message: '' });
//     };

//     return (
//         <section id="contact" className="py-24 px-6 relative bg-[#020617] overflow-hidden min-h-screen flex items-center">
//             {/* Background Glows */}
//             <div className="absolute inset-0 z-0 pointer-events-none">
//                 <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
//                 <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
//             </div>

//             <div className="max-w-6xl mx-auto relative z-10 w-full">
//                 <motion.div 
//                     initial={{ opacity: 0, y: -20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.6 }}
//                     className="text-center mb-16"
//                 >
//                    <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-b from-white to-blue-900 bg-clip-text text-transparent tracking-tighter">
//     GET IN TOUCH
// </h2>
// <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
//                 </motion.div>

//                 <div className="grid lg:grid-cols-2 gap-12 items-start">
                    
//                     {/* Left: Animated Contact Cards */}
//                     <div className="space-y-4">
//                         {[
//                             { icon: Mail, label: 'Email', val: 'reththennakoon.edu@gmail.com', link: 'mailto:reththennakoon.edu@gmail.com', color: 'text-blue-400' },
//                             { icon: Phone, label: 'WhatsApp', val: '+94 70 483 9927', link: 'https://wa.me/94704839927', color: 'text-emerald-400' },
//                             { icon: Linkedin, label: 'LinkedIn', val: 'Sainsa Rethmi', link: 'https://www.linkedin.com/in/sainsa-rethmi-thennakoon-238a54291/', color: 'text-sky-400' }
//                         ].map((item, i) => (
//                             <motion.a
//                                 key={i}
//                                 href={item.link}
//                                 initial={{ opacity: 0, x: -50 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 transition={{ delay: i * 0.1, duration: 0.5 }}
//                                 whileHover={{ scale: 1.03, x: 10 }}
//                                 className="flex items-center p-6 bg-[#0f172a]/40 border border-white/5 rounded-3xl backdrop-blur-xl hover:border-blue-500/40 transition-all group"
//                             >
//                                 <div className={`p-4 bg-slate-900 rounded-2xl mr-6 ${item.color} group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-lg`}>
//                                     <item.icon size={24} />
//                                 </div>
//                                 <div className="flex-1 overflow-hidden">
//                                     <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.2em] mb-1">{item.label}</p>
//                                     <p className="text-gray-200 font-medium truncate">{item.val}</p>
//                                 </div>
//                                 <ExternalLink size={16} className="text-gray-600 group-hover:text-blue-400 transition-colors ml-2" />
//                             </motion.a>
//                         ))}
//                     </div>

//                     {/* Right: The Form */}
//                     <motion.div 
//                         initial={{ opacity: 0, scale: 0.9 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         transition={{ duration: 0.5 }}
//                         className="bg-[#0f172a]/60 p-8 md:p-10 rounded-[2rem] border border-white/5 shadow-2xl relative"
//                     >
//                         <form onSubmit={handleSubmit} className="space-y-6">
//                             <div className="grid md:grid-cols-2 gap-6">
//                                 <div className="space-y-2">
//                                     <label className="text-xs font-bold text-gray-500 uppercase ml-2">Your Name</label>
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         required
//                                         value={formData.name}
//                                         onChange={handleInputChange}
//                                         className="w-full px-5 py-4 bg-[#020617] border border-white/10 rounded-2xl focus:border-blue-500 outline-none transition-all text-white"
//                                         placeholder="Sainsa Rethmi"
//                                     />
//                                 </div>
//                                 <div className="space-y-2">
//                                     <label className="text-xs font-bold text-gray-500 uppercase ml-2">Email</label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         required
//                                         value={formData.email}
//                                         onChange={handleInputChange}
//                                         className="w-full px-5 py-4 bg-[#020617] border border-white/10 rounded-2xl focus:border-blue-500 outline-none transition-all text-white"
//                                         placeholder="email@example.com"
//                                     />
//                                 </div>
//                             </div>

//                             <div className="space-y-2">
//                                 <label className="text-xs font-bold text-gray-500 uppercase ml-2">Subject</label>
//                                 <input
//                                     type="text"
//                                     name="subject"
//                                     required
//                                     value={formData.subject}
//                                     onChange={handleInputChange}
//                                     className="w-full px-5 py-4 bg-[#020617] border border-white/10 rounded-2xl focus:border-blue-500 outline-none transition-all text-white"
//                                     placeholder="Project Discussion"
//                                 />
//                             </div>

//                             <div className="space-y-2">
//                                 <label className="text-xs font-bold text-gray-500 uppercase ml-2">Message</label>
//                                 <textarea
//                                     name="message"
//                                     required
//                                     rows={4}
//                                     value={formData.message}
//                                     onChange={handleInputChange}
//                                     className="w-full px-5 py-4 bg-[#020617] border border-white/10 rounded-2xl focus:border-blue-500 outline-none transition-all text-white resize-none"
//                                     placeholder="Tell me about your project..."
//                                 />
//                             </div>

//                             <motion.button
//                                 whileHover={{ scale: 1.02 }}
//                                 whileTap={{ scale: 0.98 }}
//                                 type="submit"
//                                 className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center space-x-3 group"
//                             >
//                                 <span className="uppercase tracking-widest text-sm">Send Message</span>
//                                 <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//                             </motion.button>
//                         </form>
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Contact;

import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import { Mail, Phone, Linkedin, Send, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const mailSubject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
        const mailBody = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
        );
        window.location.href = `mailto:reththennakoon.edu@gmail.com?subject=${mailSubject}&body=${mailBody}`;
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="py-24 px-6 relative bg-slate-50 dark:bg-[#020617] overflow-hidden min-h-screen flex items-center transition-colors duration-500">
            {/* Background Glows - Adaptive Colors */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/10 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10 w-full">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-blue-900 bg-clip-text text-transparent tracking-tighter">
                        GET IN TOUCH
                    </h2>
                    <div className="h-1.5 w-20 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    
                    {/* Left: Contact Info Cards */}
                    <div className="space-y-4">
                        {[
                            { icon: Mail, label: 'Email', val: 'reththennakoon.edu@gmail.com', link: 'mailto:reththennakoon.edu@gmail.com', color: 'text-blue-600 dark:text-blue-400' },
                            { icon: Phone, label: 'WhatsApp', val: '+94 70 483 9927', link: 'https://wa.me/94704839927', color: 'text-emerald-600 dark:text-emerald-400' },
                            { icon: Linkedin, label: 'LinkedIn', val: 'Sainsa Rethmi', link: 'https://www.linkedin.com/in/sainsa-rethmi-thennakoon-238a54291/', color: 'text-sky-600 dark:text-sky-400' }
                        ].map((item, i) => (
                            <motion.a
                                key={i}
                                href={item.link}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.02, x: 10 }}
                                className="flex items-center p-6 bg-white dark:bg-[#0f172a]/40 border border-slate-200 dark:border-white/5 rounded-3xl backdrop-blur-xl hover:border-blue-500 transition-all group shadow-sm dark:shadow-none"
                            >
                                <div className={`p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl mr-6 ${item.color} group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm`}>
                                    <item.icon size={24} />
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-[10px] font-bold text-blue-600 dark:text-blue-500 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                                    <p className="text-slate-800 dark:text-gray-200 font-medium truncate">{item.val}</p>
                                </div>
                                <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors ml-2" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Right: The Form */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-[#0f172a]/60 p-8 md:p-10 rounded-[2rem] border border-slate-200 dark:border-white/5 shadow-xl dark:shadow-2xl relative"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 dark:text-gray-500 uppercase ml-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-4 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-white/10 rounded-2xl focus:border-blue-600 dark:focus:border-blue-500 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                        placeholder="Sainsa Rethmi"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 dark:text-gray-500 uppercase ml-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-5 py-4 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-white/10 rounded-2xl focus:border-blue-600 dark:focus:border-blue-500 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                        placeholder="email@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 dark:text-gray-500 uppercase ml-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className="w-full px-5 py-4 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-white/10 rounded-2xl focus:border-blue-600 dark:focus:border-blue-500 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                    placeholder="Project Discussion"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-500 dark:text-gray-500 uppercase ml-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-5 py-4 bg-slate-50 dark:bg-[#020617] border border-slate-200 dark:border-white/10 rounded-2xl focus:border-blue-600 dark:focus:border-blue-500 outline-none transition-all text-slate-900 dark:text-white resize-none placeholder:text-slate-400"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-200 dark:shadow-blue-900/20 flex items-center justify-center space-x-3 group"
                            >
                                <span className="uppercase tracking-widest text-sm">Send Message</span>
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;