//welcome page component
import styles from './welcome.module.css'; //importing the styles


//props received from the parent component
const Welcome = (props) => {
  // Destructuring props to extract setInput and handleSend functions
    const setInput = props.setInput;
    const handleSend = props.handleSend;
    
   // Function to handle sending a message
    const handleSendMessage = async (message) => {
        // Set the input with the provided message
      setInput(message);
      console.log('The input is set as the starter question');
      try {
        // Await the handleSend function to send the message
        await handleSend(); 
        console.log('Message sent successfully');
        
      } catch (error) {
        console.error('Error sending the message:', error);

      }
    }
    return (
        <section className={styles.welcome}>
            <h1 className={styles.bigTitle}>EnderaseAI</h1>
            <div className={styles.promptContainer}>

               {/* Prompt 1 */}
            <div className={styles.prompt}>
                    <p className={styles.promptTitle}>🖐️ Ask Anything Legal</p>
                    <div className={styles.promptContent}>
                        <a className={styles.starterQuestion} onClick={() => handleSendMessage('What are the legal requirements that I need to be aware of when starting a business?')}>
                        What are the legal steps I need to follow to register my startup in Ethiopia?
                       </a></div>
                </div>
          
                {/* Prompt 2 */}
                <div className={styles.prompt}>
                    <p className={styles.promptTitle}>💡 Instant Legal Answers</p>
                    <div className={styles.promptContent}>
                        <a className={styles.starterQuestion} onClick={() => handleSendMessage('What are the legal requirements that I need to be aware of when starting a business?')}>
                        What are the legal options available to individuals who have been victims of domestic violence in Ethiopia, and how can they seek protection?
                       </a></div>
                </div>

                 {/* Prompt 3 */}

                <div className={styles.prompt}>
                    <p className={styles.promptTitle}>📒 Your Legal Advisor</p>
                    <div className={styles.promptContent}>
                        <a className={styles.starterQuestion} onClick={() => handleSendMessage('How can I legally protect my inventions, creative works, or artistic creations? ')}>
                        What are the tax implications for a new e-commerce business in Ethiopia?
                       </a></div>
                </div>
                
            </div>
            <div className={styles.slogan}>Unlock Ethiopian Law with EnderaseAI: Your Legal Companion!</div>
            </section>

    
    )
}

export default Welcome;