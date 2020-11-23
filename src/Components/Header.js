function Header({menuActive, setMenuActive}) {
    return (
      <div className="header">
          <div className='header__button' onClick={() => setMenuActive(!menuActive)}>
              <div className={`${!menuActive ? 'header__button__line' : 'header__button__line--active'}`}></div>
              <div className={`${!menuActive ? 'header__button__line' : 'header__button__line--active'}`}></div>
              <div className={`${!menuActive ? 'header__button__line' : 'header__button__line--active'}`}></div>
          </div>
          <h1 className='header__title'>Weather App</h1>
      </div>
    );
  }
  
  export default Header;