import { useEffect, useState } from "react"
export default function Users(){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])
    return(
        <div style={{border:'2px solid blue', borderRadius: '12px' , background:'skyblue', marginTop:'14px'}}>
            <h3>Total Users: {users.length}</h3>
            
        </div>
    )
}

/**
 * 1. Declare a state to hold the data
 * 2. UseEffect with call back and dependency array
 * 3. use fetch to load data 
 * 4. set loaded to the state 
 * 5. display data on the component
 */