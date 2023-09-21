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

export const MenuItem = ({ i ,icon ,text } ) => {
   return (
    <motion.li className="flex justify-start pl-3 w-full "
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder rounded-full mt-3 mr-1 cursor-pointer text-metal">{icon}</div> 
      <div className="text-placeholder  rounded mt-3 cursor-pointer text-secondary ml-2" >{text}</div>
    </motion.li>
  );
};
