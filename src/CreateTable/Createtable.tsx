import React from 'react';
import classes from '../CreateTable/CreateTable.module.css';
import Vector from '../assets/Vector.png';
import { Link } from 'react-router-dom';

const CreateTable: React.FC = () => {
    return (
    <div className={classes.body}>
      <div className={classes.Createtable}>
        <h1 className={classes.header}>Create Table</h1>
        <p className={classes.para}>Fill the list of items below</p>
        <img src={Vector} alt="Vector" className={classes.Image} />

     </div>

     <form className={classes.Form}>
       
        <div className={classes.Table}>
        <h4 className={classes.H4}>Meal Type</h4>
        <input className={classes.Input} type="text" id="" value="select">
        </input>
        </div>

        
        <div className={classes.Table}>
        <h4 className={classes.H4}>Start Date</h4>
        <input className={classes.Input} type="text" id="" value="select">
        </input>
        </div>

        
        <div className={classes.Table}>
        <h4 className={classes.H4}>End Date</h4>
        <input className={classes.Input} type="text" id="" value="select">
        </input>
        </div>

        
        <div className={classes.Table}>
        <h4 className={classes.H4}>Country</h4>
        <input className={classes.Input} type="text" id="" value="select">
        </input>
        </div>

        <button className={classes.button}><Link to="/continue" >Continue</Link></button>
     </form>

    </div>
    );
  }

  export default CreateTable;

