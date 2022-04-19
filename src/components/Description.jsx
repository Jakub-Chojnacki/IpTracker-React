import styles from './Description.module.css'
import {motion} from 'framer-motion'
const Description = () => {
  
    const sentenceContainer = {
        hidden: {opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                delay:0.5,
                staggerChildren: 0.03
            }
        },
    }

    const letter = {
        hidden: {opacity:0,y:50},
        visible: {opacity:1, y:0}
    }

    const title = {
        hidden: {opacity: 0,y:-50},
        visible: {opacity:1, y:0}
    }

    const line1 = 'Ip Tracker allows you to trace an IP Address using ipify API.';
    const line2 = 'It shows you the ISP, location and weather information about a chosen Ip address.'

    const FirstLine = line1.split("").map((char, index) => {
        return (
          <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
        )
      })

    const SecondLine = line2.split("").map((char, index) => {
        return (
          <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
        )
      })
    
   
    return(
        <motion.article variants={sentenceContainer} initial='hidden' animate='visible' className={styles.description}>
            <motion.h1  variants={title}>Welcome to IP Tracker!</motion.h1>
              <p>{FirstLine}</p>   
              <p>{SecondLine}</p>  
        </motion.article>
    )
}

export default Description;