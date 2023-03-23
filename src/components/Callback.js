import {useMemo, useState, useCallback} from 'react'
import Header from './components/Header';
import './App.css'
function Callback() {
  const [number, setNumber] = useState(0)
  const [text, setText] = useState('')  

  const arttir = useCallback(() => {
    setNumber((prevState) => prevState+1)
  },[]);
  
  const azalt = useCallback(() => {
    setNumber((prevState) => prevState-1)
  },[]);

  return (
    <div className="App">
      <Header arttir={arttir} azalt={azalt}/>

      <br/>

      <h1>{number}</h1>
      
      <br/>

      <input type="text" value={text} onChange={({target})=> setText(target.value)} />
    </div>
  );
}
export default Callback;
