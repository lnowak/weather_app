import FormArea from './FormArea';
import CurrentWeatherArea from './CurrentWeatherArea';
import UpcomingWeatherArea from './UpcomingWeatherArea';


function AppBody({searchedCity, setSearchedCity, currWeather, setCurrWeather}) {
    return (
      <div className="appBody">
          <FormArea searchedCity={searchedCity} setSearchedCity={setSearchedCity} currWeather={currWeather} setCurrWeather={setCurrWeather}/>
          <CurrentWeatherArea />
          <UpcomingWeatherArea />
      </div>
    );
  }
  
  export default AppBody;