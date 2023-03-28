import React from 'react';
import SideNavProps from '../../component/SideNav';
import TimeTable from '../../Timetable/Timetable';

const TimetablePage = () => {
  return (
    <>
      <SideNavProps
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <TimeTable />
    </>
  );
};

export default TimetablePage;
