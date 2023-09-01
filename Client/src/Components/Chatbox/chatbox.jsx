import styles from './chatbox.module.css';
import { useState, useEffect, useRef } from 'react';

import Welcome from './Welcome/welcome';
import TypingAnimation from './typingAnim/TypingAnimation';

const Chatbox = () => {

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const autoScrolled = useRef(null);
    const [typingAnimation ,setTyping] = useState(false)
    

    const handleSend = async (e) => {
      

        if (e){
            e.preventDefault();
        }
        
        console.log('From input: ', input);
      
        try {
          const response = await fetch('http://localhost:3000/ask', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question: input })
          });
          setTyping(true);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
          setMessages([
            ...messages,
            { text: input, isUser: true },
            { text: data.answer, isUser: false }
          ]);
          setInput("");
          setTyping(false);
          console.log(data.answer);
        } catch (error) {
          console.error('Error:', error);
        }
      };

        useEffect(() => {
          // Scroll to the bottom of the container when component updates
          autoScrolled.current.scrollTop = autoScrolled.current.scrollHeight;
        });

         
     
    return (
        <section className={styles.chatbox} ref={autoScrolled}>
          
            <Welcome handleSend={handleSend} input={input} setInput={setInput} setMessages={setMessages}/>

            <div className={styles.chatWrapper}>

             {messages.map((message, index) => (
                <div key={index} 
                className={message.isUser? styles.chatLogUser : styles.chatLogAi}> 
                <div className={message.isUser? styles.chatMessageUser : styles.chatMessageAi}>
                    <div className={message.isUser? styles.avatarUser : styles.avatarAi}></div>
                    <div className={message.isUser? styles.messageUser : styles.messageAi}>{message.text}</div>
                </div>    
            </div>
            ))}
            
            </div>
            
            <div className={styles.chatInputholder}>
                {typingAnimation ? <TypingAnimation /> : null}
                <input placeholder='Ask me anything ...' className={styles.chatInputTextarea} value={input} onChange={(e) => setInput(e.target.value)}></input>
                <button onClick={handleSend} className={input !== "" ? styles.sendBtn : null} disabled = {input === ''}>send</button>
               
          
            </div>
        </section>
    )
}

export default Chatbox;