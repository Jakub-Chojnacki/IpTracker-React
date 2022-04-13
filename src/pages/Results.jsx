import { useEffect,useContext,useState } from 'react'
import Map from '../components/UI/Map'
import IpContext from '../store/ip-context'
const Results = (props) => {
    
    const {ip,setIp} = useContext(IpContext)
    const [geoData,setGeoData] = useState('')
    useEffect(()=>{
        fetch(`https://geo.ipify.org/api/v1?apiKey=at_NR13vLwPZnckYQlgtecvHdVK3VMXi&ipAddress=${ip}`)
        .then(res => res.json())
        .then((data) => setGeoData(data))
    },[])

    const pos =  geoData ? [37.40599,-122.078514] : [37.40599,-122.078514];
    
    console.log(geoData)
    return (
        <div>
             <div>This is the results page</div>
           
             
             {geoData && <Map position={pos}/>}
        </div>     
    )
       
       
}

export default Results