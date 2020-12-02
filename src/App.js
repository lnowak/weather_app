import {useState} from 'react'

import './App.css';

import Header from './Components/Header';
import Slider from './Components/Slider';
import AppBody from './Components/AppBody';



function App() {

  const [menuActive, setMenuActive] = useState(false);
  const [hideSlider, setHideSlider] = useState(false)

  return (
    <div className="App">
      <Header menuActive={menuActive} setMenuActive={setMenuActive} hideSlider={hideSlider} setHideSlider={setHideSlider}/>
      <Slider menuActive={menuActive} hideSlider={hideSlider}/>
      <AppBody />
    </div>
  );
}

export default App;
