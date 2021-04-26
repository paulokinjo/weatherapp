import './App.css';

import LoadingScreen from './screens/LoadingScreen';
import React from 'react';
import WeatherInfoScreen from './Weather/screens/WeatherInfoScreen';

const App = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="App">
      {loading && <LoadingScreen />}
      {!loading && <WeatherInfoScreen />}
    </div>
  );
};

export default App;
