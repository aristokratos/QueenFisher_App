import axios from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom'
import './login.css'
import Image from '../../images/queenfisher-logo.png'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';



const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate()
    

    const handleLogin= async (event: React.FormEvent<HTMLFormElement>) => {

          event.preventDefault();

        try{
            const response = await axios.post ('https://queen-fisher-api.onrender.com/api/Auth/Login', {
                email, 
                password
            });
            localStorage.setItem('token', response.data.token);

            toast.success('You have logged in successfully');
            navigate('/user-profile');
        }

        catch (error){
            setErrorMessage((error as { response: { data: { message: string } } }).response.data.message);

        }
    }


   

  return (
    <>
    <section className="login">
        <div className="login__container">
            <img src={Image} alt="Login Image"  className='login__image'/>
        </div>
        <div className="login__form" >
            
            <h3 className='login__formwelcome'>Hi, Welcome Back</h3>
            <form method="post" onSubmit={handleLogin}>
            <div className='login__details'>
            <div className="login__emaildetails">
           <h5>Email</h5>
           <div className='login__emailbox'>
           <EmailOutlinedIcon className='login__icon'/>
            <input 
            type="text" 
            placeholder="Enter your email" 
            className="login__email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            />
           </div>
           </div>
           <div className='login__passworddetails'>
           <h5>Password</h5>
           <div className="login__passwordbox">
            <KeyOutlinedIcon className='login__icon'/>
            <input 
            type="password" 
            placeholder="Enter your password" 
            className="login__password" 
            value={password}
            onChange={(event) =>setPassword(event.target.value)}
            />
            </div>
            <Link to="/forgetpassword" className='login__forgot'>Forgot Password?</Link>
            </div>
           
            </div>
            

            <div>
                <button  className='login__button'>Login</button>
                
            </div>
            </form>
           

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