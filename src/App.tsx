import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TimeTable from './Timetable/Timetable';
import CreateTable from './CreateTable/Createtable';
import { ConfirmDetails } from './ConfirmDetails/ConfirmDetails';
import Register from '../src/components/register/Register';
import LandingPage from './pages/landingPage/LandingPage';


const App: React.FC = () => {
  return (
    <React.Fragment>
    <Router>
      <Routes>
        <Route  path="/timetable" element={(<TimeTable />) as React.ReactElement} />
        <Route  path="/create" element={(<CreateTable />) as React.ReactElement} />
        <Route  path="/Continue" element={(<ConfirmDetails />) as React.ReactElement} />
        <Route index={true} element={<LandingPage />} />
        <Route path="register" element={ <Register/>}/>
      </Routes>
    </Router>
    </React.Fragment>
  );
};


export default App;
