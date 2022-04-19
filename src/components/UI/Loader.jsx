import {motion} from 'framer-motion'

const Loader = () => {
    const loaderVariants = {
        loading: {
            x: [-20,20],
            y: [0,-30],
            transition: {
                x:{yoyo:Infinity, duration: 0.5},
                y:{yoyo:Infinity, duration: 0.25,ease:'easeOut'}
            }
        }
    }
    return (
        <motion.div className={styles.loader} variants={loaderVariants}
        animate="loading">

        </motion.div>
    )
}

export default Loader;