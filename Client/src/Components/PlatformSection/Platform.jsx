
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import TelegramImage from "../../assets/images/telegram.png"
import AndroidImage from "../../assets/images/android.jpg"
import Button from "../Button";

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-primary">
        <motion.div  style={{ x }} className="flex gap-4  ">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div key={card.id} className="group relative  h-[450px] w-[460px]  md:w-[1470px]  " >
      <div className="absolute inset-0 z-10 grid place-content-center  md:w-128 bg-metal  element">
      <img src={card.url} className=" h-64  rounded-lg"></img>

<motion.div 
 initial={{opacity:0 ,scale : 0}}
 whileInView={{ opacity: 1 , scale : 1 }}
 viewport={{ once: true }}
 transition={{ delay: 0.3,
                 duration : 0.5
  }}
 className=" bg-white w-3/4 p-6   h-64  rounded-lg flex flex-col justify-center items-center">
 <h1 className="font-martian text-metal text-xl m-4">{card.title}</h1>
 <h3 className="font-inter mb-4 text-secondary ">{card.heading}</h3>
 <p className="font-inter">{card.pahragraph}</p>
 <Button
     text="START CHAT"
     styles="mt-8  bg-gradient-to-r from-midnight to-metal rounded-2xl  border-metal font-bold px-6 py-3 text-white "
   />
</motion.div>
      </div>
    </div>
  );
};
 export default HorizontalScrollCarousel;

 
 const cards = [
  {
    url: TelegramImage,
    title: "Enderase Telegram Bot",
    heading : "Get Legal Wisdom on Telegram",
    pahragraph : " Your 24/7 Legal Assistant in Telegram. Instant, reliable answers to your legal questions. Simplify Ethiopian law with every chat.",
    link :"/dshsjh",
    id: 1,
  },
  {
    url: AndroidImage,
    title: "Enderase Android App",
    heading : "Get Legal Wisdom on Telegram",
    pahragraph : " . Access accurate legal insights anytime, anywhere. Your trusted guide for legal decisions.",
    link :"/dshsjh",
    id: 2,
  },
 
];






































// const HorizontalScrollCarousel = () => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

//   return (
//     <section ref={targetRef} className="relative h-[300vh] bg-tahiti ">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <motion.div style={{ x }} className="flex gap-4 ">
//           {cards.map((card) => {
//             return <Card card={card} key={card.id} />;
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const Card = ({ card }) => {
//   return (
//     <div key={card.id} className="group relative h-64 w-screen overflow-hidden ">
//       <div  className="absolute inset-0 z-0  grid grid-cols-2 ">

         
//       </div>
//     </div>
//   );
// };

// export default HorizontalScrollCarousel;


