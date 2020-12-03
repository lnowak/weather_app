import FormArea from './FormArea';
import CurrentWeatherArea from './CurrentWeatherArea';
import UpcomingWeatherArea from './UpcomingWeatherArea';


function AppBody({searchedCity, setSearchedCity, currWeather, setCurrWeather, weatherSearch}) {
    return (
      <div className="appBody">
          <FormArea weatherSearch={weatherSearch} searchedCity={searchedCity} setSearchedCity={setSearchedCity} currWeather={currWeather} setCurrWeather={setCurrWeather}/>
          <CurrentWeatherArea />
          <UpcomingWeatherArea />
      </div>
    );
  }
  
  export default AppBody;