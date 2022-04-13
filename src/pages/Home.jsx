
import {useRef,useState,useEffect} from 'react'
import styles from './Home.module.css'
import Map from '../components/UI/Map'
import MainHeader from '../components/UI/MainHeader'

const Home = (props) => {
    const inputRef = useRef(null)
    const [ip,setIp] = useState('')
    const [geoData,setGeoData] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setIp(inputRef.current.value)
    }

    // useEffect(() => {
    //     fetch(`https://geo.ipify.org/api/v1?apiKey=at_NR13vLwPZnckYQlgtecvHdVK3VMXi&ipAddress=${ip}`)
    //     .then(res => res.json())
    //     .then((data) => setGeoData(data))
    // },[ip])
  
   
    console.log(geoData)
    return (
    <div className={styles.container}>
         <MainHeader />
         <form onSubmit={handleSubmit}>
            <input ref={inputRef} placeholder="enter the IP"></input>
            <button>{'>'}</button>
         </form>
         <div className={styles.results}>
         { geoData && <Map position={[geoData.location.lat,geoData.location.lng]} ip={geoData.ip} />}
         </div>
     

    </div>
    )
}

export default Home;