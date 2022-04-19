import { MapContainer, TileLayer, Marker, Popup ,useMap} from 'react-leaflet'
const Map = (props) => { 
 return (
        <div className="map">
            <MapContainer>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"     />
                <MyComponent position={props.position}/>
                <Marker position={props.position}>
                    <Popup>
                        {`Your IP: ${props.ip}`}
                    </Popup>
                </Marker>
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