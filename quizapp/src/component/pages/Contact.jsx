import React from 'react'
const content={
  color:"orange",
  fontStyle:"italic"

}
function Contact() {
  return (
    <div style={content}>
        <h3>You can get me on whatsapp via whatsapp below</h3>
        <h5>Send me an email <a href='mailto:johanagikonyo552@gmail.com'>@jgkemail</a> or www.jgk.co.ke</h5>
        We are Located along Ufangano street, Okaharo building, second floor.
    </div>
  )
}

export default Contact

