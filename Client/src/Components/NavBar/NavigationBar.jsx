import React from 'react'
import Logo from "../../assets/images/Logo.png";
import {SideMenu} from "./SideMenu";


export default function NavigationBar() {
return (
 
     <header className=" w-128  m-auto flex justify-between p-2 pt-12 items-center ">
      <div className='logo flex items-end '>
        <img src={Logo} className=' w-10 h-8'></img>
        <h1 className=' font-martian font-light text-xl ml-2 text-transparent  bg-gradient-to-b from-white to-balck bg-clip-text'>EnderaseAI</h1>
      </div>
          <SideMenu />
     </header>
   )
}