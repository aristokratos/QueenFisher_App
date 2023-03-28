import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import TimeTable from './Timetable/Timetable';
// import CreateTable from './CreateTable/Createtable';
import { ConfirmDetails } from './ConfirmDetails/ConfirmDetails';
import Register from '../src/components/register/Register';
import LandingPage from './pages/landingPage/LandingPage';
// import Recipe from '../src/RecipeDashboard/recipe';
// import ArhiveDashboard from '../src/ArhiveDashboard/ArhiveDashboard';
import ResetPassword from './pages/resetPassword/ResetPassword';
import UpdatePassword from './components/UpdatePassword';
// import UserProfile from './components/UserProfile';
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
import EditTimetable from './components/EditTimetable/EditTimetable';
import { ToastContainer } from 'react-toastify';
import CreateTimetable from './Timetable/CreateTimetable';
import SideNavProps from './component/SideNav';
import RecipePage from './pages/Recipe/RecipePage';
import ArchivePage from './pages/archivepage/ArchivePage';
import TimetablePage from './pages/timetablepage/TimetablePage';
import UserPage from './pages/userpage/UserPage';

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Router>
        <Routes>
          <Route
            path="/timetable"
            element={(<TimetablePage />) as React.ReactElement}
          />
          <Route
            path="/sidenav"
            element={
              (
                <SideNavProps
                  onClose={function (): void {
                    throw new Error('Function not implemented.');
                  }}
                />
              ) as React.ReactElement
            }
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
            path="/Continue/:id"
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
          <Route path="forgotpassword" element={<ForgetPassword />} />
          <Route path="usertable" element={<UserPopulatedTable />} />
          <Route path="mealtable" element={<MealPopulatedTable />} />
          <Route path="user-profile" element={<UserPage />} />
          <Route path="recipe" element={<RecipePage />} />
          <Route path="recipe-confirm" element={<RecipeConfirmDetails />} />
          <Route path="create-recipe" element={<CreateRecipe />} />
          <Route path="successful" element={<RecipeSuccess />} />
          <Route path="warning" element={<RecipeWarning />} />
          <Route path="Archive" element={<ArchivePage />} />
          <Route path="EmailConfirm" element={<EmailConfirm />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}
// great
export default App;
