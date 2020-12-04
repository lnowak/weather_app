import FormArea from './FormArea';
import CurrentWeatherArea from './CurrentWeatherArea';
import UpcomingWeatherArea from './UpcomingWeatherArea';


function AppBody({searchedCity, setSearchedCity, currWeather, setCurrWeather, weatherSearch}) {

  let currentWeather;
  if (currWeather) {
    currentWeather = 
    <>
      <CurrentWeatherArea currWeather={currWeather} />
      <UpcomingWeatherArea currWeather={currWeather} />
    </>
  }

    return (
      <div className="appBody">
          <FormArea weatherSearch={weatherSearch} searchedCity={searchedCity} setSearchedCity={setSearchedCity} currWeather={currWeather} setCurrWeather={setCurrWeather}/>
          {currentWeather}
      </div>
    );
  }
  
  export default AppBody;