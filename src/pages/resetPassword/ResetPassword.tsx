import React, { useState } from 'react';
import './ResetPassword.css';
import queen from '../../assets/Queen.png';
import {Modal} from 'react-responsive-modal';
import ResetPasswordModal from './ResetPasswordModal';

const ResetPassword = () => {
  const [profile, setProfile] = useState(false);
  const myRef = React.useRef(null);

  const onOpenProfile = () => setProfile(true);
  const onCloseProfile = () => setProfile(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
  }

return (
    <div className="reset_pawd_card">
      <div className="reset_pawd_img">

        <img src={queen} alt="queen" className='reset_pawd_queen' />
      </div>
      <div className='reset-pawd-form-contain'>  
      <form action="" className="reset_pawd_form" onSubmit={handleSubmit}>
        <div className="reset_pawd_center">
          <h4>Reset Password</h4>
        </div>

        <div className="reset_pawd_fieldsContainer">
          <label className="reset_pawd_label">New Password</label>

          <input
            type="password"
            className="reset_pawd_fields"
            placeholder="Enter your new password"
          />
        </div>

        <div className="fieldsContainer1">
          <label className="reset_pawd_label">Confirm Password</label>

          <input
            type="password"
            className="reset_pawd_fields"
            placeholder="Confirm Password"
          />
        </div>

        
        
        <div className="reset_pawd_button">
          <button
            // type="submit"
            className="reset_pawd_action"
            onClick={onOpenProfile}
          >
            Reset Password
          </button>
        </div>
      </form>
      </div>
      <Modal open={profile} onClose={onCloseProfile} closeIcon={null} center >
         <ResetPasswordModal onClick={onCloseProfile}/>
      </Modal>
    </div>
  );
};

export default ResetPassword;
