import React from 'react'
import { useState} from 'react';
//import { useEffect } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img2 from './images/pngegg (6).png';
import img3 from './images/pngegg (7).png';
import img4 from './images/pngegg (8).png';
import img5 from './images/pngegg (12).png';
import img6 from './images/pexels-vecislavas-popa-1571453.jpg'
import img7 from './images/pexels-tomáš-malík-2581922.jpg'
import img8 from './images/pexels-rolando-brando-2867769.jpg'
import img9 from './images/pexels-rodolfo-quirós-1876045.jpg'
//import Animations from './animations';
const Animations = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev); // Toggle visibility
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-animation-container">
      {isVisible ? (
        <h1 className="text-appear">JGK Technologies</h1>
      ) : (
        <h1 className="text-disappear">Welcome</h1>
      )}
      {isVisible ? (
        <h1 className="text-disappear">You are a Heroe</h1>
      ) : (
        <h1 className="text-appear">  Karibu</h1>
      )}
    </div>
  );
};

function Website() 
{
  useEffect(() => {
    AOS.init({
      duration: 1000, // The animation duration in milliseconds
      easing: 'ease-out', // The animation easing (e.g., 'ease', 'linear', 'ease-in', 'ease-out', etc.)
    });
  }, []);
  let greetings=""
  let hour=new Date().getHours()
  
const [name, setName]=useState("Visitor")
  function Greets(){
  if(hour<12){
    greetings=<h1>Good Morning{" "+name}</h1>
  }
  else if(hour>=12&&hour<16){
    greetings=<h1>Good Afternoon?{" "+name}</h1>
  }
  else {
    greetings=<h1>Good evening <em style={input}>{" "+name}</em></h1>
  }
  return greetings
}
Greets()
const input={
  color:"red",
  borderTop:"none",
  borderRight:"none",
  borderLeft:"none",
  borderRadius:"10px"

}

  return (
    <div className='website'>
    <div style={input}>Enter your name please : <input type='text' style={input} value={name} onChange={(k)=>setName(k.target.value)}/></div>
    <div className='greets'>{Greets()}{name}</div>
<Animations/>

<div className='images'>
<div data-aos="fade-up-left"><a href={img2}><img src={img2} alt='furniture'></img></a><h5 style={{color:'blue'}}><em>This building costs as low as khs.3,000,000</em></h5></div>
<div data-aos="fade-up-right"><a href={img3}><img src={img3} alt='furniture'></img></a><h5 style={{color:'red'}}><em>This building costs as low as khs.4,000,000</em></h5></div>
<div data-aos="fade-up-left"><a href={img4}><img src={img4} alt='furniture'></img></a><h5 style={{color:'purple'}}><em>This building costs as low as khs.5,000,000</em></h5></div>
<div data-aos="fade-up-right"><a href={img5}><img src={img5} alt='furniture'></img></a><h5 style={{color:'black'}}><em>This costs as low as 6,000,000 only</em></h5></div>

</div><br/>
<div className='images'data-aos="fade-up-right">
<div data-aos="fade-up-right"><a href={img6}><img src={img6} alt='furniture'></img></a><h5 style={{color:'yellow'}}><em>We also do interior designs</em></h5></div>
<div data-aos="fade-up-left"><a href={img8}><img src={img8} alt='furniture'></img></a><h5 style={{color:'orange'}}><em>We also take people to hikes, on Saturdays</em></h5></div>
<div data-aos="fade-up-right"><a href={img9}><img src={img9} alt='furniture'></img></a><h5 style={{color:'tomato'}}><em>We have cool environments for our clients</em></h5></div>
<div data-aos="fade-up-left"><a href={img7}><img src={img7} alt='furniture'></img></a><h5 style={{color:'gold'}}><em>We do great and recommendable job for you</em></h5></div>
</div>
<h1 className='thanks'>Thank you!s</h1>
<div style={{height:'50px'}}></div>
    </div>

  )
}

export default Website

