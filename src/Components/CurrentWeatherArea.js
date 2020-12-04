function CurrentWeatherArea({currWeather}) {

  return (
    <div className="currentWeatherArea">
        <div className='currentWeatherArea__cityDetails'>
          <h2 className='currentWeatherArea__cityDetails__name'>{currWeather.name}, {currWeather.sys.country} </h2>
          <p className='currentWeatherArea__cityDetails__date'></p>
        </div>
        <div className='currentWeatherArea__weather'>
          <div className='currentWeatherArea__weather__icon'></div>
          <div className='currentWeatherArea__weather__weatherData'>
          <p className='currentWeatherArea__weather__weatherData__temp'>{Math.round(currWeather.main.temp - 273.15)}℃</p>
          <p className='currentWeatherArea__weather__weatherData__desc'>{currWeather.weather[0].description}</p>
          </div>
        </div>
        <div className='currentWeatherArea__weatherDetails'></div>
        <div className='currentWeatherArea__hourlyWeather'></div>
    </div>
  );
}
  
  export default CurrentWeatherArea;