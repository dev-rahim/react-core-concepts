import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
      <ExternalUsers></ExternalUsers>
      <UsersComments></UsersComments>
      {/* {employesData.map(employ => <Project name={employ.name} designation={employ.designation}></Project>)} */}
    </div>
  );
}


function UsersComments() {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => setComments(data))
  }, [])
  return (
    <div>
      <h1>User Comments</h1>
      {
        comments.map(comment =>  <Comments name={comment.name} email={comment.email} body={comment.body}></Comments> )
      }
    </div>
  );
}

function Comments(props) {
  return (
    <div className='Box'>
      <h3>Name: {props.name}</h3>
      <h4>Name: {props.email}</h4>
      <h5>Name: {props.body}</h5>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>External User</h3>
      {
        users.map(user => <Users name={user.name} email={user.email}></Users>)
      }
    </div>
  );
}

// single user div 
function Users(props) {
  return (
    <div className="Box">
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
}

// component of counter
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
