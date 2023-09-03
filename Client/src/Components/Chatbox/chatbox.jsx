import React, { useState, useEffect, useRef } from "react";
import styles from "./chatbox.module.css"; // Import styles correctly

import Welcome from "./Welcome/welcome";
import TypingAnimation from "./typingAnim/TypingAnimation";

import SendIcon from "@mui/icons-material/Send";



const Chatbox = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const autoScrolled = useRef(null);
  const [typingAnimation, setTypingAnimation] = useState(false);
  
  const [displayResponse, setDisplayResponse] = useState("");

  const handleSend = async (e) => {
    if (e) {
      e.preventDefault();
    }

    console.log("Input: ", input);

    try {
      const response = await fetch("http://localhost:3000/ask", {
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
      const chatHistory =data.answer;

      const intervalId = setInterval(() => {
        setDisplayResponse(chatHistory.slice(0, i));

        i++;

        if (i > chatHistory.length) {
          clearInterval(intervalId);
          setTypingAnimation(false)
         
          
        }
      }, 20);
      
      setMessages([
        ...messages,
        { text: input, isUser: true },
        { text: data.answer, isUser: false },
      ]);

      setInput("");
      console.log(data.answer);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the container when component updates
    autoScrolled.current.scrollTop = autoScrolled.current.scrollHeight;
  }, [messages]); // Add dependency array to useEffect

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
           <div className={message.isUser ? styles.chatMessageUser : styles.chatMessageAi}>
             <div className={message.isUser ? styles.avatarUser : styles.avatarAi} ></div>


               <div className={ message.isUser ? styles.messageUser : styles.messageAi}>

                 {index === messages.length - 1 ? (message.isUser ? message.text : displayResponse ) : ( // Check if it's the last message
                 message.text )} 
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
          onChange={(e) => setInput(e.target.value)}>
        </input>


        <button onClick={handleSend} className={input !== "" ? styles.sendBtn : null} disabled={input === ""}>
          <SendIcon sx={{ outline: 'none' }}/>
        </button>
          
        </div>
        
      </div>
    </section>
  );
};

export default Chatbox;
