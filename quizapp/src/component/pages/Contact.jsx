import React from 'react'
const content={
  color:"orange",
  fontStyle:"italic",
  textAlign:"center",
}
const phonenumber='+254740550484'
const message='Hello...'
const handleCallClick=()=>{
window.location.href=`tel:${phonenumber}`
}
const handleMessageClick=()=>{
  window.location.href=`sms:${phonenumber}? body=${encodeURIComponent(message)}`;
 
}
function Contact() {
  return (
    <div style={content} className='contact'>
    {new Date().toDateString()}<br/>
    {new Date().toLocaleTimeString()}
        <h3>You can get me on whatsapp via whatsapp below</h3>
        <h5>Send me an email <a href='mailto:johanagikonyo552@gmail.com'>@jgkemail</a> or www.jgk.co.ke</h5>
        We are Located along Ufangano street, Okaharo building, second floor.
        <h5>Drop a message or call <box-icon type='solid' name='hand-down'></box-icon></h5>
        <div className='texts'>
        <box-icon name='phone-call' onClick={handleCallClick}></box-icon><br/>
        <box-icon type='solid' name='message-add' onClick={handleMessageClick}></box-icon>
        </div>
    </div>
  )
}

export default Contact

