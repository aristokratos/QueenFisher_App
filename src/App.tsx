import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TimeTable from './Timetable/Timetable';
import CreateTable from './CreateTable/Createtable';
import { ConfirmDetails } from './ConfirmDetails/ConfirmDetails';
import Register from '../src/components/register/Register';
import LandingPage from './pages/landingPage/LandingPage';


import ResetPassword from './pages/resetPassword/ResetPassword';
import UpdatePassword from './components/UpdatePassword';
import RecipeTimetable from '../src/pages/RecipeTimetable';
import ForgetPassword from './components/ForgetPasword/ForgetPassword';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route
            path="/timetable"
            element={(<TimeTable />) as React.ReactElement}
          />
          <Route
            path="/create"
            element={(<CreateTable />) as React.ReactElement}
          />
          <Route
            path="/Continue"
            element={(<ConfirmDetails />) as React.ReactElement}
          />
          <Route index={true} element={<LandingPage />} />
          <Route path="register" element={<Register />} />
          <Route
            path="/recipetimetable"
            element={(<RecipeTimetable />) as React.ReactElement}
          />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="update-password" element={<UpdatePassword />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
