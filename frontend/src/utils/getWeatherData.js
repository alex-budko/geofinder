export const getWeatherData = async (lat, lng) => {
  await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=17.38,78.48`)
  };
  