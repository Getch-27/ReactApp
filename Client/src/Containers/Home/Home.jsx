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

      <h1 className="EnderaseHero mt-6 font-martian bg-gradient-to-b from-midnight to-midnight m-auto w-128 font-thin text-transparent bg-clip-text text-center">
        ENDERASE
      </h1>
      <div className="flex justify-between w-128 mx-auto items-cetrer p-10">
        <div className="mt-8">
          <h1 className="font-martian  text-4xl w-96 text-white">
            Robust <span className=" text-midnight">Legal AI Assistance</span>{" "}
            at Your Service.
            <span className=" text-metal">24/7</span>
          </h1>
          <motion.span whileHover={{ scale: 0.5 }}>
            {" "}
            <Button
              text="START CHAT"
              styles="mt-8  bg-gradient-to-r from-midnight to-metal rounded-3xl  border-metal font-bold shadow-md px-10 py-4 text-white w-128"
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
          className=" absolute right-24"
        ></motion.img>
      </div>
    </section>
   <section className='h-full descripion bg-primary'>
  
    
   </section>
    </>
   );
}
