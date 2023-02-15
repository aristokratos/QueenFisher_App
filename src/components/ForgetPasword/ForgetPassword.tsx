import { FormEvent, useState } from 'react';
import { CiMail } from 'react-icons/ci';
import LogoImg from './LogoImg.png'
import '../ForgetPasword/ForgetPass.css';
import { Link } from 'react-router-dom';
const ForgetPassword = () => {
  const [emailAddress, setEmailAddress] = useState("")
  const [Error, setError] = useState("")

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!emailAddress) {
      setError("please enter your email address")
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)) {
      setError('Please enter a valid email address');
      return;
    }
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ EmailAddress: emailAddress })
      }).then(response => response.json())
        .then(data => {
          if (data.succeded) {
            setError(data.message);
            console.log(data);
          }
          else {
            setError(data.message);
            console.log(data);

          }
        });
    }
    catch (error) {
      console.log(error);
    }
  };
  return (

    <>
      <div>
        <div className='headers'>
          <img src={LogoImg} className="logos" />
          <h2 className='headername'>
            Queenfisher
          </h2>
        </div>
        <div className='wrappers'>

          <div className='title'>
            Forget Password
          </div>
          <h3>Enter the email associated with your account and we'll send an email with instruction to reset your password</h3>
          <div className='registercontainer'>
            {Error && (<div className="forgot-password-error-message">{Error}</div>)}

            <form method='Post' onSubmit={handleSubmit}>

              <div className='registrationemail'>
                <div className='label-details'>
                  <label >Email</label>
                </div>
                <input className='inputfield' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" placeholder='Type your email' required />
                <div className='registericon'><CiMail /></div>
              </div>

              <div className='btndiv'>
                <button className='registrationbtn' type='submit'>Reset Password</button>

              </div>
              <Link className='link' to='./'>Back To Login</Link>

            </form>

          </div>


        </div>

      </div>
    </>
  )
}

export default ForgetPassword