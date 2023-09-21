import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";


export const SideMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  
 return (
    <motion.nav 
      initial={false}
      animate={isOpen ? "open" : "closed"}
     
    > 
     <MenuToggle toggle={() => toggleOpen()}  className=" m-auto"/>
     
     
    </motion.nav>
  );
};
