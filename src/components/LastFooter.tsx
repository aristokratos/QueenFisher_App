import React from 'react';
import LastFooterImage from '../images/Plate.png';
import { Link } from 'react-router-dom';
import { RiFacebookFill, RiTwitterFill, RiLinkedinFill } from 'react-icons/ri';
import { AiOutlineGoogle } from 'react-icons/ai';
import Logo from '../images/queenfisher-logo.png';

interface LastFooterProps {}

const LastFooter: React.FC<LastFooterProps> = () => {
  return (
    <footer className="lastfooter">
      <div className="lastfooter__container">
        <div>
          <div className="lastfooter__nameandplate">
            <img src={Logo} alt="Queenfisher logo" />
          </div>
          <div className="lastfooter__copyright">
            <small>© 2023 All rights reserved</small>
          </div>
        </div>
        <article>
          <Link to="/s" className="lastfooter__article-home">
            Home
          </Link>
          <Link to="/about" className="lastfooter__article-about">
            About Us
          </Link>
          <Link to="/faqs" className="lastfooter__article-faq">
            FAQ
          </Link>
        </article>
        <div>
          <div className="lastfooter__socials">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <RiFacebookFill />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <RiTwitterFill />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <RiLinkedinFill />
            </a>
            <a
              href="https://google.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineGoogle />
            </a>
          </div>
          <p>English Version</p>
        </div>
      </div>
    </footer>
  );
};

export default LastFooter;
