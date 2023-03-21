import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TimeTable from './Timetable/Timetable';
import CreateTable from './CreateTable/Createtable';
import { ConfirmDetails } from './ConfirmDetails/ConfirmDetails';
import Register from '../src/components/register/Register';
import LandingPage from './pages/landingPage/LandingPage';
import Recipe from '../src/RecipeDashboard/recipe';
import ArhiveDashboard from '../src/ArhiveDashboard/ArhiveDashboard';
import ResetPassword from './pages/resetPassword/ResetPassword';
import UpdatePassword from './components/UpdatePassword';
import UserProfile from './components/UserProfile';
import RecipeTimetable from '../src/pages/RecipeTimetable';
import UserEmpty from './pages/userEmpty';
import MealEmpty from './pages/MealEmpty';
import ForgetPassword from './components/ForgetPasword/ForgetPassword';
import Login from './pages/loginpage/Login';
import VerifyEmail from './pages/verifypage/VerifyEmail';
import UserPopulatedTable from './components/userPopulatedtable/UserPopulatedTable';
import MealPopulatedTable from './components/mealPopulated/MealPopulatedTable';
import RecipeConfirmDetails from '../src/RecipeConfirmDetails/RecipeConfirmDetails';
import CreateRecipe from './components/CreateRecipe/CreateRecipe/createRecipe';
import RecipeSuccess from './RecipeSuccess/RecipeSuccess';
import RecipeWarning from './components/RecipeWarning/RecipeWarning';
import EmailConfirm from './EmailConfirmation/EmailConfirm';
<<<<<<< HEAD
import CreateTimetable from './Timetable/CreateTimetable';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideNav from './component/SideNav';


=======
import EditTimetable from './components/EditTimetable/EditTimetable';
>>>>>>> 0e5f4c542ea1b8d8f714aea1d95d650775e47c2f

function App() {
  return (
    <React.Fragment>
      <ToastContainer/>
      <Router>
        <Routes>
          <Route
            path="/timetable"
            element={(<TimeTable />) as React.ReactElement}
          />
          <Route
            path="/sidenav"
            element={(<SideNav />) as React.ReactElement}
          />
          
          <Route
            path="/create-timetable"
            element={(<CreateTimetable />) as React.ReactElement}
          />
          <Route
            path="/edit"
            element={(<EditTimetable />) as React.ReactElement}
          />
          <Route
            path="/Continue"
            element={(<ConfirmDetails />) as React.ReactElement}
          />
          <Route index={true} element={<LandingPage />} />
          <Route path="register" element={<Register />} />
          
          <Route path="login" element={<Login />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route
            path="/recipetimetable"
            element={(<RecipeTimetable />) as React.ReactElement}
          />
          <Route
            path="userempty"
            element={(<UserEmpty />) as React.ReactElement}
          />
          <Route
            path="mealempty"
            element={(<MealEmpty />) as React.ReactElement}
          />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="update-password" element={<UpdatePassword />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
<<<<<<< HEAD
          <Route path="usertable" element={<UserPopulatedTable/>} />
          <Route path="mealtable" element={<MealPopulatedTable/>}/>
          <Route path="user-profile" element={ <UserProfile />} />
          <Route path='recipe' element={<Recipe />} />
          <Route path='recipe-confirm' element={<RecipeConfirmDetails />} />
          <Route path='create-recipe' element={< CreateRecipe />} /> 
          <Route path='successful' element= {<RecipeSuccess/>} />
          <Route path='warning' element = {<RecipeWarning/>} />
          <Route path='Archive' element= {<ArhiveDashboard/>} />
          <Route path='EmailConfirm' element= {<EmailConfirm/>} />
=======
          <Route path="usertable" element={<UserPopulatedTable />} />
          <Route path="mealtable" element={<MealPopulatedTable />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="recipe" element={<Recipe />} />
          <Route path="recipe-confirm" element={<RecipeConfirmDetails />} />
          <Route path="create-recipe" element={<CreateRecipe />} />
          <Route path="successful" element={<RecipeSuccess />} />
          <Route path="warning" element={<RecipeWarning />} />
          <Route path="Archive" element={<ArhiveDashboard />} />
          <Route path="EmailConfirm" element={<EmailConfirm />} />
>>>>>>> 0e5f4c542ea1b8d8f714aea1d95d650775e47c2f
        </Routes>
      </Router>
    </React.Fragment>
  );
}
// great
export default App;
