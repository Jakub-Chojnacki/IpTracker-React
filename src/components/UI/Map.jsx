import { MapContainer, TileLayer, Marker, Popup ,useMap} from 'react-leaflet'
import styles from './Map.module.css'

const Map = (props) => {
   
    
 return (
        <div className="map">
            <MapContainer className={styles.leaflet} center={props.position} zoom={13}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <MyComponent position={props.position}/>
            </MapContainer>
        </div>
 )
}

function MyComponent(props) {
    const map = useMap();
    map.setView(props.position,13);
    return null;
    }
export default Map;