import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
    title: 'IBM Full Stack Software Developer',
    issuer: 'IBM Skills Network',
    year: '2024',
    description: 'Complete full-stack development program covering front-end, back-end, databases, and cloud deployment.',
    skills: [
      'HTML', 'CSS', 'JavaScript',
      'Git', 'Node.js', 'React',
      'Python','SQL', 'Django'
    ],
    verified: true,
    certificateUrl: '/assets/ibm-full-stack-developer.pdf'
  },
  {
    title: 'Generative AI for Everyone',
    issuer: 'DeepLearning.AI',
    year: '2024',
    description: 'Introductory course on Generative AI, covering large language models, practical applications, and ethical implications.',
    skills: ['Generative AI', 'Prompt Engineering', 'LLMs'],
    verified: true,
    certificateUrl: '/assets/generative-ai-for-everyone.pdf'
  },
  {
    title: 'Introduction to Artificial Intelligence (AI)',
    issuer: 'IBM',
    year: '2024',
    description: 'A beginner-friendly introduction to Artificial Intelligence, its applications, ethical concerns, and how AI is transforming industries.',
    skills: ['AI Concepts', 'Machine Learning', 'Ethics in AI'],
    verified: true,
    certificateUrl: '/assets/introduction-to-ai.pdf'
  },
  {
    title: 'Getting Started with Git & GitHub',
    issuer: 'IBM',
    year: '2023',
    description: 'Essential version control skills including Git fundamentals, GitHub workflows, and collaborative development practices.',
    skills: ['Git', 'GitHub', 'Collaboration'],
    verified: true,
    certificateUrl: '#'
  }
];


  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Certifications
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Professional certifications and achievements in technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <Award className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-blue-600 dark:text-purple-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  
                  {cert.verified && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Verified
                    </div>
                  )}
                </div>

                {/* Year */}
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-3">
                  <Calendar size={16} />
                  <span className="text-sm">{cert.year}</span>
                </div>

                {/* Description */}
                <p className="text-slate-700 dark:text-slate-300 mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* View Certificate Button */}
                <motion.a
                  href={cert.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300 w-full justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={16} />
                  View Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-purple-400 mb-2">4+</div>
              <div className="text-slate-600 dark:text-slate-400">Certifications Earned</div>
            </div>
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-purple-400 mb-2">100%</div>
              <div className="text-slate-600 dark:text-slate-400">Completion Rate</div>
            </div>
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-purple-400 mb-2">2024</div>
              <div className="text-slate-600 dark:text-slate-400">Latest Achievement</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;