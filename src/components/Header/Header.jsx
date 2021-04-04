import React from 'react';
import './Header.css';

const Header = ({
  localization,
  setSearchNameCity,
  searchNameCity,
  addCard,
  setBackgroundCard,
  changeLanguage,
  lang,
}) => {
  return (
    <div className="Header">
      <div>
        <input
          type="text"
          className="Header__searchBar"
          placeholder={localization[lang].placeholder}
          onChange={setSearchNameCity}
          value={searchNameCity}
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
        <div className="Header__palette">
          Palette:
          <button
            className="Header__paletteButtons"
            onClick={setBackgroundCard('#FFF1FE')}
          ></button>
          <button
            className="Header__paletteButtons"
            onClick={setBackgroundCard('#F1F2FF')}
          ></button>
          <button
            className="Header__paletteButtons"
            onClick={setBackgroundCard('#459DE9')}
          ></button>
          <button
            className="Header__paletteButtons"
            onClick={setBackgroundCard('#F2F2F2')}
          ></button>
          <button
            className="Header__paletteButtons"
            onClick={setBackgroundCard('#C5C5C5')}
          ></button>
          <button
            className="Header__paletteButtons"
            onClick={setBackgroundCard('#8D8D8D')}
          ></button>
        </div>

        <select
          className="Header__langSelector"
          onChange={changeLanguage}
          value={lang}
        >
          <option value="en">
            EN
          </option>
          <option value="ua">
            UA
          </option>
          <option value="ru">
            RU
          </option>
        </select>
      </div>
    </div>
  );
}

export default Header;
