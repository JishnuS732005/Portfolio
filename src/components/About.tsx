import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Zap, Target } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { icon: Code, title: 'Full-Stack Developer', description: 'Building end-to-end solutions with modern technologies' },
    { icon: Brain, title: 'AI Enthusiast', description: 'Passionate about machine learning and intelligent systems' },
    { icon: Zap, title: 'Automation Expert', description: 'Creating efficient solutions through automation' },
    { icon: Target, title: 'Problem Solver', description: 'Analytical approach to complex challenges' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            A passionate AI & ML Engineering student dedicated to creating innovative solutions that bridge the gap between technology and real-world problems.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I'm <strong>Jishnu S</strong>, an AI & ML Engineering student at K.S.Rangasamy College of Technology. My journey started with curiosity and grew into a passion for intelligent solutions.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                From building interactive web apps to practical AI projects and drone tech, I thrive on turning complex problems into innovative real-world solutions.
              </p>
              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-600 dark:text-slate-400">
                "Technology is best when it brings people together and solves real problems."
              </blockquote>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div key={item.title} className="p-6 bg-slate-50 dark:bg-slate-700 rounded-xl hover:shadow-lg transition-all duration-300" whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }}>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;