import React from 'react';
import './SelectLanguage.scss';

const SelectLanguage = ({
  changeLanguage,
  lang,
}) => {
  return (
    <select
      className="SelectLanguage"
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
  );
}

export default SelectLanguage;
