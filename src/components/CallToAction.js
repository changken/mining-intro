import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstImage from '../img/1.jpg';
import secondImage from '../img/2.jpg';

const CallToAction = props => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100 cta" src={firstImage} alt="First slide" />
        <Carousel.Caption>
          <h5>看看這些專業礦場</h5>
          <p>是不是覺得挖礦是最好的!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cta"
          src={secondImage}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>另一個GPU顯卡礦場</h5>
          <p>來吧! 挖礦拯救北極熊!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CallToAction;
