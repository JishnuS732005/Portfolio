import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'B.E. in Artificial Intelligence & Machine Learning',
      institution: 'K.S.Rangasamy College of Technology',
      location: 'Tamil Nadu, India',
      period: '2022 – 2026',
      grade: 'CGPA: 8.5/10',
      description: 'Specialized in algorithms, deep learning, computer vision.',
      current: true
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Sri Vidya Mandir Sr. Sec. School',
      location: 'Salem',
      period: '2021 – 2022',
      grade: '74.2%',
      description: 'Higher Secondary Certificate in Science stream.',
      current: false
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Sri Vidya Mandir Sr. Sec. School',
      location: 'Salem',
      period: '2019 – 2020',
      grade: '67.2%',
      description: 'Secondary School Leaving Certificate.',
      current: false
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            My academic journey and learning milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full ${
                  item.current 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'bg-slate-300 dark:bg-slate-600'
                } border-4 border-white dark:border-slate-900`}></div>
                
                {/* Content card */}
                <div className="ml-20 flex-1">
                  <motion.div
                    className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                          {item.degree}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-purple-400 font-semibold mb-1">
                          {item.institution}
                        </p>
                      </div>
                      {item.current && (
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap size={16} />
                        <span className="font-semibold">{item.grade}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-700 dark:text-slate-300">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;