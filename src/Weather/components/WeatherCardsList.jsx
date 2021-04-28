import { useDispatch, useSelector } from 'react-redux';

import ArrowControl from '../../common/components/ArrowControl';
import React from 'react';
import Slider from 'react-slick';
import WeatherCard from './WeatherCard';
import { selectCard } from '../store/actions/weatherActions';
import { setCurrentCard } from '../../common/store/components/actions/arrowControlActions';

const settings = (dispatch, nextArrow, prevArrow) => {
  return {
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: false,
    nextArrow: (
      <ArrowControl
        customStyle={{
          top: '-80px',
          right: '25%',
          transform: 'rotate(360deg)',
        }}
        isVisible={nextArrow}
        id="nextArrow"
      />
    ),
    prevArrow: (
      <ArrowControl
        customStyle={{ top: '-83px', left: '18%', transform: 'rotate(180deg)' }}
        isVisible={prevArrow}
        id="prevArrow"
      />
    ),
    afterChange: (current) => dispatch(setCurrentCard(current)),
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
};

const WeatherCardsList = ({ weatherData }) => {
  const dispatch = useDispatch();
  const arrowControlState = useSelector((state) => state.common.arrowControls);
  const scale = useSelector((state) => state.scale.components);

  const handleCardSelection = (selectedCard) => {
    dispatch(selectCard(selectedCard));
  };

  return (
    <>
      {arrowControlState && (
        <Slider
          {...settings(
            dispatch,
            arrowControlState.nextArrow,
            arrowControlState.prevArrow
          )}
        >
          {weatherData.map((data) => (
            <div key={data.dt}>
              <WeatherCard
                info={data}
                scale={scale}
                onCardSelection={() => handleCardSelection(data)}
              />
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default WeatherCardsList;
