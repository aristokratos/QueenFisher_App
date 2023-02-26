import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import QueenFisherImage from '../assets/QueenFisherImage.jpeg';
import DashboardIcon from '../assets/DashboardIcon.svg';
import Recipe from '../assets/Recipe.svg';
import Archive from '../assets/Archive.svg';

const SideNav: React.FC<{ onClose: () => void }> = (props) => {
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="bg-white fixed top-0 bottom-0 left-0 h-full w-64 py-6">
      {screenSize <= 768 && (
        <button
          className="absolute top-1 right-5 text-gray-400 hover:text-gray-700 text-3xl"
          onClick={props.onClose}
        >
          &times;
        </button>
      )}
      <p className="flex mb-7 px-6 items-center">
        <img src={QueenFisherImage} alt="logo" className="w-12" />
        <Link to="/" className="ml-2 text-black text-2xl font-bold-900">
          QueenFisher
        </Link>
      </p>

      <ul className="mt-1 divide-y">
        <div className="pt-20">
          <li className="mb-4 block hover:bg-red-900 hover:mx-7 hover:rounded-md hover:pl-3">
            <Link
              to="/"
              className="text-black flex align-middle hover:text-white hover:py-3 hover:pl-2 px-14"
            >
              <img src={DashboardIcon} alt="logo" className="w-5 mr-3" />
              <span className="">Timetable</span>
            </Link>
          </li>
          <li className="mb-4 block hover:bg-red-900  hover:mx-7 hover:rounded-md hover:pl-3">
            <Link
              to="/"
              className="text-black flex align-middle hover:text-white hover:py-3 hover:pl-2 px-14"
            >
              <img src={Recipe} alt="logo" className="w-5 mr-3" />
              <span>Recipe</span>
            </Link>
          </li>
          <li className="mb-4 block hover:bg-red-900  hover:mx-7 hover:rounded-md hover:pl-3">
            <Link
              to="/"
              className="text-black flex align-middle hover:text-white hover:py-3 hover:pl-2 px-14"
            >
              <img src={Archive} alt="logo" className="w-5 mr-3" />
              <span>Archive</span>
            </Link>
          </li>
        </div>

        <li className="mt-11 border-black-light border-t-2 block pt-3">
          <Link
            to="/"
            className="text-red-900 flex align-middle hover:py-3 hover:bg-[#FFF6ED] px-14"
          >
            <FiLogOut className="mt-1 mr-3 text-xl" />
            <span className="font-light">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
