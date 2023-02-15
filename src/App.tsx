import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResetPassword from './pages/resetPassword/ResetPassword';

function App() {
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path='resetpassword' element={<ResetPassword/>}/>
    </Routes>
    </BrowserRouter>
    
  </div>;
 
}

export default App;
