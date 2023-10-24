import React from 'react'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {
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
  useEffect(() => {
    AOS.init({
      duration: 1000, // The animation duration in milliseconds
      easing: 'ease-out', // The animation easing (e.g., 'ease', 'linear', 'ease-in', 'ease-out', etc.)
    });
  }, []);

  
  return (
    <div >
{Animations()}
<div className='animations'>
<div className='image'>
<div data-aos="fade-up-left"><h5 style={{color:'blue'}}><em>This is JGK Technologies</em></h5></div>
<div data-aos="fade-up-right"><h5 style={{color:'red'}}><em>We built new Websites</em></h5></div>
<div data-aos="fade-up-left"><h5 style={{color:'purple'}}><em>We Update, animate Websites and many more</em></h5></div>
<div data-aos="fade-up-right"><h5 style={{color:'tomato'}}><em>Moving with Technology Together with you</em></h5></div>

</div><br/>
<div className='images'data-aos="fade-up-right">
<div data-aos="fade-up-right"><h5 style={{color:'black'}}><em>We are MERN developers</em></h5></div>
<div data-aos="fade-up-left"><h5 style={{color:'orange'}}><em>Timely deliveries is our key</em></h5></div>
<div data-aos="fade-up-right"><h5 style={{color:'tomato'}}><em>Navigate through our website, and reach us </em></h5></div>
<div data-aos="fade-up-left"><h5 style={{color:'gold'}}><em>Every day is a day of new opportunity</em></h5></div>
</div>
</div>
    </div>
  )
}

export default Home