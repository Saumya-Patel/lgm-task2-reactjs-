
import react, { useState } from 'react';
import './index.css';

  
const App = () => {

  const [users,setUsers]=useState([]);
  const loadusers= async ()=>
  {
    //console.log('before');
    const response = await fetch("https://reqres.in/api/users?page=1");
    const jsonResponse = await 
    response.json();
    setUsers(jsonResponse.data);
    };
  return (
    <div className="App" >
      <nav className="navbar">
      <div className="navitems">
      <h1 className="logo">REACT<i className="fab fa-react"></i></h1>
      <button className="fetchbtn" onClick={loadusers}>Get Data</button>
        </div>
      </nav>
      <div className="main">
          {users.map(({id,first_name,last_name,email,avatar}) =>
           (
            <div key={id} className="profile_cont">
            <img src={avatar} alt="non" className="avatar" ></img>
            <p className="userId">USER-ID : {id}</p> 
            <h1 className="name" >{first_name} {last_name} </h1>
            <p className="email">{email}</p>            
            </div>
          ))}
      </div>
    </div>
  );
};
export default App;