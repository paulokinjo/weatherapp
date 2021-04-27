import { useDispatch, useSelector } from 'react-redux';

import LoadingScreen from './common/screens/LoadingScreen';
import WeatherInfoScreen from './weather/screens/WeatherInfoScreen';
import { getWeather } from './store/weather/weatherActions';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <div className="App">
      {loading ? <LoadingScreen /> : <WeatherInfoScreen />}
    </div>
  );
};

export default App;
