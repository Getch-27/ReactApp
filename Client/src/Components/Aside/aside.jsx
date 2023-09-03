import styles from './aside.module.css'
import ChatIcon from '@mui/icons-material/ChatBubbleOutlineRounded';

const Aside = () => {
    return (
        <aside className={styles.aside}>
            <h1></h1>
            <div className={styles.asideDiv}>
                <div className={styles.asideTime}>Today</div>
                <div className={styles.asideChat}><ChatIcon className={styles.chatIcon}/><div className={styles.asideMessage}> What is the process of ..</div></div>
                <div className={styles.asideChat}><ChatIcon className={styles.chatIcon}/><div className={styles.asideMessage}> What is the process of ..</div></div>
                <div className={styles.asideChat}><ChatIcon className={styles.chatIcon}/><div className={styles.asideMessage}> What is the process of ..</div></div>
                <div className={styles.asideChat}><ChatIcon className={styles.chatIcon}/><div className={styles.asideMessage}> What is the process of ..</div></div>
            </div>
            <div className={styles.asideDiv}>
                <div className={styles.asideTime}>This week</div>
                <div className={styles.asideChat}><ChatIcon className={styles.chatIcon}/><div className={styles.asideMessage}> What is the process of ..</div></div>
                <div className={styles.asideChat}><ChatIcon className={styles.chatIcon}/><div className={styles.asideMessage}> What is the process of ..</div></div>
                <div className={styles.asideChat}><ChatIcon className={styles.chatIcon}/><div className={styles.asideMessage}> What is the process of ..</div></div>
                <div className={styles.asideChat}><ChatIcon className={styles.chatIcon}/><div className={styles.asideMessage}> What is the process of ..</div></div>
            </div>
        </aside>
    )
}

export default Aside;