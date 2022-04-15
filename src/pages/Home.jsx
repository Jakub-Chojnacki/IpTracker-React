
import {useRef,useState,useEffect} from 'react'
import styles from './Home.module.css'
import Map from '../components/UI/Map'
import Info from '../components/UI/Info'
import {motion } from 'framer-motion'

const Home = (props) => {
    const inputRef = useRef('')
    const [ip,setIp] = useState('')
    const [isFocused,setIsFocused] = useState(false)
    const [geoData,setGeoData] = useState('')
    const handleSubmit = () => {
        setIp(inputRef.current.value)
    }

    useEffect(() => {
        fetch(`https://geo.ipify.org/api/v1?apiKey=at_NR13vLwPZnckYQlgtecvHdVK3VMXi&ipAddress=${ip}`)
        .then(res => res.json())
        .then((data) => setGeoData(data))
    },[ip])
  
    const wasTouched = isFocused || inputRef.current.value;
    

    return (
    <div className={styles.container}>
         <div className={styles.group}>
    
            <input onFocus={()=> setIsFocused(true)} onBlur={()=> setIsFocused(false)} ref={inputRef} className={styles.input} id="IP" name="IP" ></input>
            <motion.label htmlFor='IP' className={styles.label} animate={wasTouched ? {y:-25} : {y:0}} >IP</motion.label>
         
        </div>
        <motion.button onClick={handleSubmit} className={styles.btn} whileHover={{scale:1.05}}>Get your data</motion.button>
         <div className={styles.results}>
         { geoData && <Info data={geoData}/>  } 
         { geoData && <Map position={[geoData.location.lat,geoData.location.lng]} ip={geoData.ip} />}
         </div>
    </div>
    )
}

export default Home;