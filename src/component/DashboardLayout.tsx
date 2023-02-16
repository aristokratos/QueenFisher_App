import Navbar from './Navbar';
import SideNav from './SideNav';
import profile from '../assets/profile.png';
import { useState, useEffect } from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);
  const [showSideNav, setShowSideNav] = useState<boolean>(false);

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  const handleShowSideNav = () => {
    setShowSideNav(!showSideNav);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-[#F9FAFB] h-screen">
      {screenSize > 768 ? (
        <div>
          <Navbar
            src={profile}
            alt="Profile Image"
            firstName="Emeka"
            lastName="Okoro"
            email="emekaokoro@gmail.com"
            handleShowSideNav={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
          <div className="flex w-full">
            <SideNav
              onClose={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
            <main className="">{children}</main>
          </div>
        </div>
      ) : (
        <div>
          <Navbar
            src={profile}
            alt="Profile Image"
            firstName="Emeka"
            lastName="Okoro"
            email="emekaokoro@gmail.com"
            handleShowSideNav={handleShowSideNav}
          />
          <div className="flex w-full">
            {showSideNav && <SideNav onClose={handleShowSideNav} />}
            <main className="">{children}</main>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardLayout;
