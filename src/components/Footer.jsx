import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark-bg border-t border-dark-border py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    <div className="flex flex-col items-center md:items-start group">
                        <a href="#home" className="flex items-center gap-2 mb-2">
                             <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center border border-primary/20 group-hover:border-primary/50 transition-all duration-300">
                                <img src="/klogo.svg" alt="Kartik Logo" className="w-5 h-5 object-contain" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-wider group-hover:text-primary transition-colors">
                                Kartik<span className="text-primary">.</span>
                            </span>
                        </a>
                        <p className="text-dark-muted text-sm max-w-xs text-center md:text-left">
                            Building dynamic and scalable high-performance web experiences.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-dark-muted">
                        <a href="#about" className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]">About</a>
                        <a href="#skills" className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]">Skills</a>
                        <a href="#projects" className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]">Projects</a>
                        <a href="#contact" className="hover:text-primary transition-colors uppercase tracking-widest text-[10px]">Contact</a>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2 text-dark-muted text-xs">
                        <div className="flex gap-4 mb-2">
                             {/* social icons could go here too if needed */}
                        </div>
                        <p>&copy; {new Date().getFullYear()} Kartik Kamatagi. All rights reserved.</p>
                        <p className="opacity-50 italic">Designed with precision & passion.</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
