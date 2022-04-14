import { FaGithub } from 'react-icons/fa';
import styles from './MainHeader.module.css'
import {motion} from 'framer-motion'

const logoVariants = {
    start: {y: '-100vh', type:'spring', stiffness: '100'},
    end: {y:0,
    transition:{duration:0.5}}
    
}
const MainHeader = () => {
    return (
        <header className={styles.header_container}>
         <div className={styles.header}>
             <motion.h2   variants={logoVariants} initial='start' animate='end'>IP Tracker - React</motion.h2>
         </div>
           <motion.a   whileHover={{ rotate: 180, scale:1.1}}  variants={logoVariants} initial='start' animate='end' target ="_blank" href="https://github.com/Jakub-Chojnacki/IpTracker-React"><FaGithub className={styles.github}/></motion.a>
        </header>
    )
}

export default MainHeader;