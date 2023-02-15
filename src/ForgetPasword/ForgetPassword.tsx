import { FormEvent, useState } from 'react'
import '../SignUpManually/SignUpManually.css'
//import Link from 'react';
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
      <div className='header'>
        <img src='https://thumbs.dreamstime.com/z/vector-illustration-salad-includes-baked-slices-tomato-eggplant-carrot-green-beans-rosemary-sprigs-concept-161224885.jpg'
          alt='logo' />
        <h2>Queenfisher</h2>
      </div>
      <div style={{ width: "350px", margin: "0 auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#fff", boxShadow: "2px 2px 10px #ccc" }}>
        <div className="card-header">
          <div style={{
            margin: 0, fontSize: "14x",
            fontWeight: "bolder",
            color: "black", textAlign: "center"
          }}>Forget Password</div>
          <p>Enter the email associated with your account and we'll send an email with instruction to reset your password.</p>
        </div>
        {Error && (<div className="forgot-password-error-message">{Error}</div>)}
        <form method='Post' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input required name="email" id="password" type="text" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
          </div>
          <div className="form-group">
            <input value="Reset Password" type="submit" />
          </div>
        </form>
        <p style={{ textAlign: "center" }}>Back To Login</p>
      </div>
    </>
  )
}

export default ForgetPassword