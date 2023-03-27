import React from 'react';
import classes from './Recipe.module.css';
import opps from '../assets/opps.png';
import { Link } from 'react-router-dom';
import SideNav from '../component/SideNav';






const Recipe: React.FC = () => {
    return ( 

        <div>
        <div className={classes.contentDetail}>
        <div className='header-class'>
          <h3 className={classes.header}>Recipe</h3>
          <div className={classes.line}></div>
        </div>
          <img src={ opps } alt="opps" />
          <h1>Opps...!</h1>
          <p>You have not created any recipe yet.
          Click on the button below to create a timetable.</p>
          
          <button className={classes.button}><Link to="/create-recipe">Create Recipe</Link></button>
        </div>
      </div>
    );
  }

  export default Recipe;