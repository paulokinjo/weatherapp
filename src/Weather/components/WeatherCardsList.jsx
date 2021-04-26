import { useDispatch, useSelector } from 'react-redux';

import ArrowControl from '../../common/components/ArrowControl';
import React from 'react';
import Slider from 'react-slick';
import WeatherCard from './WeatherCard';
import { setCurrentPage } from '../../store/common/components/actions/arrowControlActions';

const WeatherCardsList = ({ weatherData }) => {
  const dispatch = useDispatch();
  const arrowControlState = useSelector((state) => state.arrow);

  const settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: (
      <ArrowControl
        customStyle={{
          top: '-80px',
          right: '25%',
          transform: 'rotate(360deg)',
        }}
        isVisible={arrowControlState.nextArrow}
        dispatch={dispatch}
      />
    ),
    prevArrow: (
      <ArrowControl
        customStyle={{ top: '-83px', left: '18%', transform: 'rotate(180deg)' }}
        isVisible={arrowControlState.prevArrow}
        dispatch={dispatch}
      />
    ),
    afterChange: (current) => dispatch(setCurrentPage(current)),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  return (
    <>
      <Slider {...settings}>
        {weatherData.map((data) => (
          <div key={data}>
            <WeatherCard info={data} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default WeatherCardsList;
