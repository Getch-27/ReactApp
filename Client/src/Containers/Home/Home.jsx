import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import "../../App.css"

import NavigationBar from '../../Components/NavBar/NavigationBar';

export default function Home() {
  return (
   <section className='h-full'>
    <NavigationBar />
    <h1 className='EnderaseHero mt-6 font-martian bg-gradient-to-b from-midnight to-transparent m-auto w-128 font-thin text-transparent bg-clip-text text-center'>ENDERASE</h1>
   </section>     
  )
}
