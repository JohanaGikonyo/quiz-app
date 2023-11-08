import React from 'react'
import { useState, useEffect } from 'react';
import {Page,Image, Text, Document, StyleSheet, PDFDownloadLink} from '@react-pdf/renderer';
import AOS from 'aos';
import { NavLink } from 'react-router-dom';
import 'aos/dist/aos.css';
import myimg from './images/jgkihiu.jpg'
const styles=StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
  },
  header:{
    margin:"20px",
    textAlign:"center"
  },
  image:{
height:'100px',
width:"100px",
textAlign:"center",
marginLeft:"25%",
border:"solid green",
borderRadius:"50%"
  },
  text:{
    margin:'30px',
    
  },
  subhead:{
    color:"orange",
    textDecoration:"underline",
    textDecorationColor:"green",
    margin:"10px",
  
  },
  name:{
color:"red",
textDecoration:"underline"
  },
  box:{
color:"gold"
  },
  mobile:{
    color:"green"
  }
});
const Pdf=()=>{
  return(
<Document>
  <Page style={styles.page} size={'A4'}>
    <Text style={styles.header}>
    <Text style={styles.name}>JOHANA GIKONYO KIHIU</Text>{'\n'}
    <Text style={styles.box}> P.O BOX 2211-20300, Nyahururu</Text>{'\n'}
    <Text style={styles.mobile}>Mobile: +254 740 550 484 Email:johanagikonyo552@gmail.com</Text></Text>{'\n'}{'\n'}
    <Image src={myimg} style={styles.image}/>{'\n'}{'\n'}
    <Text style={styles.text}>
    <Text style={styles.subhead}>Personal Profile Statement</Text>{'\n'}
A motivated, adaptable and responsible junior front-end Software Developer with also skills in 
backend Development seeking a position in an IT position which will utilize technical skills 
developed through past experience in this field. {'\n'}I have a methodical, customer-focused 
approach to work and a strong drive to see things through to completion.{'\n'} In my career journey, I 
have managed to create different business marketing softwares for different organizations. {'\n'}{'\n'}
<Text style={styles.subhead}>Achievements</Text>{'\n'}
 Member of the MultiMedia University Of Kenya CIT Club.{'\n'}{'\n'}
<Text style={styles.subhead}>Education</Text>{'\n'}
2021- BSc Mathematics And Computer Science MultiMedia University Of Kenya.{'\n'}
I am a learned student looking for an internship program.
{'\n'}{'\n'}
<Text style={styles.subhead}>Relevant Modules</Text>{'\n'}
 Data Modeling and database Systems.{'\n'}
2017-2020 Thiru Secondary School{'\n'}
 2009-2016 Gatero Primary School {'\n'}{'\n'}
 <Text style={styles.subhead}>Qualifications</Text>{'\n'}
 Programming Hub Certificate Of Completion.{'\n'}{'\n'}
<Text style={styles.subhead}>Skills</Text>{'\n'}
 Excellent knowledge in Frontend Development using (HTML, CSS and JavaScript, React and Bootstrap).{'\n'}
 I Am also a backend development. I use (Mongodb and Express){'\n'}
 I have also good Knowledge in statistical data and Mathematical areas.{'\n'}
 <Text style={styles.subhead}>Languages</Text>{'\n'}
Good in English and Kiswahili{'\n'}
Hobbies and interests{'\n'}
I enjoy solving puzzles and socializing with friends ,family, and the community.{'\n'}
<Text style={styles.subhead}>REFERENCE</Text>{'\n'}
Teacher Karis-07 29 385 557
    </Text>
  </Page>
</Document>
  )
}


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
<div>

<button className='cv'><NavLink to='/contacts'><box-icon type='solid' name='contact' style={{backgroundColor:"green", height:"50px" ,width:"50px",color:"green"}}></box-icon></NavLink></button>
<PDFDownloadLink document={<Pdf/>} fileName='Johana CV'>
  {({loading})=>(loading? <button>loading document...</button>:<button className='cv'>Download CV<box-icon name='download'></box-icon></button>)}
</PDFDownloadLink>
</div>
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