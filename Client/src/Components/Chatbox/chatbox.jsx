import React, { useState, useEffect, useRef } from "react";
import styles from "./chatbox.module.css"; 

import Welcome from "./Welcome/welcome";
import TypingAnimation from "./typingAnim/TypingAnimation";

import SendRoundedIcon from '@mui/icons-material/SendRounded';

// import MessageContext from "./MessageContext/MessageContext";

import ReadMoreIcon from '@mui/icons-material/ReadMore';




const Chatbox = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const autoScrolled = useRef(null);
  const [typingAnimation, setTypingAnimation] = useState(false);
 
  
  const [displayResponse, setDisplayResponse] = useState("");

  const[displayContext , setDisplayContext] = useState(false);
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSend();
    }
  };

  const handleSend = async (e) => {
    if (e) {
      e.preventDefault();
    }

    console.log("Input: ", input);

    try {
      const response = await fetch("https://enderaseai.onrender.com/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }),
      });


      if (!response.ok) {
        throw new Error("Network response was not okay");
      }

      const data = await response.json();
      setTypingAnimation(true)

      let i = 0;
      const responseMessage =data.answer.resMessage;
      const responseContext =data.answer.context;
      console.log(responseContext);
       console.log(responseMessage)
      const intervalId = setInterval(() => {
        setDisplayResponse(responseMessage.slice(0, i));

        i++;

        if (i > responseMessage.length) {
          clearInterval(intervalId);
          setTypingAnimation(false)
         
          
        }
      }, 20);
      
      setMessages([
        ...messages,
        { text: input, isUser: true , context :"" , showContext : false},
        { text: responseMessage, isUser: false , context:responseContext , showContext : false},
      ]);

      setInput("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the container when component updates
    autoScrolled.current.scrollTop = autoScrolled.current.scrollHeight;
  }, [messages]); // Add dependency array to useEffect

function handleButton(id){

  console.log("hunadle")
}

  

  return (
    <section className={styles.chatbox} ref={autoScrolled}>
      <Welcome
        handleSend={handleSend}
        input={input}
        setInput={setInput}
        setMessages={setMessages}
      />

   

      <div className={styles.chatWrapper}>
        {messages.map((message, index) => (
          
          <div  key={index} className={message.isUser ? styles.chatLogUser : styles.chatLogAi} >
           
           
           <div className={message.isUser ? styles.chatMessageUser : styles.chatMessageAi}  >


             <div className={message.isUser ? styles.avatarUser : styles.avatarAi} ></div>


               <div className={ message.isUser ? styles.messageUser : styles.messageAi} >

                 {index === messages.length - 1 ? (message.isUser ? message.text : displayResponse ) : ( // Check if it's the last message
                 message.text )}


                 {typingAnimation ? null :(!message.isUser && <ReadMoreIcon  onClick = {handleButton}/>)}
              
                </div>  
               
            </div>
          </div>
        ))}
      </div>

     

      <div className={styles.chatInputholder}>
        <div className={styles.AnimationContainer}>
        {typingAnimation ? <TypingAnimation /> : null}
        </div>
       

        <div className={styles.InputContainer}>

        <input
          placeholder="Ask me anything ..."
          className={styles.chatInputTextarea} // Use the correct CSS class
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}>
        </input>


       
          <SendRoundedIcon fontSize="large"  onClick={handleSend} className={input !== "" ? styles.sendBtn : null} disabled={input === ""} />

          
        </div>
        
      </div>
    </section>
  );
};

export default Chatbox;
