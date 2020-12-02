import FormArea from './FormArea';
import CurrentWeatherArea from './CurrentWeatherArea';
import UpcomingWeatherArea from './UpcomingWeatherArea';


function AppBody() {
    return (
      <div className="appBody">
          <FormArea />
          <CurrentWeatherArea />
          <UpcomingWeatherArea />
      </div>
    );
  }
  
  export default AppBody;