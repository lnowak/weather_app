function Header({menuActive, setMenuActive, hideSlider, setHideSlider}) {

  const useSlider = () => {
    setMenuActive(() => !menuActive);
    if(menuActive) {
      setTimeout(() => setHideSlider(() => !hideSlider), 300)
    } else {
      setHideSlider(() => !hideSlider);
    }
    
  }

    return (
      <div className="header">
          <div className='header__button' onClick={useSlider}>
              <div className={`${!menuActive ? 'header__button__line' : 'header__button__line--active'}`}></div>
              <div className={`${!menuActive ? 'header__button__line' : 'header__button__line--active'}`}></div>
              <div className={`${!menuActive ? 'header__button__line' : 'header__button__line--active'}`}></div>
          </div>
          <h1 className='header__title'>Weather App</h1>
      </div>
    );
  }
  
  export default Header;