import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Sparkles } from 'lucide-react';


const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/JishnuS732005', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/jishnu-s-50119b27b', label: 'LinkedIn' },
    { icon: MessageCircle, href: 'https://t.me/ItsMe07032', label: 'Telegram' },
    { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&fs=1&to=jishnus.info@gmail.com', label: 'Email' }];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-950 text-white overflow-hidden">
      {/* Wavy SVG Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#0f172a" d="M0,64L48,80C96,96,192,128,288,154.7C384,181,480,203,576,213.3C672,224,768,224,864,224C960,224,1056,224,1152,213.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 z-10 relative">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Jishnu S</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              AI & ML Engineering student creating elegant full-stack solutions, driven by a passion for learning and innovation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-slate-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-4">Reach Me</h4>
            <p className="text-slate-400 mb-2">📧 jishnus.info@gmail.com</p>
            <p className="text-slate-400 mb-2">📱 +91 9245780812</p>
            <p className="text-slate-400">📍 Salem, Tamil Nadu, India</p>
          </motion.div>
        </div>

        {/* Bottom Line */}
        <motion.div
          className="border-t border-slate-700 mt-12 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >

          <p className="text-sm text-slate-500">
            Crafted with <Sparkles size={14} className="inline-block text-yellow-400" /> by <span className="text-white font-semibold">Jishnu S</span>
          </p>

          <p className="text-xs text-slate-500 mt-1">
            © {new Date().getFullYear()} All rights reserved. Empowering ideas through code.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
