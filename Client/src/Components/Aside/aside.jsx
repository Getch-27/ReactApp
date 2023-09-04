//A sidebar component which contains previous chats and additional information
//Demo

import styles from './aside.module.css'  //a styles for aside component
import ChatIcon from '@mui/icons-material/ChatBubbleOutlineRounded';  //chat icon imported form icons-material

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <h1></h1>
            <div className={styles.asideDiv}> 
                <div className={styles.asideTime}>Today</div>
                <div className={styles.asideChat}><ChatIcon className={styles.chatIcon}/><div className={styles.asideMessage}> What is the process of ..</div></div>
                <div className={styles.asideChat}><ChatIcon className={styles.chatIcon}/><div className={styles.asideMessage}> What are the requireme ..</div></div>
                <div className={styles.asideChat}><ChatIcon className={styles.chatIcon}/><div className={styles.asideMessage}> What licenses or regis ..</div></div>
                <div className={styles.asideChat}><ChatIcon className={styles.chatIcon}/><div className={styles.asideMessage}> How can I legally prot ..</div></div>
            </div>
            <div className={styles.asideDiv}>
                <div className={styles.asideTime}>Earlier this week</div>
                <div className={styles.asideChat}><ChatIcon className={styles.chatIcon}/><div className={styles.asideMessage}> How can I obtain the r ..</div></div>
                <div className={styles.asideChat}><ChatIcon className={styles.chatIcon}/><div className={styles.asideMessage}> What is the process of ..</div></div>
                <div className={styles.asideChat}><ChatIcon className={styles.chatIcon}/><div className={styles.asideMessage}> What are the requireme ..</div></div>
                <div className={styles.asideChat}><ChatIcon className={styles.chatIcon}/><div className={styles.asideMessage}> How can I legally prot ..</div></div>
            </div>
            <div className={styles.asideFooter}>Developed by AfroGPT 2023.</div>
        </aside>
    )
}

export default Aside;