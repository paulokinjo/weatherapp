import ForwardIcon from '@material-ui/icons/Forward';
import React from 'react';
import Slider from 'react-slick';
import WeatherCard from './WeatherCard';

const list = [1, 2, 3, 4, 5];

function SampleNextArrow(props) {
  const [hide, setHide] = React.useState(false);
  const { className, style, onClick, currentSlide, slideCount } = props;

  const handleNextArrowClick = () => {
    if (currentSlide + 3 === slideCount - 1) {
      setHide(true);
    }
    onClick();
  };

  return (
    <>
      {!hide && (
        <ForwardIcon
          className={className}
          style={{
            ...style,
            fontSize: 70,
            color: 'blue',
            top: -25,
            right: 20,
          }}
          onClick={handleNextArrowClick}
          data-testid="nextArrow"
        />
      )}
    </>
  );
}

function SamplePrevArrow(props) {
  const [hide, setHide] = React.useState(true);
  const { className, style, onClick, currentSlide, slideCount } = props;

  const handlePrevArrowClick = () => {
    if (currentSlide === 0) {
      setHide(true);
    }
    onClick();
  };
  return (
    <>
      {!hide && (
        <ForwardIcon
          className={className}
          style={{
            ...style,
            fontSize: 70,
            color: 'blue',
            transform: `rotate(180deg)`,
            top: -60,
            left: 30,
          }}
          id="prevArrow"
          onClick={onClick}
          data-testid="prevArrow"
        />
      )}
    </>
  );
}

const settings = {
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  focusOnSelect: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const WeatherCardsList = () => {
  return (
    <>
      <Slider {...settings}>
        {list.map((l) => (
          <div key={l}>
            <WeatherCard />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default WeatherCardsList;
