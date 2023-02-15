import '../components/UpdatePassword.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';

function UpdatePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);



  const handleShowPassword = () => {  
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleShowPassword2 = () => {  
      setShowPassword2((prevShowPassword) => !prevShowPassword);    
  };
  const handleShowPassword3 = () => {    
    setShowPassword3((prevShowPassword) => !prevShowPassword);    
  };


  
// function App() {
//   return (
//     <div>
//       <PasswordInput id="password1" label="Password 1" />
//       <PasswordInput id="password2" label="Password 2" />
//       <PasswordInput id="password3" label="Password 3" />
//     </div>
//   );
// }

  return (
    <>
      <h1 className="p-setting">Password Settings</h1>
      <div className="border"></div>

      <div className="password-container">
        <div className="password-instruction">
          <div>
            <h4>Change Password</h4>

            <p className="p-paragraph">
              password must contain atleast 1 letter, 1 number, and 1 symbol.
              Minimum length is <br /> 8 characters
            </p>
          </div>
        </div>

        <div className="password-form">
          <form>
            <div>
              <label>Current Password </label>
              <br />
              <div className="passIcon">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="passinput"
                />
                <span className="icon2" onClick={handleShowPassword}>
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
              <br />

              <label> New Password </label>
              <br />
              <div className="passIcon">
                <input
                  type={showPassword2 ? 'text' : 'password'}
                  className="passinput"
                />
                <span className="icon1" onClick={handleShowPassword2}>
                  {showPassword2 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
              <br />

              <label>Confirm New Password</label>
              <br />
              <div className="passIcon">
                <input
                  type={showPassword3 ? 'text' : 'password'}
                  className="passinput"
                />
                <span className="icon" onClick={handleShowPassword3}>
                  {showPassword3 ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>

              <br />
            </div>

            <input type="submit" value="update" className="btnupdate" />
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdatePassword;
