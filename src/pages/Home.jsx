
import {useRef,useState,useEffect} from 'react'
import styles from './Home.module.css'
import Map from '../components/UI/Map'
import Info from '../components/UI/Info'

const Home = (props) => {
    const inputRef = useRef(null)
    const [ip,setIp] = useState('')
    const [geoData,setGeoData] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setIp(inputRef.current.value)
    }

    useEffect(() => {
        fetch(`https://geo.ipify.org/api/v1?apiKey=at_NR13vLwPZnckYQlgtecvHdVK3VMXi&ipAddress=${ip}`)
        .then(res => res.json())
        .then((data) => setGeoData(data))
    },[ip])
  

    return (
    <div className={styles.container}>
         <form onSubmit={handleSubmit}>
            <input ref={inputRef} placeholder="enter the IP" className={styles.input}></input>
            <button className={styles.btn}>{'>'}</button>
         </form>
         <div className={styles.results}>
          <Info />   
         { geoData && <Map position={[geoData.location.lat,geoData.location.lng]} ip={geoData.ip} />}
         </div>
     

    </div>
    )
}

export default Home;