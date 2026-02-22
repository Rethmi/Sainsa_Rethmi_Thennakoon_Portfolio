import { useState, useEffect } from 'react';
import {
    CustomCursor,
    Navigation,
    Hero,
    About,
    Skills,
    Projects,
    Education,
    Awards,
    Contact,
    Footer
} from './components/sections';
import './index.css';

function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // කලින් සේව් කරපු theme එක ගන්නවා, නැත්නම් dark mode එක default ගන්නවා
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'education','awards', 'contact'];
            const scrollPosition = window.scrollY + 100;
            sections.forEach(sectionId => {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(sectionId);
                    }
                }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
        setIsMobileMenuOpen(false);
    };

    return (
        /* මුළු Portfolio එකේම Background එක මෙතනින් පාලනය වෙනවා */
        <div className="min-h-screen bg-slate-50 dark:bg-black text-slate-900 dark:text-white transition-colors duration-500 overflow-x-hidden">
            <CustomCursor mousePosition={mousePosition} />
            
            <Navigation 
                activeSection={activeSection}
                scrollToSection={scrollToSection} 
                isMobileMenuOpen={isMobileMenuOpen} 
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                theme={theme}
                toggleTheme={toggleTheme}
            />

            {/* සියලුම Section වලට පහත ආකාරයට Styles දාන්න */}
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Education />
                <Awards />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;