import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};



export const MenuItem = ({ i }) => {
  
  return (
    <motion.li className="flex justify-center"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder rounded-full mt-3 mr-1" >LOgo</div> 
      <div className="text-placeholder  rounded mt-3"  >Menu Item</div>
    </motion.li>
  );
};
