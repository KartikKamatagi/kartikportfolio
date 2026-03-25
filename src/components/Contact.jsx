import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMail, HiLocationMarker, HiOutlinePhone, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: false,
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: false, message: '' });

        // EmailJS implementation
        // Replacing with your credentials: service_id, template_id, public_key
        emailjs.sendForm(
            'service_dg1to7o', // Replace with your Service ID
            'template_30ouo9h', // Replace with your Template ID
            formRef.current,
            'o1j40ANba2QkJcVu6' // Replace with your Public Key
        )
            .then((result) => {
                console.log(result.text);
                setStatus({
                    loading: false,
                    success: true,
                    error: false,
                    message: 'Message sent successfully!'
                });
                setFormData({ name: '', email: '', message: '' });

                // Reset success message after 5 seconds
                setTimeout(() => {
                    setStatus(prev => ({ ...prev, success: false }));
                }, 5000);
            }, (error) => {
                console.error('EmailJS Error:', error);
                setStatus({
                    loading: false,
                    success: false,
                    error: true,
                    message: `Error: ${error.text || 'Unknown error'}. Please check your template settings.`
                });
            });
    };

    return (
        <section id="contact" className="py-20 relative bg-dark-bg/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In <span className="text-primary">Touch</span></h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
                    <p className="mt-4 flex text-dark-muted max-w-2xl mx-auto">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="glass-card p-8 rounded-2xl space-y-8">
                            <h3 className="text-2xl text-white font-semibold mb-6">Contact Information</h3>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <HiOutlineMail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Email</h4>
                                    <a href="mailto:kartikkamatagi2004@gmail.com" className="text-dark-muted hover:text-primary transition-colors">
                                        kartikkamatagi2004@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <HiOutlinePhone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Phone</h4>
                                    <a href="tel:+917019773658" className="text-dark-muted hover:text-primary transition-colors">
                                        +91 7019773658
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                    <HiLocationMarker size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Location</h4>
                                    <p className="text-dark-muted">
                                        Bengaluru, India
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6 border-t border-dark-border">
                                <h4 className="text-white font-medium mb-4">Connect with me</h4>
                                <div className="flex gap-4">
                                    <a href="https://www.linkedin.com/in/karthik-kamatagi-12b73a386" className="w-10 h-10 rounded-full bg-dark-bg flex items-center justify-center text-dark-muted hover:text-white hover:bg-[#0077b5] transition-all">
                                        <FaLinkedin size={20} />
                                    </a>
                                    <a href="https://github.com/KartikKamatagi" className="w-10 h-10 rounded-full bg-dark-bg flex items-center justify-center text-dark-muted hover:text-white hover:bg-[#333] transition-all">
                                        <FaGithub size={20} />
                                    </a>
                                    <a href="https://www.instagram.com/kartik_kamatagi_?igsh=eTN0c2Vma2l2MGk5" className="w-10 h-10 rounded-full bg-dark-bg flex items-center justify-center text-dark-muted hover:text-white hover:bg-[#1da1f2] transition-all">
                                        <FaInstagram size={20} />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6 relative overflow-hidden">
                            <h3 className="text-2xl text-white font-semibold mb-6">Send a Message</h3>

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-dark-muted mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="Enter Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-dark-muted mb-2">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="example@gmail.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-dark-muted mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status.loading}
                                className={`w-full bg-primary hover:bg-primary-hover text-white font-medium py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2 hov-scale ${status.loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {status.loading ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : 'Send Message'}
                            </button>

                            {/* Status Messages */}
                            <AnimatePresence>
                                {status.success && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2 text-green-400 bg-green-400/10 p-4 rounded-lg border border-green-400/20"
                                    >
                                        <HiCheckCircle size={20} />
                                        <span>{status.message}</span>
                                    </motion.div>
                                )}

                                {status.error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-lg border border-red-400/20"
                                    >
                                        <HiExclamationCircle size={20} />
                                        <span>{status.message}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
