import logo from './logo.svg';
import './App.css';

function App() {

  const employesData = [
    { name: 'Ratul Sorkar', designation: 'Backend Developer' },
    { name: 'Rahim Uddin', designation: 'Web Developer' },
    { name: 'Rabondranath T', designation: 'Graphics Designer' },
    { name: 'Debobroto Babu', designation: 'Programer' },
    { name: 'Susanto Pal', designation: 'Software Developer' },
  ]

  // const employesName = [
  //   'Rahim Uddin',
  //   'Nabila',
  //   'Emon',
  //   'Nobita',
  //   'Sohag',
  //   'Arafat',
  // ]
  // const employesRoll = [
  //   '1250',
  //   '1251',
  //   '1252',
  //   '1253',
  //   '1254',
  //   '1255',
  // ]
  return (
    <div className="App">
      {employesData.map(employ => <Project name={employ.name} designation={employ.designation}></Project>)}

      {/* <Project name={employesName[0]} roll={employesRoll[0]}></Project> */}
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
      <h5>Designation: {props.designation}</h5>
    </div>
  );
}

export default App;
