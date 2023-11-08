import React from 'react';

import {Link, NavLink, useNavigate} from 'react-router-dom'
import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import axios from 'redaxios';
// use as you would normally

function Login() {
  const history=useNavigate();
const [name, setName]=useState("")
const [email, setEmail]=useState("")
const submit=async(e)=>{
e.preventDefault()
try{
  await axios.post('http://localhost:3000/login',{
    name,email
  })

  .then(res=>{
    if(res.data==='exists'){
      history('/success',
      {state:{id:email}})
      
     
    }
    else if(res.data==='notexist'){
      alert("You are not registered")
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
      <h2 className='check'>Already have an Account? Login In Here</h2>
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
      <NavLink  to='/signin' style={{color:"white"}}>Signin</NavLink>
      </form>
     
    </div>
  );
}

export default Login;
