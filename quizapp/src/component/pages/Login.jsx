import React from 'react'
import Select from 'react-select';
import { useState } from 'react';
import axios from 'axios';
function Login() {
    const countries=[
        {value:"ken", label:"Kenya (+254)"},
        {value:"Us", label:"USA (+1)"},
        {value:"CA", label:"Canada (+1)"}
    ]
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Password: '',
        Country: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Prepare the data to send to the server
        const postData = {
          FirstName: formData.FirstName,
          LastName: formData.LastName,
          Password: formData.Password,
          Country: formData.Country, // Use the value property from react-select
        };
    
        // Send the form data to the backend
        axios.post('/submit-form', postData)
          .then((response) => {
            console.log('Form submitted successfully:', response.data);
            // Reset the form or perform any desired actions
          })
          .catch((error) => {
            console.error('Error submitting form:', error);
          });
      };
  return (
    <div className='form'>
        <form className='data' onSubmit={handleSubmit}>
         <div> First Name
            <input type='Text'  placeholder='*First Name...' required title='Your First Name' name='Firstname'autoFocus></input><br/>
            </div>
            <div>
            Last Name
            <input type='Text'  placeholder='*Last Name...' required title='Your Last Name' name='Lastname' ></input><br/>
            </div>
            <div>
        Password
        <input type='password' placeholder='*password...' required name='Password'></input><br/>
        </div>
        <div>
        Country
        <Select options={countries} isSearchable  placeholder='*Country' name='Country' required /><br/>
        
        </div>
        <div>
        <button type='submit'>Submit</button>
        </div>
        </form>
    </div>
  )
}

export default Login