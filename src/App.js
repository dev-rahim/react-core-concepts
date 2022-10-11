import logo from './logo.svg';
import './App.css';

function App() {
  const container = {

  }
  return (
    <div className="App">
      <Project name='Rahim Uddin' roll="127219"></Project>
      <Project name='Kabila' roll="127220"></Project>
      <Project name='Saiful' roll="127231"></Project>
      <Project name='Sabiha' roll="127232"></Project>
      <Project name='Soriful' roll="127233"></Project>
      <Project name='Sakibul' roll="127234"></Project>
    </div>
  );
}

const Project = (props) => (
  <div className="Box">
    <h3>Roll: {props.name}</h3>
    <h5>Roll: {props.roll}</h5>
  </div>
);

export default App;
