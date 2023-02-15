import React from 'react';
import Register from '../src/components/register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import SignUpManually from './SignUpManually/SignUpManually';
import ForgetPassword from './ForgetPasword/ForgetPassword';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="signin" element={<SignUpManually />} />
        <Route path="forgetPassword" element={<ForgetPassword />} />

      </Routes>
    </BrowserRouter>
  );
};


export default App;
