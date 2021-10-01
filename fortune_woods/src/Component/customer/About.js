import React from 'react';
import im1 from '../../images/HomeDecor.jpg';

function About() {
  

  return (
    <div className="container">
      <hr className="mt-2 mb-3"/>
      <img src={im1} class="img-responsive"/>
        <p className="mx-auto w-75 p-3 overlay-text">
        <b>Fortune Woods</b> is an online furniture website. We provide furniture at affordable prices.
        Fortune Woods website is aimed to provide you with the latest in home furnishings, home decor and accessories at a price you can afford. We always carry products that will be the focus of your home's décor with superior selection, value, and quality.
        </p>
        <p className="mx-auto w-75 p-3 overlay-text">
        <b>Customer Satisfaction</b> <br/>
        Here at Fortune Woods, we know how difficult it can be when purchasing online, that's why our company gives maximum priority to customer satisfaction. Our highly trained staff is ready to assist you with any questions regarding your purchases. You can be assured that our customers are our main concern when it comes to consumer happiness. When you shop at Foutune Woods you can shop with great confidence that YOU the customer will always be treated with the utmost care and respect. Our goal is to provide you with a wonderful experience and keep you coming back for your future furniture purchases.
        </p>
    </div>
  );
}

export default About;
