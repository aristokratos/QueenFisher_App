import './Register.css';
import { Link } from "react-router-dom"
import { RxPerson } from 'react-icons/rx'
import { CiMail } from 'react-icons/ci'
import { MdOutlinePhone} from 'react-icons/md'
import { IoLockClosedOutline} from 'react-icons/io5'
import LogoImg from './LogoImg.png'





const Register = () => {

    return (
        <>
        <div>
            <div className='header'>
                <img src={LogoImg} className="logo"/>
                <h1 className='header-name'>
                    Queenfisher
                </h1>
            </div>
            <div className='wrapper'>

                        <div className='register-title'>
                            Get Started with Queenfisher
                        </div>

                        <div className='register-field-container'>

                        <form>

                             <div className='registration-name'>
                                <div className='label-details'>
                                <label>Full Name</label>
                                </div>
                                <input className='input-field' type="text" placeholder='Type your full name'  required/>
                               <div className='register-icon'> <RxPerson /></div>
                             </div>

                             <div className='registration-email'>
                                <div className='label-details'>
                                <label >Email</label>
                                </div>
                                <input className='input-field' type="email" placeholder='Type your email'  required/>
                                <div className='register-icon'><CiMail/></div> 
                             </div>

                             <div className='registration-number'>
                                <div className='label-details'><label >Phone Number</label></div>  
                                <input className='input-field' type="text" placeholder='Enter phone number' required/>
                                    <div className='register-icon' ><MdOutlinePhone/></div>
                             </div>

                             <div className='registration-password'>
                                <div className='label-details' ><label>Password</label></div>
                                <input className='input-field' type="password" placeholder='Enter your password'  required/>
                                  <div className='register-icon'><IoLockClosedOutline/></div>
                             </div>

                             <div className='registration-confirm-password'>
                                <div className='label-details'> <label>Confirm Password</label></div>                        
                                 <input className='input-field' type="password" placeholder='Confirm your password' required/>
                                 <div className='register-icon'><IoLockClosedOutline/></div>
                                 
                             </div>

                             <div className='btn-div'>
                                <button className='registration-btn'>Sign Up</button>
                             </div>
                        </form>

                        <div className='already-have-acc'>
                            <p className='already-have-ac' >Already have an account?</p> 
                            <Link className='login-acc' to="/">Login</Link>
                        </div>

                       
                        </div>

                     
                        </div>
            </div>
        </>
    )

}


export default Register