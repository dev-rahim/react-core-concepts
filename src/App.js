import logo from './logo.svg';
import './App.css';

function App() {
  const employesName = [
    'Rahim Uddin',
    'Nabila',
    'Emon',
    'Nobita',
    'Sohag',
    'Arafat',
  ]
  const employesRoll = [
    '1250',
    '1251',
    '1252',
    '1253',
    '1254',
    '1255',
  ]
  return (
    <div className="App">
      <Project name={employesName[0]} roll={employesRoll[0]}></Project>
      <Project name={employesName[1]} roll={employesRoll[1]}></Project>
      <Project name={employesName[2]} roll={employesRoll[2]}></Project>
      <Project name={employesName[3]} roll={employesRoll[3]}></Project>
      <Project name={employesName[4]} roll={employesRoll[4]}></Project>
      <Project name={employesName[5]} roll={employesRoll[5]}></Project>
    </div>
  );
}

function Project(props) {
  /*  const box = {
     color: 'red',
     background: 'aqua',
     margin: '10px 20px',
     borderRadius: '10px',
     border: '3px solid green'
   } */
  return (
    <div className='Box'>
      <h3>Name: {props.name}</h3>
      <h5>Roll: {props.roll}</h5>
    </div>
  );
}

export default App;
