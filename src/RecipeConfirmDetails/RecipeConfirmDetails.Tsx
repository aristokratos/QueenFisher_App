import React from 'react';
import classes from '../RecipeConfirmDetails/RecipeConfirmDetails.module.css';
import Vector from '../assets/Vector.png';

const RecipeConfirmDetails: React.FC = () => {
    return ( 
    <div className={classes.container}>
        <div className={classes.confirm}>
            <h2>Confirmation Details</h2>
            <p>Make sure you confirm all items</p>
        </div>

        <div className={classes.Meal}>
            <div className={classes.para}>
                <div className={classes.first}>
                    <p >Name of Recipe</p>
                    <h3>Chinese Rice</h3>
                </div>
                <div className={classes.next}>
                    <p>Video</p>
                    <h3>N/A</h3>
                </div>
               
            </div>

            <div className={classes.para}>
                <div className={classes.first}>
                    <p>Meal Type</p>
                    <h3>Breakfast</h3>
                </div>
                <div className={classes.next}>
                    <p>Procedure</p>
                    <h3>xyz</h3>
                </div>
            </div>

            <div className={classes.para}>
                <div className={classes.first}>
                    <p>Ingredients</p>
                    <h3>Pepper,crayfish,rice</h3>
                </div>
               <div className={classes.next}>
                 <p>Country</p>
                 <h3>Nigeria</h3>
               </div>
            </div>

            <div className={classes.para}>
              <div className={classes.first}>
                <p>Picture</p>
              </div>  
                <div className={classes.next}>
                    <p>Summary</p>
                    <h3>xyz</h3>
                </div>
            </div>
            <button className={classes.btn}>Generate Recipe</button>

        </div>
    </div>

    );
}

export default RecipeConfirmDetails;
