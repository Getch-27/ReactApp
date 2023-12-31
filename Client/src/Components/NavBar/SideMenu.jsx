import * as React from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { MenuItem } from './MenuItem';
import HomeRoundedIcon  from '@mui/icons-material/HomeRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Groups2SharpIcon from '@mui/icons-material/Groups2Sharp';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';

//  `SideMenu` component displays a side menu that can be toggled open or closed.
export const SideMenu = () => {

  // useCycle is a custom hook from framer-motion that toggles between two values.
  const [isOpen, toggleOpen] = useCycle(false, true);

  // Variants for the motion animations for ul.
  const variants = {
    open: {
      display : "block",
      opacity :1 ,
       scale : 1,
    
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      display : "none",
      opacity : 0,
      scale : 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };
  
 return (
   <motion.nav initial={false} animate={isOpen ? "open" : "closed" }>

    {/* MenuToggle  a custom component for toggling the menu */}
     <MenuToggle toggle={() => toggleOpen()} className=" m-auto" />

     <motion.ul className="w-44 absolute bg-white p-1 right-5 rounded-md shadow-black shadow-md overflow-hidden z-20 h-60" variants={variants}>
       {menuList.map((list ,index) => (

         // MenuItem is a custom component for rendering menu items
         <MenuItem i={index} key={index} text ={list.text} link ={list.link} icon ={list.icon}/>
       ))}
     </motion.ul>
   </motion.nav>
 );
};

// Array of menu items with icons, text, and links
const menuList = [
  { icon :<HomeRoundedIcon />,
    text: "Home",
    link: "/"
  },
  { icon :<LockOpenRoundedIcon />,
    text: "LogIn/Signin",
    link: "/LogInPage"
  },
  { icon :<PlayArrowRoundedIcon />,
    text: "Get Started",
    link: "/Chat"
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