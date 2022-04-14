
//IP, ISP, Location(country, city, lat,lng), weather(later?)
import styles from './Info.module.css'
const Info = (props) => {
    return (
        <div className={styles.info}>
            <h1>Info</h1>
            <div className={styles.grid}>
                <div>
                    <h2>IP</h2>
                    <p>Your IP: 8.8.8.8</p>
                </div>
                <div>
                    <h2>ISP</h2>
                    <p>Your ISP: Google LLC</p>
                </div>
                <div>
                    <h2>Location</h2>
                    <ul>
                        <li>Country: Poland</li>
                        <li>City: Gdansk</li>
                        <li>Latitude: 53.423</li>
                        <li>Longitude:12.213</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Info