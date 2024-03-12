import { useEffect, useState } from "react"
import Friend from "./Friend";
export default function Friends(){
    const [friends, setFriend] = useState([]);
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriend(data))
   },[]) 

    return(
        <div style={{border:'2px solid blue', borderRadius: '12px' , background:'skyblue', marginTop:'14px'}}>
            <h3>Friend: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}