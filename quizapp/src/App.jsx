import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//AIzaSyB7TEDivb7DPImjKsFv1VvcuTZKe_kn6EQ
import "./navbar.css"
import Navbar from './component/Navbar'
import './App.css'
import { Routes, Route} from 'react-router-dom'
import About from './component/pages/About'
import Contact from './component/pages/Contact'
import Home from './component/pages/Home'
import './animations.css'
import './login.css'
import './footer.css'
import './about.css'
import Footer from './component/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Signin from './component/pages/Signin';
import Login from './component/pages/Login';
import Success from './component/pages/Success';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, // The animation duration in milliseconds
      easing: 'ease-out', // The animation easing (e.g., 'ease', 'linear', 'ease-in', 'ease-out', etc.)
    });
  }, []);
 const [likes, setLikes]=useState(0)
useEffect(()=>{
  setLikes(likes)
},[])
useEffect(() => {
  window.scrollTo(0, 0); 
}, []);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Optional: Adds smooth scrolling 
  });
};
  return (
    <>
    
      <div className='App'>
      <MessengerCustomerChat
    pageId="13f4b91ddbedaea56a8ef3941c96e71e"
    appId="742862961191662"
    
  />
      <Navbar/>
      
      <Routes><Route  path='/' element={<Home/>}/></Routes>
      <Routes>
      <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/success' element={<Success/>}/>
      </Routes>
     <div className='uppage'><box-icon name='chevrons-up' onClick={scrollToTop}></box-icon></div>
      <div className='back'>
  
     <h5 style={{color:"orange",textAlign:"center"}}><small>Hit below to like the page. </small></h5>
     <div className='likes' data-aos="fade-up-left"><button onClick={()=>setLikes(likes+1)}><box-icon name='like'></box-icon></button><em>{" "+likes+" "} likes.</em> <button onClick={()=>setLikes(likes-1)}><box-icon name='dislike' ></box-icon></button></div>
     </div>
      <div className='footer'>{<Footer/>}</div>
      </div>
      

    </>
  )
}

export default App


