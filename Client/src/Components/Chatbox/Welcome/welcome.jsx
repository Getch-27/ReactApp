import styles from './welcome.module.css';

const Welcome = () => {
    return (
        <section className={styles.welcome}>
            <h1>Enderase</h1>
            <div className={styles.promptContainer}>
                
                <div className={styles.prompt}>
                    <p className={styles.promptTitle}>Title one</p>
                    <div className={styles.promptContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolore?</div>
                </div>

                <div className={styles.prompt}> 
                    <p className={styles.promptTitle}>Title two</p>
                    <div className={styles.promptContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolore?</div>    
                </div>

                <div className={styles.prompt}>
                    <p className={styles.promptTitle}>Title three</p>
                    <div className={styles.promptContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, dolore?</div> 
                </div>
                
            </div>
            </section>

    
    )
}

export default Welcome;