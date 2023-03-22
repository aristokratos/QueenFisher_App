import React from 'react'
import './verify.css'
import { Link } from 'react-router-dom'
import VerifyImage from '../../images/VerifyIcon.png'


const VerifyEmail = () => {
  return (
   <>
   <section className='verify'>
    <div className="verify__container">
        <div className='verify-image-container'>
            <img src={VerifyImage} alt="Verify Image" />
        </div>
        <div className='verify__header'>
            <h3>Verify Your Email</h3>
        </div>
        <div className='verify__text'>
            <p>Hi there! Use the link below to verify your email and start enjoying Queenfisher</p>
        </div>
        <div>
        <Link to="/login" className='verify__email'>Verify Email</Link>
        </div>
        
    </div>

   </section>
   
   </>
  )
}

export default VerifyEmail