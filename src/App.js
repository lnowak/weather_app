import {useState} from 'react'

import './App.css';

import Header from './Components/Header';
import Slider from './Components/Slider';
import AppBody from './Components/AppBody';
import apiKey from './apiKey';


function App() {

  const [menuActive, setMenuActive] = useState(false);
  const [hideSlider, setHideSlider] = useState(false);
  const [searchedCity, setSearchedCity] = useState('');
  const [currWeather, setCurrWeather] = useState(false);

  const weatherSearch = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${apiKey}`)
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      setCurrWeather(data)
    })
    .catch(err => {
      console.log(err);
    })
    console.log(currWeather);
  }

  return (
    <div className="App">
      <Header menuActive={menuActive} setMenuActive={setMenuActive} hideSlider={hideSlider} setHideSlider={setHideSlider}/>
      <Slider menuActive={menuActive} hideSlider={hideSlider}/>
      <AppBody weatherSearch={weatherSearch} searchedCity={searchedCity} setSearchedCity={setSearchedCity} currWeather={currWeather} setCurrWeather={setCurrWeather}/>
    </div>
  );
}

export default App;
