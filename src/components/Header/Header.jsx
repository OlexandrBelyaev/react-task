import React from 'react';
import './Header.scss';
import SelectLanguage from '../SelectLanguage/SelectLanguage';
import Palette from '../Palette/Palette';
import SearchField from '../SearchField/SearchField';

const Header = ({
  localization,
  setSearchNameCity,
  addCard,
  setBackgroundCard,
  changeLanguage,
  lang,
}) => {
  return (
    <div className="Header">
      <div className="Header__search">
        <SearchField
          setSearchNameCity={setSearchNameCity}
          localization={localization}
          lang={lang}
        />
        <button
          className="Header__searchButton"
          type="button"
          onClick={addCard}
        >
          {localization[lang].searchBitton}
        </button>
      </div>
      <div className="Header__modificators">
        <Palette
          setBackgroundCard={setBackgroundCard}
        />

        <SelectLanguage
          changeLanguage={changeLanguage}
          lang={lang}
        />
      </div>
    </div>
  );
}

export default Header;
