export const getWeatherData = async (lat, lng, setCondition, setTemp) => {
  await fetch(
    `http://api.weatherapi.com/v1/current.json?key=f4d40c5eff4644aa99d00817222008&q=${lat},${lng}`
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
