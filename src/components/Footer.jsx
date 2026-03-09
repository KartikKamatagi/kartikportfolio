import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="bg-dark-bg border-t border-dark-border py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                    <div className="flex flex-col items-center md:items-start">
                        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                            <span className="text-xl font-bold text-white tracking-wider">
                                Kartik<span className="text-primary">.</span>
                            </span>
                        </Link>
                        <p className="text-dark-muted text-sm mt-2">
                            Building dynamic and scalable experiences.
                        </p>
                    </div>

                    <div className="flex space-x-6 text-sm text-dark-muted">
                        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-primary transition-colors">About</Link>
                        <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-primary transition-colors">Projects</Link>
                        <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-primary transition-colors">Contact</Link>
                    </div>

                    <div className="text-dark-muted text-sm">
                        &copy; {new Date().getFullYear()} Kartik Kamatagi. All rights reserved.
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
