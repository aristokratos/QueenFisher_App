import React from 'react';
import classes from '../ArhiveDashboard/ArhiveDashboard.module.css';
import opps from '../assets/opps.png';
import { useNavigate } from 'react-router-dom';

const ArhiveDashboard: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={classes.contentDetail}>
        <h3 className={classes.header}>Archive</h3>
        <div className={classes.line}>
        </div>
        <img src={opps} alt="opps" />
        <h2 className={classes.head2}>Nothing here...!</h2>
        <p className={classes.para}>There is no archive for Recipe now.</p>
      </div>
    </div>
  );
}

export default ArhiveDashboard; classes;