'use client'

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export const menuSlide = {
    initial: {x: "calc(100% + 100px)"},
    enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
    exit: {x: "calc(100% + 100px)", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
}

export const slide = {
    initial: {x: 80},
    enter: i => ({x: 0, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}}),
    exit: i => ({x: 80, transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i}})
}

export const scale = {
    open: {scale: 1, transition: {duration: 0.3}},
    closed: {scale: 0, transition: {duration: 0.4}}
}

const Menu = () => {
  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className='menu'>
       hey 
    </motion.div>
  )
}

export default function MenuToggle() {
  const [isActive, setIsActive] = useState(false)

  return (
   <>
    <button
      aria-label="Toggle Theme"
      className=
        "focusable rounded-md bg-transparent p-1.5 transition hover:bg-zinc-500/10 dark:hover:bg-zinc-400/20"
      onClick={() => setIsActive(!isActive)}
    >
      <AiOutlineShoppingCart className="w-6 h-6" />
    </button>
    <AnimatePresence mode='wait'>
        {isActive && <Menu />}
    </AnimatePresence>
   </>
  );
}