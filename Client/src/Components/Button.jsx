import React from 'react'
import {motion} from "framer-motion";
export default function Button({text ,styles}) {
  return (
    <motion.button 
    whileHover={{scale:1.1}}
    whileTap={{scale:0.9}} 
    className={styles}>{text}</motion.button>
  )

}
