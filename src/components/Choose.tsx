import React from 'react';
import OneCardImage from '../images/Ellipse 2.png';
import TwoCardImage from '../images/Ellipse 3.png';
import ThreeCardImage from '../images/Ellipse 4.png';

const Choose: React.FC = () => {
  return (
    <>
      <section className="choose">
        <div className="choose__container">
          <h2 className="choose__header-text">Why Choose Us</h2>
          <div className="choose__card-box">
            <div className="choose__card-one">
              <img src={OneCardImage} alt="" className="choose__card-image" />
              <h4>Healthy Recipe</h4>
              <p>
                Recipes that offer varieties of healthy and delicious recipes
                that cater to various dietary needs and preferences, allowing
                users to maintain a healthy lifestyle while enjoying scrumptious
                meals.
              </p>
            </div>
            <div className="choose__card-two">
              <img src={TwoCardImage} alt="" className="choose__card-image" />
              <h4>Healthy Lifestyle</h4>
              <p>
                Eating nutritious and well-balanced meals, combined with regular
                exercise and mindfulness, are essential components of a healthy
                lifestyle that Queenfisher is dedicated to promoting.
              </p>
            </div>
            <div className="choose__card-three">
              <img src={ThreeCardImage} alt="" className="choose__card-image" />
              <h4>Healthy Meals</h4>
              <p>
                Queenfisher offers a variety of delicious and nutritious meal
                options, providing a healthy and balanced diet for individuals
                looking to improve their overall wellness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Choose;
