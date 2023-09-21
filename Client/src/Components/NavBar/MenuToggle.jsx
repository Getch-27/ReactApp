import * as React from "react";
import { motion } from "framer-motion";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#df2672"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button onClick={toggle} >
    <motion.svg  whileHover={{
    scale: 1.2,
    transition: { duration: .3 },
   }}
  whileTap={{ scale: 0.9  , outline : "none"}} 
  
  width="50" height="23" viewBox="0 0 23 23" >
   
      <Path 
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open:   { d: "M 2 2.5 L 17 16.5" },
          
        }}
      />
      <Path
       variants={{
          closed: {  d:"M 2  9.423 L 30 9.423"  },
          open: {d:"M 0 9.423 L 0 9.423"}
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </motion.svg>
  </button>
);
