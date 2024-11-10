'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaMobile, FaDesktop, FaServer, FaPalette, FaRocket, FaBrain, FaAccessibleIcon } from 'react-icons/fa';

const services = [
  { icon: FaCode, title: 'Web Development', description: 'Creating responsive and dynamic websites using modern technologies.' },
  { icon: FaMobile, title: 'Mobile App Development', description: 'Developing cross-platform mobile applications for iOS and Android.' },
  { icon: FaDesktop, title: 'Desktop Applications', description: 'Building efficient and user-friendly desktop software solutions.' },
  { icon: FaServer, title: 'Backend Development', description: 'Designing and implementing robust server-side applications and APIs.' },
  { icon: FaPalette, title: 'UI/UX Design', description: 'Crafting intuitive and visually appealing user interfaces and experiences.' },
  { icon: FaRocket, title: 'Performance Optimization', description: 'Enhancing the speed and efficiency of existing applications.' },
  { icon: FaBrain, title: 'AI Graphic Designing', description: 'Leveraging AI technologies to create unique and innovative graphic designs.' },
  { icon: FaRocket, title: 'Frontend Performance Optimization', description: 'Enhancing website speed and efficiency for better user experience.' },
  { icon: FaAccessibleIcon, title: 'Web Accessibility Implementation', description: 'Ensuring websites are accessible to all users, including those with disabilities.' },
];

export default function Services() {
  const [typedText, setTypedText] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const fullText = "My Services";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          className="text-6xl font-bold text-center mb-12 overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-gradient">
            {typedText}
            <span className="animate-blink">|</span>
          </span>
        </motion.h1>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index}
              isSelected={selectedService === index}
              onClick={() => setSelectedService(index)}
            />
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedService !== null && (
          <ServiceModal 
            service={services[selectedService]} 
            onClose={() => setSelectedService(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function ServiceCard({ service, index, isSelected, onClick }) {
  return (
    <motion.div 
      className={`bg-gray-800 rounded-lg p-6 shadow-lg transition duration-300 cursor-pointer ${isSelected ? 'ring-2 ring-blue-400' : 'hover:shadow-2xl'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      onClick={onClick}
    >
      <motion.div
        className="flex justify-center"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 260, damping: 20 }}
      >
        <service.icon className="text-5xl mb-4 text-blue-400" />
      </motion.div>
      <motion.h2 
        className="text-xl font-semibold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
      >
        {service.title}
      </motion.h2>
      <motion.p 
        className="text-gray-400 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.9, duration: 0.5 }}
      >
        {service.description}
      </motion.p>
    </motion.div>
  );
}

function ServiceModal({ service, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-800 rounded-lg p-8 max-w-md w-full"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            {service.title}
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-gray-300 mb-6">{service.description}</p>
        <div className="flex justify-center">
          <service.icon className="text-6xl text-blue-400" />
        </div>
      </motion.div>
    </motion.div>
  );
}