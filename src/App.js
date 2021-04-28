import { getWeather, setError } from './weather/store/actions/weatherActions';
import { useDispatch, useSelector } from 'react-redux';

import AlertDialog from './common/components/AlertDialog';
import LoadingScreen from './common/screens/LoadingScreen';
import WeatherInfoScreen from './weather/screens/WeatherInfoScreen';
import { setAlert } from './common/store/components/actions/alertActions';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.common.loadingPage);
  const alert = useSelector((state) => state.common.alertMessage);
  const error = useSelector((state) => state.weather.error);

  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <div className="App">
      {loading || alert?.message ? <LoadingScreen /> : <WeatherInfoScreen />}
      {alert?.message && (
        <AlertDialog
          title={alert.title}
          message={alert.message}
          onClose={() => {
            dispatch(setAlert(''));
            dispatch(getWeather());
          }}
        />
      )}

      {error && (
        <AlertDialog
          title="Error"
          message={error}
          onClose={() => dispatch(setError(''))}
        />
      )}
    </div>
  );
};

export default App;
