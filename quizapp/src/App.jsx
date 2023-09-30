import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//AIzaSyB7TEDivb7DPImjKsFv1VvcuTZKe_kn6EQ
import "./navbar.css"
import Navbar from './component/Navbar'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import About from './component/pages/About'
import Contact from './component/pages/Contact'
import Home from './component/pages/Home'
import Website from './component/pages/Website'
import './animations.css'
import './footer.css'
import './about.css'
import Footer from './component/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // The animation duration in milliseconds
      easing: 'ease-out', // The animation easing (e.g., 'ease', 'linear', 'ease-in', 'ease-out', etc.)
    });
  }, []);
 const [likes, setLikes]=useState(0)
useEffect(()=>{
  setLikes(100)
},[])
  return (
    <>
      <div className='App'>
      <Navbar/>
      
      <Routes><Route  path='/web' element={<Website/>}/></Routes>
      <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/contacts' element={<Contact/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
      
      <div className='back'>
     <div className='whatsapp'><em style={{color:"gold"}}><a href='https://wa.me/0740550484' target='_blank'><box-icon name='whatsapp' type='logo'></box-icon></a> </em>
     or <a href='mailto:johanagikonyo552@gmail.com'style={{color:"green"}}>jgk@gmail.com</a>
     </div>
     <h1 style={{color:"orange",textAlign:"center"}}><small>Click below to like the page. </small></h1>
     <div className='likes' data-aos="fade-up-left"><button onClick={()=>setLikes(likes+1)}><box-icon name='like'></box-icon></button><em>{" "+likes+" "} likes.</em> <button onClick={()=>setLikes(likes-1)}><box-icon name='dislike' ></box-icon></button></div>
     </div>
      <div><Footer/></div>
      </div>
      

    </>
  )
}

export default App


