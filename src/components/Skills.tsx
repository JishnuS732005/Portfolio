import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: '🌐 HTML', level: 95 },
        { name: '🎨 CSS', level: 90 },
        { name: '⚡ JavaScript', level: 85 },
        { name: '⚛ React.js', level: 55 },
        { name: '📱 BootStrap', level: 90 }
      ]
    },
    {
      icon: Database,
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: '☕ Java', level: 75 },
        { name: '🐍 Python', level: 70 },
        { name: '🗄 MongoDB', level: 65},
        { name: '🐬 MySQL', level: 80 }
      ]
    },
    {
      icon: Brain,
      title: 'AI/ML & Data Science',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: '🧠 Scikit-learn', level: 75 },
        { name: '👁 OpenCV', level: 70 },
        { name: '🔢 Pandas/NumPy', level: 85 },
        { name: '📋 Excel', level: 85 },
        { name: '📊 Power BI', level: 80 },
        { name: '📈 Tableau', level: 85 }

      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Extra Skills',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: '🚀 Git/GitHub', level: 75 },
        { name: '✏️ Figma', level: 82 },
        { name: '⌨️ Typewriting', level: 90 },
        { name: '🚁 Drone Assembly', level: 80 },
        { name: '📐 AutoCAD', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Skills & Expertise</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6`}>
                <category.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;