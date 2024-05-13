import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import search from './assets/search bg.png'
import micro from './assets/micro.png'
import camera from './assets/camera.png'

function App() {
  return (
    <>
    <div className='mx-auto text-center mt-5 col-lg-6'>
      <div  className='text-center fw-bold' style={{fontSize:'70px'}}>Google</div>
      <div className='bg-light shadow p-2 d-flex justify-content-between rounded-5  mx-auto mt-3' style={{width:'80%',height:'auto',position:'relative',border:'0.5px solid gray'}}>
        <span><img src={search} alt="Search"  /></span>
        <span><input type="text" className='bg-transparent' style={{width:'auto',border:'none',outline:'none'}} autoFocus/></span>
        <span className='d-flex gap-1 '> 
        <img src={micro} alt="Search"   />
        <img src={camera} alt="Search" />
        </span>
      </div>
        <div className='gap-2 mt-4'>
        <button type="button" class="btn btn-outline-light text-dark shadow-sm">Google search</button>
        <button type="button" class="btn btn-outline-light text-dark shadow-sm">i'm Feeling Lucky</button><br />
       
        
        </div>
        <div className='mt-4 mx-auto '> 
          <span>Google offered in:</span>
          <a href="" className='ms-2'>Hausa</a>
          <a href="" className='ms-2'>Igbo</a>
          <a href=""className='ms-2'>Ede yoruba</a>
          <a href=""className='ms-2'>Nigerian pidgin</a>
        </div>
    </div>
    </>
  )
}

export default App
