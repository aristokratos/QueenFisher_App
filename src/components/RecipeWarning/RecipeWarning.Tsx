import React from 'react';
import classes from '../RecipeWarning/RecipeWarning.module.css';


const RecipeWarning: React.FC = () => {
    return ( 
         <div className={classes.warning}>
            <h3 className= {classes.head3}>Are you sure you want to cancel?</h3>
            <div className={classes.YesNobuttton}>
            <button className= {classes.yesButton}>Yes</button>
            <button className= {classes.noButton}>No</button>
            </div>
         </div>
    );
}

export default RecipeWarning;