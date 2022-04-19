import {motion} from 'framer-motion'
import styles from './Loader.module.css'
const Loader = () => {
    const spinTransition = {
        loop: Infinity,
        ease: "linear",
        duration: 1
      };
      
    return (
        <div className={styles.container}>
            <motion.span 
            className={styles.loader} 
            animate={{rotate:360}} 
            transition={spinTransition}>
            </motion.span>
        </div>
    )
}

export default Loader;