import React, { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Send, ArrowDown } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Icosahedron, Stars } from "@react-three/drei";

const RotatingIcosahedron: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [3, 2, 5], fov: 70 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <group rotation={[0.3, 0.3, 0]}>
          <Icosahedron args={[1.5, 0]}>
            <meshStandardMaterial
              color="#a78bfa"
              wireframe={true}
              transparent
              opacity={0.4}
              roughness={0.2}
            />
          </Icosahedron>
        </group>
        <Stars radius={40} depth={40} count={4000} factor={2} fade />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Suspense>
    </Canvas>
  );
};

const Hero: React.FC = () => {
  const descriptions = [
    "AI & ML Engineering Student",
    "Passionate Full-Stack Developer",
    "Explorer of Automation & Intelligent Systems"
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % descriptions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-800"
    >

      {/* Right-side 3D shape */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] z-0 opacity-80 pointer-events-none overflow-hidden max-w-full">
        <RotatingIcosahedron />
      </div>


      {/* Text content */}
      <div className="z-10 text-center px-6 max-w-3xl overflow-x-hidden">
        {/* Floating sliding name */}
        <motion.h1
          initial={{ x: "-100%" }}
          animate={{ x: [0, 10, -10, 0], y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6"
        >
          👋Hi, I'm{" "}
          <span className="whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Jishnu S
          </span>
        </motion.h1>

        {/* Changing description */}
        <motion.p
          key={currentTextIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8"
        >
          {descriptions[currentTextIndex]}
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mt-6 overflow-hidden">
          <motion.a
            href="/assets/Jishnu_S_Resume.pdf"
            download="Jishnu_S_Resume.pdf"
            className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md text-sm font-medium shadow-md hover:shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={16} className="mr-2" />
            Download CV
          </motion.a>

          <motion.a
            href="https://github.com/JishnuS732005/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={16} className="mr-2" />
            GitHub
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/jishnu-s-50119b27b"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin size={16} className="mr-2" />
            LinkedIn
          </motion.a>

          <motion.a
            href="https://t.me/ItsMe07032"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send size={16} className="mr-2" />
            Telegram
          </motion.a>
        </div>

        {/* Scroll button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() =>
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
            }
            className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md animate-bounce"
          >
            <ArrowDown className="text-slate-600 dark:text-slate-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
