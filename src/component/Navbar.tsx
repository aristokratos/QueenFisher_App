import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAccountCircle, MdSecurity } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';

interface Props {
  handleShowSideNav: () => void;
  src: string;
  alt: string;
  firstName: string;
  lastName: string;
  email: string;
}

const Navbar: React.FC<Props> = (props) => {
  const [showBox, setShowBox] = useState(false);
  const [, setScreenSize] = useState<number>(window.innerWidth);

  const divRef = useRef<HTMLDivElement>(null);

  const handleResize = () => {
    setScreenSize(window.innerWidth);
  };

  function handleClick() {
    setShowBox(!showBox);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-white fixed top-0 w-full py-6">
      <div className="flex items-center justify-between w-full px-6">
        <div
          className="text-red font-medium text-2xl"
          onClick={props.handleShowSideNav}
        >
          <GiHamburgerMenu />
        </div>
        <div className="relative">
          <div
            className="flex items-center md:mr-10 sm:mr-4"
            ref={divRef}
            onClick={handleClick}
          >
            <img
              src={props.src}
              alt={props.alt}
              className="h-12 w-12 rounded-full mr-3"
            />
            <p>Hi, {props.firstName}</p>
            {showBox && (
              <div
                className="bg-white absolute top-10 right-12 mt-2 shadow-md divide-y"
                style={{ top: (divRef.current?.offsetHeight ?? 0) + 2 }}
              >
                <div className="flex items-center mr-10  p-4 pr-10">
                  <img
                    src={props.src}
                    alt={props.alt}
                    className="h-12 w-12 rounded-full mr-2"
                  />
                  <div>
                    <p>
                      {props.firstName} {props.lastName}
                    </p>
                    <p className="text-gray-400">{props.email}</p>
                  </div>
                </div>

                <ul className="pt-4 pl-5 pb-4 pr-10">
                  <li className="mb-4 block">
                    <Link to="/" className="text-black flex align-middle">
                      <MdOutlineAccountCircle className="mt-1 mr-7 text-xl text-red-900" />
                      <span className="">Account</span>
                    </Link>
                  </li>
                  <li className="mb-4 block">
                    <Link to="/" className="text-black flex align-middle">
                      <MdSecurity className="mt-1 mr-7 text-xl text-red-900" />
                      <span className="">Security</span>
                    </Link>
                  </li>
                  <li className="mb-4 block">
                    <Link to="/" className="text-black flex align-middle">
                      <FiLogOut className="mt-1 mr-7 text-xl text-red-900" />
                      <span className="">Logout</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
