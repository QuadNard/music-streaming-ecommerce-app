import React from 'react';
import { motion } from 'framer-motion';

function AboutUs() {
  const missionStatement = {
    title: 'Our Mission',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod enim eu felis egestas lobortis. Integer lobortis accumsan arcu non consequat.',
  };

  const aboutUs = {
    title: 'About Us',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod enim eu felis egestas lobortis. Integer lobortis accumsan arcu non consequat.',
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <div className="max-w-3xl">
        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-4">
            <p className="text-gray-800 font-semibold text-lg mb-2">{missionStatement.title}</p>
            <p className="text-gray-600 leading-7">{missionStatement.text}</p>
          </div>
        </motion.div>
        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="p-4">
            <p className="text-gray-800 font-semibold text-lg mb-2">{aboutUs.title}</p>
            <p className="text-gray-600 leading-7">{aboutUs.text}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
