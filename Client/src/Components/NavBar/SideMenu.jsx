import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MenuItem } from './MenuItem';

export const SideMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const variants = {
    open: {
      display : "block",
      opacity :1 ,
    
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      display : "none",
      opacity : 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  
 return (
   <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
     <MenuToggle toggle={() => toggleOpen()} className=" m-auto" />

     <motion.ul className="w-44 absolute bg-white p-1 right-5 rounded-md shadow-black shadow-md" variants={variants}>
       {itemIds.map((i) => (
         <MenuItem i={i} key={i} />
       ))}
     </motion.ul>
   </motion.nav>
 );
};
const itemIds = [0, 1, 2, 3, 4];