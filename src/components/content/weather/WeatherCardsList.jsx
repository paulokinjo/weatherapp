import ForwardIcon from '@material-ui/icons/Forward';
import React from 'react';
import Slider from 'react-slick';
import WeatherCard from './WeatherCard';

const list = [1, 2, 3, 4, 5];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ForwardIcon
      className={className}
      style={{
        ...style,
        fontSize: 70,
        color: 'blue',
        top: -25,
        right: 20,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
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
      onClick={onClick}
    />
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
