
//IP, ISP, Location(country, city, lat,lng), weather(later?)
import styles from './Info.module.css'
const Info = (props) => {
    
    const {ip,isp,location: {country,city,lat,lng}} = props.data
    
    return (
        <div className={styles.info}>
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
                    <ul>
                        <li>{`Country: ${country}`}</li>
                        <li>{`City: ${city}`}</li>
                        <li>{`Latitude:${lat} `}</li>
                        <li>{`Longitude:${lng}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Info