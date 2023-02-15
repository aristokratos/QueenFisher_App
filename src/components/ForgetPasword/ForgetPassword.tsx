import { FormEvent, useState } from 'react';
import { CiMail } from 'react-icons/ci';
import LogoImg from './LogoImg.png'
import '../ForgetPasword/ForgetPass.css';
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
        <div className='header'>
          <img src={LogoImg} className="logo" />
          <h2 className='header-name'>
            Queenfisher
          </h2>
        </div>
        <div className='wrapper'>

          <div className='register-title'>
            Forget Password
          </div>
          <h3>Enter the email associated with your account and we'll send an email with instruction to reset your password</h3>
          <div className='register-field-container'>
            {Error && (<div className="forgot-password-error-message">{Error}</div>)}

            <form method='Post' onSubmit={handleSubmit}>

              <div className='registration-email'>
                <div className='label-details'>
                  <label >Email</label>
                </div>
                <input className='input-field' value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" placeholder='Type your email' required />
                <div className='register-icon'><CiMail /></div>
              </div>

              <div className='btn-div'>
                <button className='registration-btn' type='submit'>Reset Password</button>

              </div>

            </form>

          </div>


        </div>

      </div>
    </>
  )
}

export default ForgetPassword