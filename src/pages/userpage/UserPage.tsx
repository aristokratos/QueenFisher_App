import React from 'react';
import SideNavProps from '../../component/SideNav';
import UserProfile from '../../components/UserProfile';

const UserPage = () => {
  return (
    <>
      <SideNavProps
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <UserProfile />
    </>
  );
};

export default UserPage;
