import React, { useState, useEffect, useRef } from "react";
import styles from "./chatbox.module.css";
import Welcome from "./Welcome/welcome";
import TypingAnimation from "./typingAnim/TypingAnimation";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import MessageContext from "./MessageContext/contetxt";

import User from "./../../images/User.png";
import Robot from "./../../images/Robot.png";



const Chatbox = () => {
  // State variables
  const [input, setInput] = useState(""); // Input message from the user
  const [messages, setMessages] = useState([]); // Array to store chat messages
  const autoScrolled = useRef(null); // Ref for scrolling to the bottom
  const [typingAnimation, setTypingAnimation] = useState(false); // State for typing animation
  const [displayResponse, setDisplayResponse] = useState(""); // Displayed AI response
  const [displayContext, setDisplayContext] = useState(false); // State for displaying context

  // Handle Enter key press in the input field
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSend();
    }
  };

  // Function to send a message to the AI server
  const handleSend = async (e) => {
    if (e) {
      e.preventDefault();
    }

    // Log user's input
    console.log("Input: ", input);

    // Display typing animation
    setTypingAnimation(true);
   

    try {
      // Send a POST request to the AI server
      const response = await fetch("https://enderaseai.onrender.com/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: input }),
      });

      if (!response.ok) {
        throw new Error("Network response was not okay");
      }

      // Parse the AI's response
      const data = await response.json();
      console.log(data);

      let i = 0;
      const responseMessage = data.Response;
      const responseContext = data.Context;

      // Animate the AI's response message
      const intervalId = setInterval(() => {
        setDisplayResponse(responseMessage.slice(0, i));
        i++;

        if (i > responseMessage.length) {
          clearInterval(intervalId);
          setTypingAnimation(false);
        }
      }, 10);

      // Update the chat messages with user's input and AI's response
      setMessages([
        ...messages,
        { text: input, isUser: true, context: "", showContext: false },
        { text: responseMessage, isUser: false, context: responseContext, showContext: false },
      ]);

      // Clear the input field
      setInput("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Automatically scroll to the bottom when messages change
  useEffect(() => {
    autoScrolled.current.scrollTop = autoScrolled.current.scrollHeight;
  }, [messages]);

  // Render the component
  return (
    <section className={styles.chatbox} ref={autoScrolled}>
      {/* Welcome message and input */}

      <Welcome style ={{displayContext}}
        handleSend={handleSend}
        input={input}
        setInput={setInput}
        setMessages={setMessages}
      />

      {/* Display chat messages */}
      <div className={styles.chatWrapper}>
  {/* Container for the entire chat */}
  {messages.map((message, index) => (
    <div key={index} className={message.isUser ? styles.chatLogUser : styles.chatLogAi}>
      {/* Individual chat message container */}
      <div className={message.isUser ? styles.chatMessageUser : styles.chatMessageAi}>
        {/* User avatar if the message is from the user */}
        {message.isUser ? <img alt="" src={User} className={styles.UserAvatar} /> : null}

        <div className={message.isUser ? styles.messageUser : styles.messageAi}>
          {/* Display either the message text or AI response based on conditions */}
          {index === messages.length - 1 ? (message.isUser ? (message.text) : (displayResponse)) : (message.text)}

          {/* Display additional context for AI messages if not in a typing animation */}
          {!message.isUser && !typingAnimation && (
            <MessageContext 
              msgContext={message.context}
            />
          )}
        </div>
        {/* AI avatar if the message is from the AI */}
        {!message.isUser ? <img alt="" src={Robot} className={styles.AiAvatar} /> : null}
      </div>
    </div>
  ))}
</div>


      {/* Input field and send button */}
      <div className={styles.chatInputholder}>
        <div className={styles.AnimationContainer}>
          {typingAnimation ? <TypingAnimation /> : null}
        </div>

        <div className={styles.InputContainer}>
          <input
            placeholder="Ask me anything ..."
            className={styles.chatInputTextarea}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <SendRoundedIcon
            fontSize="large"
            onClick={handleSend}
            className={input !== "" ? styles.sendBtn : null}
            disabled={input === ""}
          />
        </div>
      </div>
    </section>
  );
};

export default Chatbox;
