import React from 'react';
import { IoColorFillSharp } from 'react-icons/io5';
import classes from './EmailConfirm.module.css';



const EmailConfirm: React.FC = () => {
    return ( 
        <div className={classes.EmailCard}>
            <h2 className={classes.head2}>Check your mail</h2>
            <h5 className= {classes.para}>We sent a password reset link to your email.
             Please click the link to reset your password</h5>
             <p className={classes.PInline}>Didn't receive an email? </p>
                <p className={classes.PColor}><a href="https://">Click to Resend</a></p>
            <button className={classes.button}>Back to Login</button>
        </div>
    );
}

export default EmailConfirm;