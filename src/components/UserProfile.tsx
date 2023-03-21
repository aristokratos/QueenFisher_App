import '../components/UserProfile.css';
<<<<<<< HEAD
import { useState } from 'react';
import Navbar from '../component/Navbar';

=======
>>>>>>> 0e5f4c542ea1b8d8f714aea1d95d650775e47c2f

function UserProfile() {
  return (
    <>
     
      <h1 className="A-setting">Account Setting</h1>
      <div className="A-border"></div>
      <div className="A-container">
        <div className="CoverPhoto">
          <div className="ProfilePoto"></div>
        </div>
        <div className="AccountForm">
          <form>
            <div>
              <label>First Name</label>
              <br />
              <input type="text" placeholder="Onyekachi" className="A-input" />
            </div>

            <div>
              <label>Last Name</label>
              <br />
              <input type="text" placeholder="Obute" className="A-input" />
            </div>

            <div>
              <label>Phone Number</label>
              <br />
              <input
                type="text"
                placeholder="+2347068138864"
                className="A-input"
              />
            </div>

            <div>
              <label>Email</label>
              <br />
              <input
                type="text"
                disabled
                placeholder="ocobute@gmail.com"
                className="A-input disabled-input"
              />
            </div>

            <div>
              <br />
              <input type="Submit" value="update" className="btn-update" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
