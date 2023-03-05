import React from 'react';
import classes from '../RecipeSuccess/RecipeSuccess.module.css';
import successIcon from './successIcon.png';

const RecipeSuccess: React.FC = () => {
    return ( 
        <div className={classes.successCard}>
            <img src={successIcon} alt="success-tick" />
            <h2 className={classes.head2}>Successful</h2>
            <p className= {classes.para}>Your Timetable has been created successfully</p>
            <button className={classes.button}>Close</button>
        </div>
    );
}

export default RecipeSuccess;