import { useEffect, useState } from "react"

export default function Album() {
const [album , setAlbum] = useState([]);

useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(photos => setAlbum(photos))
},[])
return(
    <div style={{border:'2px solid blue', borderRadius: '12px' , background:'skyblue', marginTop:'14px'}}>
        <h2>Total Photo Album: {album.length}</h2>
    </div>
)
}