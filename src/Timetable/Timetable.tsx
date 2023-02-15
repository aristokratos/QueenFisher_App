import React from 'react';
import classes from '../Timetable/Timetable.module.css';
import opps from '../assets/opps.png';
import { useNavigate } from 'react-router-dom';

const TimeTable: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>

      <div className={classes.contentDetail}>

      <div className='header-class'>
        <h3 className={classes.header}>Timetables</h3>
        <div className={classes.line}></div>
      </div>
        <img src={opps} alt="opps" />
        <h1>Opps...!</h1>

        <p>You have not created any timetable yet.
        Click on the button below to create a timetable.</p>
    
        <button className={classes.button} onClick={(e)=>{
          e.preventDefault();
          navigate("/create")
        }}>Create Timetable</button>
      </div>
    </div>
  );
}

export default TimeTable; classes;
