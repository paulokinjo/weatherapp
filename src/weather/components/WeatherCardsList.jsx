import {
  setCurrentCard,
  setTotalCardsToShow,
} from '../../common/store/components/actions/arrowControlActions';
import { useDispatch, useSelector } from 'react-redux';

import ArrowControl from '../../common/components/ArrowControl';
import React from 'react';
import Slider from 'react-slick';
import WeatherCard from './WeatherCard';
import { selectCard } from '../store/actions/weatherActions';

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

const settings = (dispatch, nextArrow, prevArrow) => {
  return {
    infinite: false,
    speed: 300,
    swipeToSlide: true,
    focusOnSelect: false,
    adaptiveHeight: true,
    nextArrow: getNextArrow(nextArrow),
    prevArrow: getPrevArrow(prevArrow),
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (_, curr) => {
      dispatch(setTotalCardsToShow(3));
      dispatch(setCurrentCard(curr));
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          beforeChange: (_, curr) => {
            dispatch(setTotalCardsToShow(2));
            dispatch(setCurrentCard(curr));
          },
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          beforeChange: (_, curr) => {
            dispatch(setTotalCardsToShow(1));
            dispatch(setCurrentCard(curr));
          },
        },
      },
    ],
  };
};

const getPrevArrow = (prevArrow) => {
  return (
    <ArrowControl
      customStyle={{ top: '-83px', left: '18%', transform: 'rotate(180deg)' }}
      isVisible={prevArrow}
      id="prevArrow"
    />
  );
};

const getNextArrow = (nextArrow) => {
  return (
    <ArrowControl
      customStyle={{
        top: '-80px',
        right: '25%',
        transform: 'rotate(360deg)',
      }}
      isVisible={nextArrow}
      id="nextArrow"
    />
  );
};

export default WeatherCardsList;
