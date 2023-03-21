import React from 'react';
import DashboardLayout from '../component/DashboardLayout';
import opps from '../assets/opps.png';

const RecipeTimetable: React.FC = () => {
  return (
    <DashboardLayout>
      <h1 className="font-2xl font-bold border-b-2 border-gray-200 w-100 pb-3 sm:">
        Timetables
      </h1>
      <div className="flex flex-col items-center justify-center py-10 w-100 h-100">
        <img className="my-5" src={opps} alt="opps" width="200" height="200" />
        <p className="my-4 text-4xl">Ooops...!</p>
        <div className="text-center my-5">
          <p>You have not created a timetable yet.</p>
          <p>Click on the button below to create a timetable</p>
        </div>
        <div className="my-5">
          <button className="bg-[#FFF6ED] text-[#9E2300] border-2 border-[#FEE9CA] rounded-md px-10 py-3">
            Create Timetable
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RecipeTimetable;
