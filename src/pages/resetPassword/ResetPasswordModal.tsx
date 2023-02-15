 import React from 'react';
import './ResetPasswordModal.css';
import layer from '../../assets/Layer 5.png';
import { Link } from 'react-router-dom';

const ResetPasswordModal = ({onClick}:{onClick: () => void}) => {
    function closeModal(){
        onClick()
    }
  return (
    <div className="reset_pawd_card_modal">
      
      <form action="" className="reset_pawd_form_modal">
      
        <div>
            <img src={layer} alt='layer'/>
        </div>
  
  
         <div className="reset_center_form_modal">
          <h4>Successful</h4>
         </div>

         <div className="reset_fields_container_modal">
            <p>Your password has been change successfully.<br/> Login to access your account.</p>
         </div>
         

    <div className="reset_pawd_button_modal">
        <Link to="/login">
        <button type="submit" className="reset_pawd_action_modal">Go to login</button>
        </Link>
      </div>
    </form>
  </div>
  
  )
}

export default ResetPasswordModal;
