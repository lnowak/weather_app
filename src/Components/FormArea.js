import {useState} from 'react';


function FormArea({searchedCity, setSearchedCity, currWeather, setCurrWeather} ) {

    const [city, setCity] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        setSearchedCity(() => city);
        setCity(() => '');
        console.log(currWeather, currWeather.cod);
    }

    return (
      <div className="formArea">
          <form onSubmit={handleSubmit}>
              <input type='text' value={city} onChange={(e) => setCity(e.target.value)}/>
              <input type='submit' value='szukaj' />
          </form>
          <p>Wybrane miasto to: {currWeather.name}, {currWeather.cod}</p>
      </div>
    );
  }
  
  export default FormArea;