
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ResetPassword from './pages/resetPassword/ResetPassword';

// function App() {
//   return <div>
//     <BrowserRouter>
//     <Routes>
//       <Route path='resetpassword' element={<ResetPassword/>}/>
//     </Routes>
//     </BrowserRouter>
    
//   </div>;
 
// }

import React from 'react';
import Register from '../src/components/register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import ResetPassword from './pages/resetPassword/ResetPassword';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<LandingPage />} />
        <Route path="register" element={<Register/>}/>
        <Route path='resetpassword' element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
