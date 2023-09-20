import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import "../../App.css"
import Robot from "../../assets/images/chatRobot.png"

import NavigationBar from '../../Components/NavBar/NavigationBar';

export default function Home() {
  return (
   <section className='h-full'>
    <NavigationBar />
  
    <h1 className='EnderaseHero mt-6 font-martian bg-gradient-to-b from-midnight to-midnight m-auto w-128 font-thin text-transparent bg-clip-text text-center'>ENDERASE</h1>
    <div className='flex justify-between w-128 mx-auto items-cetrer p-10'>
       
        <div>
        <h1 className='font-martian text-4xl w-60 text-white'>Robust <span className=' text-midnight'>Legal AI Assistance</span> at Your Service.
          <span className=' text-metal'>24/7</span>
        </h1>
        <Button text="START CHAT" styles="mt-5  bg-gradient-to-r from-midnight to-metal rounded-3xl  border-metal font-bold shadow-md px-10 py-4 text-white w-128"/>

        </div>
       <img src={Robot} className=' absolute right-24'></img>
       
      
    </div>
    </section>     
  )
}
