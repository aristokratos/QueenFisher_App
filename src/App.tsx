import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TimeTable from './Timetable/Timetable';
import CreateTable from './CreateTable/Createtable';
import { ConfirmDetails } from './ConfirmDetails/ConfirmDetails';

const App: React.FC = () => {
  return (
    <React.Fragment>
    <Router>
      <Routes>

        <Route  path="/" element={(<TimeTable />) as React.ReactElement} />
        <Route  path="/create" element={(<CreateTable />) as React.ReactElement} />
        <Route  path="/Continue" element={(<ConfirmDetails />) as React.ReactElement} />
    
      </Routes>
    </Router>
    </React.Fragment>
  );
};

export default App;
