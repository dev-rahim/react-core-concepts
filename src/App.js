import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Project name='Rahim Uddin' roll="127219"></Project>
      <Project name='Nabila' roll="127220"></Project>
      <Project name='Saiful' roll="127231"></Project>
      <Project name='Rabiha' roll="127232"></Project>
      <Project name='Soriful' roll="127233"></Project>
      <Project name='Sakibul' roll="127234"></Project>
    </div>
  );
}

function Project(props) {
  const as = {
    color: 'red',
    background: 'aqua',
    margin: '10px 20px',
    borderRadius: '10px',
    border: '3px solid green'
  }
  return (
    <div style={as}>
      <h3>Roll: {props.name}</h3>
      <h5>Roll: {props.roll}</h5>
    </div>
  );
}

export default App;
