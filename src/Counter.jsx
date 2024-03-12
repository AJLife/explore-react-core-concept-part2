import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount); 
    }
    const handleReduce = () =>{
        const newCount = count - 1; 
        setCount(newCount);
    }
    return(
        <div style={{border:'2px solid blue', borderRadius: '12px' , background:'skyblue'}}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd} style={{marginBottom:'15px'}} >Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}