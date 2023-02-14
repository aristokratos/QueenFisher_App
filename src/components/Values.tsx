import Vector from '../images/Chicken.png';
import Stall from '../images/Stall.png';
import FoodDeliveryMan from '../images/Food Delivery Man.png';
import Ellipse from '../images/Ellipse 1.png';
import Tomato from '../images/image 6.png';

const Values: React.FC = () => {
return (
<section className="values">
<div className="values__container">
<div className="values__left">
<h2>
Our Values that Would Help You
</h2>
<p>
At Queenfisher, we encourage creativity and innovation in cooking by promoting the discovery of new and creative recipes, as well as the use of innovative cooking techniques.
</p>
<p>
Queenfisher is accessible to all users, regardless of their physical abilities or technological savvy, to ensure accessibility for all.
</p>
<div className="values__points">
<p className='values__points-first'>
<img src={Vector} alt="" className="vector__one"/>
Good recipes/Ingredients
</p>
<p className='values__points-second'>
<img src={Stall} alt=""/>
Best Stores to Purchase Items
</p>
<p className='values__points-third'>
<img src={FoodDeliveryMan} alt="" />
Fast Preparation Services
</p>
</div>
</div>
<div className="values__right">
<img src={Ellipse} alt="" className='values__image-one'/>
<img src={Tomato} alt="" className='values__image-two' />
</div>
    </div>
</section>
);
};

export default Values;




