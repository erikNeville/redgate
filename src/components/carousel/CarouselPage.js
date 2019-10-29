import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {connect} from 'react-redux';
import styled from 'styled-components';

// const CarouselDiv = styled.div`
//   color: white;
//   padding: 50px;
//   text-align: center;

//   .image {
//     max-height: 100px;
//   }
// `;

const CarouselDiv = styled.div`
  padding-top: 81px;
  @media screen and (max-width: 768px) {
    padding-top: 98px;
  }
`;

// the background for carousel image information
const CaptionBox = styled.div`
  background: rgba(54, 61, 72, 0.7);
  border-radius: 10px;
`;

// handles the movement of carousel images
const CarouselPage = ({images}) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, event) => {
    setIndex(selectedIndex);
    setDirection(event.direction);
  };
  // console.log(images);
  return (
    <CarouselDiv>
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src={images[0].src}
          alt={images[0].title}
        />
        <Carousel.Caption>
          <CaptionBox>
            <h3>{images[0].title}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </CaptionBox>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[1].src}
          alt={images[1].title}
        />
        <Carousel.Caption>
          <CaptionBox>
            <h3>{images[1].title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </CaptionBox>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[2].src}
          alt={images[2].title}
        />
        <Carousel.Caption>
          <CaptionBox>
            <h3>{images[2].title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </CaptionBox>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[3].src}
          alt={images[3].title}
        />
        <Carousel.Caption>
          <CaptionBox>
            <h3>{images[3].title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </CaptionBox>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[4].src}
          alt={images[4].title}
        />
        <Carousel.Caption>
          <CaptionBox>
            <h3>{images[4].title}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </CaptionBox>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </CarouselDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    images: state.images.images,
  };
};

export default connect(mapStateToProps)(CarouselPage);
