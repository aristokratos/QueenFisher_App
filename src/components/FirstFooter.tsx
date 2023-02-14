import FirstFooterImage from '../images/image 7.png';
import * as React from 'react';

const FirstFooter: React.FC = () => {
return (
<section className="firstfooter">
<div className="firstfooter__container">
<h2>Subscribe on Our Newsletter</h2>
<p className="firstfooter__pone">
Stay up to date with our latest news and offers by subscribing to our
newsletter now!
</p>
<form className="firstfooter__form">
<input
         type="text"
         placeholder="E-mail Address"
         className="firstfooter__input"
       />


      <input
        type="submit"
        value="Subscribe"
        className="firstfooter__button"
      />
    </form>

    <p className="firstfooter__ptwo">
      We will never spam you. Only with useful mails with promo and events.
    </p>
    <img src={FirstFooterImage} alt="" className="firstfooter__image" />
  </div>
</section>
);
};

export default FirstFooter;





