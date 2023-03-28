import React from 'react';
import ArhiveDashboard from '../../ArhiveDashboard/ArhiveDashboard';
import SideNavProps from '../../component/SideNav';

const ArchivePage = () => {
  return (
    <>
      <SideNavProps
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <ArhiveDashboard />
    </>
  );
};

export default ArchivePage;
