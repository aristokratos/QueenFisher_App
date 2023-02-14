import React from 'react';
import Image from '../images/image 4.png';
import Image2 from '../images/image 5.png';

const MainHeader2: React.FC = () => {
return (
<>
<section className="mainheader2">
<div className="mainheader__container-two">
<div className="mainheader2__container-left">
<img src={Image} alt="MainHeader2 Image" className='mainheader2__image-one'/>
<img src={Image2} alt="MainHeader2 Image2" className='mainheader2__image-two'/>
</div>
<div className="mainheader2__container-right">
<h2>Generate Timetables with Ease</h2>
<p>
Generating recipes on Queenfisher is a great way to get inspiration for your next meal. Whether you're in the mood for a classic dish or something a little more adventurous, Queenfisher can help you find exactly what you're looking for.
</p>
<p>
On Queenfisher, you can also save your favorite recipes, add your own personal touches, and even leave comments or ratings to help others find the best recipes.
</p>
<div className='mainheader2__footer'>
<div className="mainheader2__footer-left">
<h3>2K+</h3>
<p>Member Active</p>
</div>
<div className='mainheader2__footer-right'>
<h3>10K+</h3>
<p>Happy Clients</p>
</div>
</div>
 </div>
    </div>

</section>
</>
);
};

export default MainHeader2;
