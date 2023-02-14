import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
