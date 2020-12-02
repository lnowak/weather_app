import {useState, useEffect} from 'react'

import './App.css';

import Header from './Components/Header';
import Slider from './Components/Slider';
import AppBody from './Components/AppBody';


function App() {

  const [menuActive, setMenuActive] = useState(false);
  const [hideSlider, setHideSlider] = useState(false);
  const [searchedCity, setSearchedCity] = useState('');
  const [currWeather, setCurrWeather] = useState(false);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=694e3df194be037f1760c032ec19d8f0`)
    .then(resp => {
      console.log(resp)
      return resp.json();
    })
    .then(data => {
      setCurrWeather(data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [searchedCity])

  return (
    <div className="App">
      <Header menuActive={menuActive} setMenuActive={setMenuActive} hideSlider={hideSlider} setHideSlider={setHideSlider}/>
      <Slider menuActive={menuActive} hideSlider={hideSlider}/>
      <AppBody searchedCity={searchedCity} setSearchedCity={setSearchedCity} currWeather={currWeather} setCurrWeather={setCurrWeather}/>
    </div>
  );
}

export default App;
