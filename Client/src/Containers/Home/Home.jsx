import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../Components/Button';
import "../../App.css";
import { motion ,useScroll} from 'framer-motion';
import Robot from "../../assets/images/chatRobot.png"

import NavigationBar from '../../Components/NavBar/NavigationBar';
import Platform from '../../Components/PlatformSection/Platform';

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
    {/* landing section */}

      <section className="h-full ">
        <NavigationBar />

        <h1 className="EnderaseHero text-[2.25rem]  md:text-[7rem] mt-6 font-martian bg-gradient-to-b from-midnight to-white m-auto w-128 font-thin text-transparent bg-clip-text text-center">
          ENDERASE
        </h1>
        <div className="grid md:grid-cols-2 w-128   py-10 m-auto">
          <div className="py-9  order-2 md:order-1 flex flex-col justify-center items-center md:items-start">
            <h1 className="font-martian md:text-4xl  text-2xl w-128 md:w-2/3 text-white">
              Robust <span className=" text-midnight">Legal AI Assistance </span> 
              at Your Service.
              <span className=" text-metal">24/7</span>
            </h1>

            <Button
              text="START CHAT"
              styles="mt-8 bg-gradient-to-r from-midnight to-metal rounded-2xl  border-metal font-bold py-4 px-8  text-white "
            />
          </div>

          <motion.img
            animate={{
              x: [-34, -36, -35, -34],
              y: [34, 36, 35, 34],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [1],
              repeat: Infinity,
            }}
            src={Robot}
            className=" w-64 md:w-96 m-auto  order-1 md:order-1"
          ></motion.img>
        </div>
      </section>

      {/* descripion section */}

      <section className=" descripion bg-primary">
        <div className="p-6">
          <h1 className="font-martian  text-2xl w-96 text-white mt-2 p-3">
            What is Enderase
          </h1>
          <p className= " m-auto md:m-6 bg-gradient-to-br from-secondary from-70% to-transoarent md:w-2/3 w-128 text-dim-White py-3 px-6 rounded font-nunito">
            Enderase is an innovative legal knowledge chatbot solution designed
            to address the legal knowledge gap in Ethiopia. It serves as a
            valuable resource for individuals, businesses, startups, and legal
            professionals by providing affordable and accessible legal
            information and guidance through the use of AI technology.
          </p>
        </div>
        <div>
          <h1 className="font-martian bg-gradient-to-r from-tahiti to-metal bg-clip-text  text-2xl w-128 m-auto text-center text-transparent mt-2 p-3">
            Unlock Your Legal Advantage with Enderase
          </h1>
          <div className="grid sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
           
            <div>
              <h1 className=" font-martian text-white ">
              Startups and Entrepreneurs
              </h1>
              <p className='text-dim-White py-3  '> Gain reliable legal insights during your business's critical initial phase, ensuring a strong foundation for success.</p>
            </div>
            <div>
              <h1 className=" font-martian text-white">
              Small and Medium Businesses
              </h1>
              <p className='text-dim-White py-3  '>Reduce costs by accessing prompt solutions to simple legal queries, enabling your business to thrive.</p>
            </div>
            <div>
              <h1 className=" font-martian text-white  ">
                Law Students, Lawyers, and General Public Users
              </h1>
              <p className=' text-dim-White py-3 '>
                Streamline document management, boost productivity, and access
                quick and affordable legal advice, allowing you to focus on core
                legal work or personal matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* alternative platforms page */}

      <secton>
      <h1 className="font-martian bg-gradient-to-r from-tahiti to-metal bg-clip-text  text-2xl w-128 m-auto text-center text-transparent mt-2 p-3">
            Our Platforms
          </h1>
          <Platform/>
      </secton>
      <section className='h-full'>
        <h1>Contuct Us</h1>
      </section>
    </>
  );
}
