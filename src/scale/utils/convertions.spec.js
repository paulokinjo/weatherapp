import * as convertions from './convertions';
import * as scaleConstants from './constants';

describe('[Utils] convertions', () => {
  const temperature = 300;

  it('should convert to celsius given a temperature', () => {
    const expectedTemperature = '27';
    const fragment = convertions.getScale(temperature, scaleConstants.CELSIUS);
    expect(fragment.props.children[0]).toBe(expectedTemperature);
  });

  it('should convert to fahrenheit given a temperature', () => {
    const expectedTemperature = '80';
    const fragment = convertions.getScale(
      temperature,
      scaleConstants.FAHRENHEIT
    );
    expect(fragment.props.children[0]).toBe(expectedTemperature);
  });
});
