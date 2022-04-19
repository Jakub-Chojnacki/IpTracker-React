import styles from './Info.module.css'
import {motion} from 'framer-motion'
import {useState,useEffect} from 'react'
const Info = (props) => {
    const [weatherData,setWeatherData] = useState()
    
    const {ip,isp,location: {country,city,lat,lng}} = props.data  //destructuring nested data so it's easier to use
    
    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=d564a402a42d363361598c4aa9c347d6&units=metric`)
        .then(response => response.json())
        .then(data => setWeatherData(data))
    },[lat,lng])
    return (
        <main  className={styles.info}>
            <h1>Info</h1>
            <div className={styles.grid}>
                <div>
                    <h2>IP</h2>
                    <p>{`Your IP: ${ip} `}</p>
                </div>
                <div>
                    <h2>ISP</h2>
                    <p>{`Your ISP: ${isp}`}</p>
                </div>
                <div>
                    <h2>Location</h2>
                     <div>{`Country: ${country}`}</div>
                     <div>{`City: ${city}`}</div>
                      <div>{`Latitude:${lat} `}</div>
                      <div>{`Longitude:${lng}`}</div>
                </div>
               {weatherData && <div>
                    <h2>Weather</h2>
                    <div className={styles.weather__container}> 
                        <div>
                            <p>{`Temperature: ${weatherData.main.temp}`}</p>
                            <p>{`Description: ${weatherData.weather[0].description}`}</p>
                            <p>{`Wind speed: ${weatherData.wind.speed} m/s`}</p>
                        </div>
                        <motion.img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} alt="weather img" animate={{x:0, transition:{duration: 0.5}}} initial={{x:20}} />
                    </div>
                </div>}
            </div>
        </main>
    )
}

export default Info