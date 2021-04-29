import { CELSIUS } from './constants';

const toFahrenheit = (value) => (value * 1.8 - 459.67).toFixed(0);

const toCelsius = (value) => (value - 273.15).toFixed(0);

export const getScale = (value, scale) => {
  if (scale === CELSIUS) {
    return (
      <>
        {toCelsius(value)} <sup>&#8451;</sup>
      </>
    );
  }

  return (
    <>
      {toFahrenheit(value)}
      <sup>&#8457;</sup>
    </>
  );
};
