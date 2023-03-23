import {useMemo, useState} from 'react'
import Header from './components/Header';
import './App.css'
function Memo() {
  const [number, setNumber] = useState(0)
  const data = useMemo(() => {return calculateObject();}, [])
  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} data={data}/>
      <br/>
      <h1>{number}</h1>
      <button onClick={()=>{setNumber(number+1)}}>Number +1</button>
      <button onClick={()=>{setNumber(number-1)}}>Number -1</button>
    </div>
  );
}

function calculateObject () {
  console.log("Calculating...")
  for(let i = 0 ; i<1000000000; i++){}
  console.log("Calculating completed.")
  return { name:"Kerem" }
}
  
export default Memo;
