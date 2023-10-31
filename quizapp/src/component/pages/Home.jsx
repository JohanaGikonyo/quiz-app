import React from 'react'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {
  const anims=[
    <h2>You are a Heroe</h2>,
    <h3>JG Technologies</h3>,
    <h2>Welcome Member</h2>,
    <h3>Karibu!</h3>
  ]

  const quotes=[
    <div>For it is with your heart that you believe and are justified, and it si with your
    mouth that you profess your faith and are saved.<br/><small>Romans 10:10</small></div>,
     <div>If ye abide in me, and my words in you, ye shall ask what ye will, and it shall be development
      unto you<br/><small>John 15:7</small></div>,
     <div>Neither have I gone back from the Commandment of his lips; I Have esteemed the wordsof his mouth
     more than my necessary food.<br/><small>Job 23:12</small></div>,
     <div>Many shall be purified, and made white, and tried; but the wicked shall do wickedely:
     and none of the wicked shall undestand ; but the wise shall understand.<br/><small>Daniel 12:10</small></div>
  ]

  const [words, setWords]=useState(0);
  const [quote, setQuote]=useState(0);
useEffect(()=>{
const content=setInterval(()=>{
  if(words>=anims.length-1){
    setWords(0)
  }
  else{
    setWords(words+1);
  } 
},3000)
return ()=>{
  clearInterval(content)
}
},[words])

useEffect(()=>{
  const contents=setInterval(()=>{
    if(quote>=quotes.length-1){
      setQuote(0)
    }
    else{
      setQuote(quote+1);
    } 
  },4000)
  return ()=>{
    clearInterval(contents)
  }
  },[quote])

  const Animations = () => {

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

  <div data-aos="fade-up-right" className='animates'>{anims[words]}</div>



<div className='animations'>
<div className='image'>
<div data-aos="fade-up-left"><h5 style={{color:'blue'}}><em>This is JGK Technologies</em></h5></div>
<div data-aos="fade-up-right"><h5 style={{color:'red'}}><em>We create new Websites</em></h5></div>
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
<div className='quotescontainer' data-aos="flip-right">

<box-icon type='solid' name='chevron-left' onClick={()=>{if(quote<=0){
    setQuote(quotes.length-1)
  }
  else{
    setQuote(quote-1);
  } }}></box-icon>

<div className='quotes'>
<b>Words of Knowledge</b>
  {quotes[quote]}
</div>
<box-icon type='solid' name='chevron-right' onClick={()=>{if(quote>=quotes.length-1){
    setQuote(0)
  }
  else{
    setQuote(quote+1);
  } }}></box-icon>

  </div>
    </div>
  )
}

export default Home