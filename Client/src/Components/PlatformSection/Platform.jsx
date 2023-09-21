import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import TelegramImage from "../../assets/images/telegram.png"
import AndroidImage from "../../assets/images/android.jpg"


const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-midnight ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 ">
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
    <div key={card.id} className="group relative h-60 w-screen overflow-hidden bg-neutral-200 grid grid-cols-2 ">
      <div
        
        className="absolute inset-0 z-0  grid grid-cols-2 "
      >
         <img src={card.url} className=" h-64 "></img>
        <div className=" bg-metal m-10 rounded-lg   ">
          <h1 className="font-martian">{card.title}</h1>
          <h3 className="font-inter">{card.heading}</h3>
          <p className="font-inter">{card.pahragraph}</p>
          <a className="font-inter" href={card.link}>link</a>
        </div>
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
