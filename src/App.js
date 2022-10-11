import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // const employesData = [
  //   { name: 'Ratul Sorkar', designation: 'Backend Developer' },
  //   { name: 'Rahim Uddin', designation: 'Web Developer' },
  //   { name: 'Rabondranath T', designation: 'Graphics Designer' },
  //   { name: 'Debobroto Babu', designation: 'Programer' },
  //   { name: 'Susanto Pal', designation: 'Software Developer' },
  // ]


  return (
    <div className="App">
      <Counter></Counter>
      {/* {employesData.map(employ => <Project name={employ.name} designation={employ.designation}></Project>)} */}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(50);
  const Increase = () => {
    setCount(count + 1);
  }
  const Decrease = () => setCount(count - 1)
  return (
    <div className="">
      <h1 style={{ color: 'goldenRod' }} >Counter Application</h1>
      <h2>Count: {count}</h2>
      <button style={{ background: "black", color: "white", padding: '5px 10px', border: '2px solid aqua', borderRadius: '7px' }} onClick={Increase} >Increase</button>
      <button style={{ background: "black", color: "white", padding: '5px 10px', border: '2px solid aqua', borderRadius: '7px', margin: '0 0 0 5px' }} onClick={Decrease} >Decrease</button>
    </div>
  )
}

function Project(props) {

  return (
    <div className='Box'>
      <h3>Name: {props.name}</h3>
      <h5>Designation: {props.designation}</h5>
    </div>
  );
}

export default App;
