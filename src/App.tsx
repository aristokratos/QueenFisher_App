import React from 'react';
import Register from '../src/components/register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import UpdatePassword from './components/UpdatePassword';
import UserProfile from './components/UserProfile';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<LandingPage />} />
        <Route path="register" element={ <Register/>}/>
        <Route path="update-password" element={ <UpdatePassword/>}/>
        <Route path="user-profile" element={ <UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
};


export default App;
