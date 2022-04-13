
import {useRef,useState,useEffect} from 'react'
import styles from './Home.module.css'
import Map from '../components/UI/Map'

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
  
   
    console.log(ip)
    return (
    <div className={styles.home}>
         <h1>Home Page</h1>
         <form onSubmit={handleSubmit}>
            <input ref={inputRef} placeholder="enter the IP"></input>
            <button>{'>'}</button>
         </form>
        { geoData && <Map position={[geoData.location.lat,geoData.location.lng]} />}

    </div>
    )
}

export default Home;