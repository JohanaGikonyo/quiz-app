import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import img43 from './images/pngegg (43).png'
import img44 from './images/pngegg (44).png'
import img45 from './images/pngegg (45).png'
import img46 from './images/pngegg (46).png'
function About() {
  function Greets(){
    let hour=new Date().getHours()
    let greetings="";
    if(hour<12){
      greetings=<h1>Good Morning</h1>
    }
    else if(hour>=12&&hour<16){
      greetings=<h1>Good Afternoon?</h1>
    }
    else {
      greetings=<h1>Good evening </h1>
    }
    return greetings
  }
  const greet=Greets()
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // The animation duration in milliseconds
      easing: 'ease-out', // The animation easing (e.g., 'ease', 'linear', 'ease-in', 'ease-out', etc.)
    });
  }, []);
  return (
    <div className='about'>
    <h1 style={{color:"red", textAlign:'center'}}><h1 className='thanks'>{greet}Welcome!</h1>
<div style={{height:'50px'}}></div>
</h1>
  
    <div className='abouts'>
   
      <div className='hist'data-aos="fade-up-left">
        <div><h2>History Of The Developer</h2></div>
        <p><box-icon type='solid' name='quote-alt-left'></box-icon>This website was developed by Johana Gikonyo Kihiu.He was born in Laikipia County,
          a place called Nyahururu. He was a student at Multimedia University Of Kenya, where He
          took Bachelors of Mathematics and Computer Scince, and Scored a First class houners.<box-icon name='quote-alt-right' type='solid' ></box-icon>
        </p>
        <div><img src={img43}/><em>Going far</em></div>
      </div>
      <div className='exp'data-aos="fade-up-right">
        <div><h2>Experience</h2></div>
        <p><box-icon type='solid' name='quote-alt-left'></box-icon>Johana Gikonyo is a rich person in web development.He has a lot of knowledge in <b>React, Javascript,
        css,html, and bootstrap</b>He likes what he does, and does it with passion<box-icon name='quote-alt-right' type='solid' ></box-icon></p>
        <div><img src={img44}/><em>Impossible is nothing</em></div>
      </div></div><br/>

      
      <div><h3 style={{color:"red"}}>Testimonials</h3></div><br/>
      
      <div className='testis'data-aos="fade-up-right">
      <div className='testi1' >
        <div><h3>Testimonial 1</h3></div>
        <div>
          <p><box-icon type='solid' name='quote-alt-left'></box-icon>My name is James Oguna. A lecturer at Multimedia University. I have seen This Person grow.
          Johana is a hardworking, and a smart person to work with, together with his Company.I have all reasons to
          to reccomend him as your Server.<box-icon name='quote-alt-right' type='solid' ></box-icon>
          </p>
          <div><img src={img46}/><em>James Oguna. lecturer</em></div>
        </div>
      </div>
      <div className='testi2'data-aos="fade-left">
        <div><h3>Testimonial 2</h3></div>
        <div>
          <p><box-icon type='solid' name='quote-alt-left'></box-icon>My name is Patrick. A Client to jgk Company. I have seen This Person grow.
          Johana is a hardworking, and a smart person to work with, together with his Company.I have all reasons to
          to reccomend him as your Server.He delivers as you desire.<box-icon name='quote-alt-right' type='solid' ></box-icon>
          </p>
          <div><img src={img45}/><em>Patrick Mwangi. Client.</em></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About

