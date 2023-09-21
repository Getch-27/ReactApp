import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../Components/Button';
import "../../App.css";
import { motion ,useScroll} from 'framer-motion';
import Robot from "../../assets/images/chatRobot.png"
import legalBOT2 from "../../assets/images/legalBOT2.jpg"
import NavigationBar from '../../Components/NavBar/NavigationBar';

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
       <section className="h-full">
      <NavigationBar />

      <h1 className="EnderaseHero mt-6 font-martian bg-gradient-to-b from-midnight to-white m-auto w-128 font-thin text-transparent bg-clip-text text-center">
        ENDERASE
      </h1>
      <div className="flex justify-between w-128 mx-auto items-cetrer p-10">
        <div className="mt-2">
          <h1 className="font-martian  text-2xl w-96 text-white">
            Robust <span className=" text-midnight">Legal AI Assistance</span>{" "}
            at Your Service.
            <span className=" text-metal">24/7</span>
          </h1>
          <motion.span whileHover={{scale :1.01}}>
            <Button
              text="START CHAT"
              styles="mt-8  bg-gradient-to-r from-midnight to-metal rounded-2xl  border-metal font-bold px-6 py-3 text-white "
            />
          </motion.span>
        </div>
        <motion.img
          initial={{ opacity: 0  , right :100}}
          whileInView={{ opacity: 1 , right : 0 }
          
          }
        transition={{
          delay:0.4,
          duration : 1,
        }}
          src={Robot}
          className=" w-96"
        ></motion.img>
      </div>
    </section>
   <section className='h-full descripion bg-primary'>
  
    
   </section>
    </>
   );
}
