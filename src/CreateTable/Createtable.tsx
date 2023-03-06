import React, { useState } from 'react';
import classes from '../CreateTable/CreateTable.module.css';
import Vector from '../assets/Vector.png';
import { Link } from 'react-router-dom';
import calenderIcon from '../assets/calenderIcon.png';

const CreateTable: React.FC = () => {

  interface createTable {
    mealType: string;
    startDate: string;
    endDate: string;
    country: string;
  }

  const mealTypeOptions = ["Breakfast", "Lunch", "Dinner"];


  const [formData, setFormData] = useState<createTable>({  
    mealType: "Select",
    startDate: "",
    endDate: "",
    country: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

    return (
    <div className={classes.body}>
      <div className={classes.Createtable}>
        <h1 className={classes.header}>Create Table</h1>
        <p className={classes.para}>Fill the list of items below</p>
        <img src={Vector} alt="Vector" className={classes.Image} />

     </div>

     <form className={classes.Form}>
       
        <div className={classes.Table}>
        {/* <h4 className={classes.H4}>Meal Type</h4> */}
        <label className= {classes.Inputimage}>
        <label>Meal Type </label>
        <select className={classes['H4']} name="mealType" value={formData.mealType || ""} onChange={handleInputChange} required>
         <option value=""></option>
           {mealTypeOptions.map((option) => (
        <option key={option} value={option}>{option}</option>
        ))}
      </select></label>
        </div>

        
        <div className={classes.Table}>
        <h4 className={classes.H4}>Start Date</h4>
        <input className={classes.Input} type="text" name="startDate" value={formData.startDate} onChange={handleInputChange} required>
        </input>
        </div>

        
        <div className={classes.Table}>
        <h4 className={classes.H4}>End Date</h4>
        <input className={classes.Input} type="text" name="endDate" value={formData.endDate} onChange={handleInputChange} required>

        </input>
        </div>

        
        <div className={classes.Table}>
        <h4 className={classes.H4}>Country</h4>
        <input className={classes.Input} type="text" name="country" value={formData.country} onChange={handleInputChange} required> 
         </input>
        </div>
        <button className={classes.button}><Link to="/continue">Continue</Link></button>
     </form>
    </div>
    );
  }

  export default CreateTable;

