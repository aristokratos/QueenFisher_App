import React from 'react';
import Logo from '../images/queenfisher-logo.png';

const LandingNavbar = () => {
  return (
    <section className="landingnavbar">
      <nav className="landingnavbar__container">
        <a href="">
          <img src={Logo} alt="Queen fisher logo" />
        </a>

        <ul>
          <li>
            <a href="" className="landingnavbar__a">
              Home
            </a>
          </li>
          <li>
            <a href="" className="landingnavbar__b">
              About
            </a>
          </li>
          <li>
            <a href="" className="landingnavbar__c">
              FAQ
            </a>
          </li>
        </ul>
        <div className="landingnavbar__link">
          <a href="/login" className="landingnavbar__d">
            Login
          </a>
          <a href="/register" className="landingnavbar__e">
            Get Started
          </a>
        </div>
      </nav>
    </section>
  );
};

export default LandingNavbar;
