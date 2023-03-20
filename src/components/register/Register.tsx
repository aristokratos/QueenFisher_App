
import {useState} from 'react';


import './Register.css';
import { Link } from "react-router-dom"
import { RxPerson } from "react-icons/rx"
import { CiMail } from "react-icons/ci"
import { MdOutlinePhone} from "react-icons/md"
import { IoLockClosedOutline} from "react-icons/io5"
import LogoImg from './LogoImg.png'
import { inputHelper } from '../../Helper';
import { useRegisterUserMutation } from '../../Api/AuthApi';
import { apiResponse } from '../../Interfaces';

function Register  ()  {

    const[registerUser] = useRegisterUserMutation();
   
    const [userInput, setUserInput] = useState({
        fullName: "Kelvin", 
        email: "kelvin@gmail.com",
        phone: "2347063444936",
        password: "P@ssword123",
        confirmPassword:"P@ssword123", 
    });

    const handleUserInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const tempData = inputHelper(e, userInput);
        setUserInput(tempData);
    }

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
const payload = {...userInput};

        const response = await fetch('https://queen-fisher-api.onrender.com/api/auth/register', {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/json'
            // },
            body: JSON.stringify(payload)
        })

        if(!response.ok){
            throw new Error('Something went wrong');
        }

        debugger;

        }
        catch (error:unknown){
            alert(JSON.stringify(error, null, 2) || 'Something went wrong')

        }
        
      
    }
    
    

   

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

                        <form method="post"  onSubmit={handleSubmit}>

                              <div className='registration-name'>
                                <div className='label-details'>
                                <label>Full Name</label>
                                </div>
                                <input 
                                className='input-field' 
                                type="text" 
                                placeholder='Type your full name'
                                
                                name="fullName"
                                value={userInput.fullName}
                                onChange={handleUserInput}
                                />
                               <div className='register-icon'> <RxPerson /></div>
                             </div> 

                             <div className='registration-email'>
                                <div className='label-details'>
                                <label >Email</label>
                                </div>
                                <input 
                                className='input-field' 
                                type="email" 
                                placeholder='Type your email' 
                                required
                                name="email"
                                value={userInput.email}
                                onChange={handleUserInput}
                                />
                                <div className='register-icon'><CiMail/></div> 
                             </div>

                             <div className='registration-number'>
                                <div className='label-details'><label> Phone</label></div>  
                                <input 
                                className='input-field' 
                                type="tel" 
                                placeholder='Enter Phone number' 
                                required
                                name="phone"
                                value={userInput.phone}
                                onChange={handleUserInput}
                                />
                                    <div className='register-icon' ><MdOutlinePhone/></div>
                             </div>

                             <div className='registration-password'>
                                <div className='label-details' ><label>Password</label></div>
                                <input 
                                className='input-field' 
                                type="password"
                                placeholder='Enter your password' 
                                
                                name="password"
                                value={userInput.password}
                                onChange={handleUserInput}
                                />
                                  <div className='register-icon'><IoLockClosedOutline/></div>
                             </div>

                              <div className='registration-confirm-password'>
                                <div className='label-details'> <label>Confirm Password</label></div>                        
                                 <input 
                                 className='input-field' 
                                 type="password" 
                                 placeholder='Confirm your password' 
                                 
                                 name="confirmPassword"
                                 value={userInput.confirmPassword}
                                 onChange={handleUserInput}
                                 />
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