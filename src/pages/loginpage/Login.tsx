import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import Image from '../../images/queenfisher-logo.png'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

const Login = () => {
  return (
    <>
    <section className="login">
        <div className="login__container">
            <img src={Image} alt="Login Image"  className='login__image'/>
        </div>
        <div className="login__form">
            
            <h3 className='login__formwelcome'>Hi, Welcome Back</h3>
            <div className='login__details'>
            <div className="login__emaildetails">
           <h5>Email</h5>
           <div className='login__emailbox'>
           <EmailOutlinedIcon className='login__icon'/>
            <input type="text" placeholder="Enter your email" className="login__email" />
           </div>
           </div>
           <div className='login__passworddetails'>
           <h5>Password</h5>
           <div className="login__passwordbox">
            <KeyOutlinedIcon className='login__icon'/>
            <input type="text" placeholder="Enter your password" className="login__password" />
            </div>
            <Link to="/forgetpassword" className='login__forgot'>Forgot Password?</Link>
            </div>
           
            </div>
            

            <div>
                <button className='login__button'>Login</button>
            </div>

            <div className='login__account'>
                <label>Don't have an account?</label>
                <Link to="/register" className='login__create'>Create account</Link>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default Login