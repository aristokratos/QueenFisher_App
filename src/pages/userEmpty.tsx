import React from 'react';
import DashboardLayout from '../component/DashboardLayout';
import opps from '../assets/opps.png';
import { useNavigate } from 'react-router-dom';

const UserEmpty: React.FC = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <h1 className="font-2xl font-bold border-b-2 border-gray-200 w-100 pb-3 sm:">
        User
      </h1>
      <div className="flex flex-col items-center justify-center py-10 w-100 h-100">
        <img className="my-5" src={opps} alt="opps" width="300" height="300" />
        <div className="text-center my-5">
          <p>User not created yet.</p>
          <p>Click on the button below to create an user profile</p>
        </div>
        <div className="my-5">
          <button
            className="bg-[#FFF6ED] text-[#9E2300] border-2 border-[#FEE9CA] rounded-md px-10 py-3"
            onClick={(e) => {
              e.preventDefault();
              navigate('/user-profile');
            }}
          >
            Create
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserEmpty;
