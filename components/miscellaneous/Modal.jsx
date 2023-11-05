import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
       initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
        className='bg-neutral-400 bg-opacity-30 w-max  p-2.5 z-20 fixed left-1/2 transform -translate-x-1/2 bottom-8 flex gap-2.5 rounded-full backdrop-blur-15'>
      <div className='modal-overlay'></div>
      <div className='modal-container'>
        <button className='modal-close' onClick={onClose}>
          &times;
        </button>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        className='modal-content p-4'>
          {children}
          </motion.div>
      </div>
    </motion.div>
    </AnimatePresence>
  );
};

export default Modal;