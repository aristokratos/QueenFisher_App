import React,{FormEvent, useState} from 'react'
import '../SignUpManually/SignUpManually.css'

const SignUpManually: React.FC = () => {
    



const [fullName, setFullName] = useState<string>();
const [email, setEmail] = useState<string>();
const [password, setPassword] = useState<string>();
const [phoneNumber, setPhoneNumber] = useState<string>();
const [confirmPassword, setConfirmPassword] = useState<string>();
const [errorMessage, setErrorMessage] = useState<string>();

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  debugger;

  

  if (!fullName || !email || !password || !phoneNumber || !confirmPassword) {
    setErrorMessage('Please fill out all fields');
    return;
  }

  

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    setErrorMessage('Please enter a valid email address');
    return;
  }

  if (password !== confirmPassword) {
    setErrorMessage('Password and confirm password fields must match');
    return;
  }

  if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
    setErrorMessage(
      'Password must contain at least one upper case letter, one special character, a number, lower case and must be at least 8 characters long'
    );
    return;
  }

  try {
    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.Succeded) {
      setErrorMessage(data.message);
    } else {
      setErrorMessage(data.message);
    }
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div>
      <div className='header'>
        <img src='https://thumbs.dreamstime.com/z/vector-illustration-salad-includes-baked-slices-tomato-eggplant-carrot-green-beans-rosemary-sprigs-concept-161224885.jpg' alt='logo' />
        <h2>QueenFisher</h2>
      </div>
      <div style={{width:"350px",margin:"0 auto", padding:"20px", border:"1px solid #ccc", borderRadius:"10px", backgroundColor:"#fff", boxShadow:"2px 2px 10px #ccc"}}>
        <div className="card-header">
          <div style={{margin:0,  fontSize: "14x",
    fontWeight: "bolder",
    color: "black"}} >Get Started With Queenfisher</div>
        </div>
        <form method='Post' onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Fullname:</label>
            <input required name="Fullname" id="username" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input required name="email" id="email" type="text" value={email} onChange={(e) => setEmail( e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input required name="number" id="phoneNumber" type="text" value={phoneNumber} onChange={(e) => setPhoneNumber( e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input required name="password" id="password" type="password" value={password} onChange={(e) => setPassword( e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input required name="confirmPassword" id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword( e.target.value)} />
          </div>
          <div>
            { errorMessage&&(
              <p>{errorMessage}</p>
            )  
            }
          </div>
          <div className="form-group">
            <input value="Sign Up" type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpManually