import { useState } from "react"

export default function Artist(){
    const [artist, setArtistCount] = useState(25);

    const handleAddArtist = () =>{
        const newArtist = artist + 1;
        setArtistCount(newArtist)
    }

    const handleTransferArtist = () =>{
        const newArtist = artist - 1;
        setArtistCount(newArtist) 
    }

    return(
        <div style={{border:'2px solid blue', borderRadius: '12px' , background:'skyblue'}}>
            <h2>Saimum Shilpi Gusti Young Artist</h2>
            <h3>Artist Counter: {artist}</h3>
            <div style={{display:'flex', gap:'15px', alignItems:'center',justifyContent:'center',margin:'10px'}}>
            <button onClick={handleAddArtist}>Add Artist</button>
            <button onClick={handleTransferArtist}>Transfer Artist</button>
            </div>
        </div>
    )
}