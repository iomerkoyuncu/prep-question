import './App.css';
import { useState } from 'react';
import Axios from "axios";

function App() {

  const [userId,setId] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [gsm,setGsm] = useState("");

  const [userList,setUserList] = useState([]);

  const addUser = () => {
    Axios.post("http://localhost:3001/create", {
      userId: userId,
      firstName: firstName,
      lastName: lastName,
      email: email,
      gsm: gsm,
    }).then(()=>{
      console.log("success");      
    })
  };

  const getUsers = () => { 
    Axios.get("http://localhost:3001/users").then((response)  => {
      setUserList(response.data);
    })
   }

  return (
    <div className="App">

      <div className="container-input">
        <label>USER ID:</label>
        <input type="text" onChange={(event) => {
            setId(event.target.value);
        }} />   
        <label>FIRST NAME:</label>
        <input type="text" onChange={(event) => {
            setFirstName(event.target.value);
        }}/>
        <label>LAST NAME:</label>
        <input type="text" onChange={(event) => {
            setLastName(event.target.value);
        }} />
        <label>EMAIL:</label>
        <input type="text" onChange={(event) => {
            setEmail(event.target.value);
        }} />  
        <label>GSM:</label>
        <input type="text" onChange={(event) => {
            setGsm(event.target.value);
        }} />
        
        <button onClick={addUser} >ADD USER</button>
        
        <hr />

        <button onClick={getUsers}>SHOW USERS</button>

        {userList.map((val,key) => {
          return (
            
            <div className='table'>
              <h3>USER ID: {val.userId}</h3>
              <h3>FIRST NAME: {val.firstName}</h3>
              <h3>LAST NAME: {val.lastName}</h3>
              <h3>EMAIL: {val.email}</h3>
              <h3>GSM: {val.gsm}</h3>
            </div>
          )
        })}

      </div>
    </div>
  );
}

export default App;
