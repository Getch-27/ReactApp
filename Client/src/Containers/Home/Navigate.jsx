//created for test perpose only


import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button';

export default function Navigate() {
  return (
    <><div className=" flex justify-between items-center w-67 text-white">
        <div className=" bg-primary w-30 m-5 text-lg">primary</div>
        <div className="bg-secondary font-martian w-30 m-5 text-lg">secondary</div>
        <div className=" bg-midnight font-900 w-30 m-5 text-lg">midnight</div>
        <div className=" bg-metal w-30 m-5 text-lg">metal</div>
        <div className=" bg-tahiti  w-30 m-5 text-lg">tahiti</div>
        
        <h1 className="mx-auto text-red-600 align-middle m-5 font-martian">font martian</h1>
        <h1 className="mx-auto text-red-600 align-middle m-5 font-inter">font inter</h1>
        <h1 className="mx-auto text-red-600 align-middle m-5 font-roboto">font roboto</h1>
        
      </div>
      <Link to={"/LogInPage"}>
          <Button text ="Login" styles=" rounded-3xl border shadow-md px-10 py-2 text-white"/>
        </Link>
       
        <Link to={"/Home"}>
         
          <Button text ="Home" styles=" rounded-3xl border shadow-md px-10 py-2 text-white"/>
        </Link>
</>
      
  );
}
