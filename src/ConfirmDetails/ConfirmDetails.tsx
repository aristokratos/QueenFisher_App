import React from 'react';
import classes from '../ConfirmDetails/ConfirmDetails.module.css';
import Vector from '../assets/Vector.png';

export const ConfirmDetails: React.FC = () => {
    return ( 
        <div className={classes.body}>
        <div className={classes.Confirm}>
        <h3 className={classes.h2}>Confirmation Details</h3>
        <p className={classes.para}>Make sure you confirm all items</p>
        </div>

        <div className={classes.Meal}>
            <p className={classes.para}>Meal Type</p>
            <h3 className={classes.h3}>Breakfast</h3>

            <p className={classes.para}>Start Date</p>
            <h3 className={classes.h3}>Jan 15, 2023</h3>

            <p className={classes.para}>Start Date</p>
            <h3 className={classes.h3}>Jan 16,2023</h3>

            <p className={classes.para}>Country</p>
            <h3 className={classes.h3}>Nigeria cuisine</h3>

            <button className={classes.button}>Generate</button>

        </div>
     </div>

    );
}
