import styles from './welcome.module.css';

const Welcome = (props) => {
    const setInput = props.setInput;
    const handleSend = props.handleSend;
    

    const handleSendMessage = async (message) => {
        
      setInput(message);
      console.log('The input is set as the starter question');
      try {
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

            <div className={styles.prompt}>
                    <p className={styles.promptTitle}>🖐️ Ask Anything Legal</p>
                    <div className={styles.promptContent}>
                        <a className={styles.starterQuestion} onClick={() => handleSendMessage('What are the legal requirements that I need to be aware of when starting a business?')}>
                        What are the legal requirements that I need to be aware of when starting a business? 
                       </a></div>
                </div>

                <div className={styles.prompt}>
                    <p className={styles.promptTitle}>💡 Instant Legal Answers</p>
                    <div className={styles.promptContent}>
                        <a className={styles.starterQuestion} onClick={() => handleSendMessage('What licenses or registrations are required to operate my small business, and how can I obtain them?')}>
                        What licenses or registrations are required to operate my small business, and how can I obtain them? 
                       </a></div>
                </div>

                <div className={styles.prompt}>
                    <p className={styles.promptTitle}>📒 Your Legal Advisor</p>
                    <div className={styles.promptContent}>
                        <a className={styles.starterQuestion} onClick={() => handleSendMessage('How can I legally protect my inventions, creative works, or artistic creations? ')}>
                        How can I legally protect my inventions, creative works, or artistic creations? 
                       </a></div>
                </div>
                
            </div>
            <div className={styles.slogan}>Unlock Ethiopian Law with EnderaseAI: Your Legal Companion!</div>
            </section>

    
    )
}

export default Welcome;