import {useState} from 'react';


function Slider({menuActive, hideSlider}) {

    return (
      <div className={`${menuActive ? 'slider': 'slider--hidden'} ${!hideSlider ? 'hidden': ''}`}>
          <h3 className='slider__title'>Saved locations</h3>
          <div>Nazwa miejsca</div>
      </div>
    );
  }
  
  export default Slider;