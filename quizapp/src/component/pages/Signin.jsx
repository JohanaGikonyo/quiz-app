import React from 'react';
import Select from 'react-select';
import {Link, NavLink, useNavigate} from 'react-router-dom'
import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Signin() {
  const history=useNavigate()
const [name, setName]=useState("")
const [email, setEmail]=useState("")
const submit=async(e)=>{
  e.preventDefault();
try{
  await axios.post('http://localhost:3000/',{
    name,email
  })
  .then(res=>{
    if(res.data==='exist'){
      alert("user should login")
     
    }
    else if(res.data==='not exist'){
      history('/success',
      {state:{id:email}})
    }
  }).catch(e=>{
    alert("Wrong details")
  })
}
catch(e){
console.log(e);
}
}

  return (
    <div className="form">
      
      <form className="data"  action='post'>
      <h2 className='check'>Don`t have an Account? Signin  Here</h2>
        <div>
          Full Name
          <input
            type="text"
            placeholder="*Full Name..."
            required
            title="Your Full Name"
            name=" "
            id=''
            autoFocus
            onChange={(e)=>{setName(e.target.value)}}
          />
          <br />
        </div>
        
        <div>
          Email
          <input
            type="email"
            placeholder="*Email"
            required
            name=" "
            id=''
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <br />
        </div>
        
        <div>
          <button type="submit" onClick={submit}>Submit</button>
        </div>
        
        <p>Or</p>
      <NavLink  to='/login' style={{color:"white"}}>Login</NavLink>
      </form>
     
    </div>
  );
}

export default Signin;
