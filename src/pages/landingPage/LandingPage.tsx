import React from 'react';
import './landingpage.css';
import MainHeader from '../../components/MainHeader';
import MainHeader2 from '../../components/MainHeader2';
import Values from '../../components/Values';
import Choose from '../../components/Choose';
import FirstFooter from '../../components/FirstFooter';

import LastFooter from '../../components/LastFooter';
import LandingNavbar from '../../components/LandingNavbar';
import SideNav from '../../component/SideNav';
import Sidebar from '../../components/Sidebar/Sidebar';

const LandingPage: React.FC = () => {
  return (
    <>
    
      <LandingNavbar/>
      
      <MainHeader />
      <MainHeader2 />
      <Values />
      <Choose />
      <FirstFooter />
      <LastFooter />
    </>
  );
};

export default LandingPage;
