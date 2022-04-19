
import {useRef,useState,useEffect} from 'react'
import styles from './Home.module.css'
import Map from '../components/UI/Map'
import Info from '../components/UI/Info'
import Loader from '../components/UI/Loader'
import {motion } from 'framer-motion'
import Description from '../components/Description'

const Home = () => {
    const inputRef = useRef('')
    const [ip,setIp] = useState('')
    const [error,setError] = useState('')
    const [isFocused,setIsFocused] = useState(false)
    const [geoData,setGeoData] = useState('')
    
   
    const ipValidation = /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;
    const wasTouched = isFocused || inputRef.current.value;

    const handleSubmit = () => {
        if(inputRef.current.value.match(ipValidation)) {
            setError('')
            setIp(inputRef.current.value)
        }else{
            setError('It is not a correct IP Address. Please, try again.')
        }
    }

    useEffect(() => {
        fetch(`https://geo.ipify.org/api/v1?apiKey=at_NR13vLwPZnckYQlgtecvHdVK3VMXi&ipAddress=${ip}`)
        .then(res => res.json())
        .then((data) => setGeoData(data))
    },[ip])
  
    
    return (
    <main className={styles.container}>
        <Description/>
         <form className={styles.form}>
            <input onFocus={()=> setIsFocused(true)} onBlur={()=> setIsFocused(false)} ref={inputRef} className={styles.input} id="IP" name="IP" ></input>
            <motion.label htmlFor='IP' className={styles.label} animate={wasTouched ? {y:-25} : {y:0}} >IP</motion.label>
        </form>
        {error && <motion.p  animate={{x:[0,-20,20,-20,20,0]}} className={styles.error}>{error}</motion.p>}
        <motion.button onClick={handleSubmit} className={styles.btn} whileHover={{scale:1.05}}>Track the IP</motion.button>
        {!geoData && <Loader/>}
        {!geoData && <p>Data is loading... Make sure adblock is disabled</p>}
         {geoData && <motion.section className={styles.results} initial={{opacity:0}} animate={{opacity:1, transition:{duration: 1}}}>
            <Info data={geoData}/>  
          <Map position={[geoData.location.lat,geoData.location.lng]} ip={geoData.ip} />
         </motion.section>}
    </main>
    )
}

export default Home;