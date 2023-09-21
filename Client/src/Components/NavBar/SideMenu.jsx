import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MenuItem } from './MenuItem';
import HomeRoundedIcon  from '@mui/icons-material/HomeRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Groups2SharpIcon from '@mui/icons-material/Groups2Sharp';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';

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

     <motion.ul className="w-44 absolute bg-white p-1 right-5 rounded-md shadow-black shadow-md overflow-hidden" variants={variants}>
       {menuList.map((list ,index) => (
         <MenuItem i={index} key={index} text ={list.text} link ={list.link} icon ={list.icon}/>
       ))}
     </motion.ul>
   </motion.nav>
 );
};
const menuList = [
  { icon :<HomeRoundedIcon />,
    text: "Home",
    link: "/Home"
  },
  { icon :<LockOpenRoundedIcon />,
    text: "LogIn/Signin",
    link: "/login"
  },
  { icon :<PlayArrowRoundedIcon />,
    text: "Get Started",
    link: "/chat"
  },
  { icon :<Groups2SharpIcon />,
    text: "About Us",
    link: "/About"
  },
  { icon :<ContactMailRoundedIcon />,
  text: "Contact Us",
  link: "/Contact"
}
];