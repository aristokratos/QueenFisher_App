import React from 'react';
import SideNavProps from '../../component/SideNav';
import Recipe from '../../RecipeDashboard/recipe';

const RecipePage = () => {
  return (
    <>
      <SideNavProps
        onClose={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
      <Recipe />
    </>
  );
};

export default RecipePage;
