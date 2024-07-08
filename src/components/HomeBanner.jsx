import Carousel from 'react-bootstrap/Carousel';
import "./HomeBanner.css";

function HomeBanner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img text="First slide" src='https://i.ytimg.com/vi/gAegO5Z9470/maxresdefault.jpg'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img text="Second slide" src='https://i.pinimg.com/originals/f0/f9/e4/f0f9e45724771f16745ad3f6f640d3ce.jpg'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default HomeBanner;