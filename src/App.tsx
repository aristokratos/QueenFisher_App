import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TimeTable from './Timetable/Timetable';
import CreateTable from './CreateTable/Createtable';
import { ConfirmDetails } from './ConfirmDetails/ConfirmDetails';
import Register from '../src/components/register/Register';
import LandingPage from './pages/landingPage/LandingPage';
import SignUpManually from './SignUpManually/SignUpManually';
import ForgetPassword from './components/ForgetPasword/ForgetPassword';
import UpdatePassword from './components/UpdatePassword';


const App: React.FC = () => {
  return (
    <React.Fragment>
    <Router>
      <Routes>
        <Route  path="/timetable" element={(<TimeTable />) as React.ReactElement} />
        <Route  path="/create" element={(<CreateTable />) as React.ReactElement} />
        <Route  path="/Continue" element={(<ConfirmDetails />) as React.ReactElement} />
        <Route index={true} element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="signin" element={<SignUpManually />} />
        <Route path="forgetPassword" element={<ForgetPassword />} />

        <Route path="register" element={ <Register/>}/>
        <Route path="update-password" element={ <UpdatePassword/>}/>
      </Routes>
    </Router>
    </React.Fragment>
  );
};


export default App;
