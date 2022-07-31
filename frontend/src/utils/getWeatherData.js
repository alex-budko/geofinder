export const getWeatherData = async (lat, lng, setCondition, setTemp) => {
  await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${lat},${lng}`
  )
    .then((res) => res.json())
    .then((data) =>  {
      setCondition(data.current.condition.text)
      setTemp([data.current.temp_c, data.current.temp_f])
    })
    .catch((err) => {
      console.log(err)
    })
};
