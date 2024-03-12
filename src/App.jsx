import Album from './Album'
import './App.css'
import Artist from './Artist'
import Counter from './Counter'
import Friends from './Friends'
import Users from './Users'
function App() {
 function handleClick(){
  alert('button clicked')
 }
const handleClick2 = () => {
  alert('Hello Button 2')
}
const addToFive = (num) =>{
 alert(num + 5);
}

  return (
    <>
      <h3>React Core Concept Part 2</h3>
      <Counter></Counter>
      <button  onClick={handleClick}>Click me</button>
      <button  onClick={handleClick2}>Click me 2</button>
      <button onClick={ () => alert('Hello Third clicked')}>Third</button>
     <button onClick={ () => addToFive(3)}>Four</button> 
     <Artist></Artist>
     <Users></Users>
     <Album></Album>
     <Friends></Friends>
    </>
  )
}

export default App
