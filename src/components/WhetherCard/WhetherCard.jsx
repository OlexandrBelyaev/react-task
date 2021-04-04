import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './WhetherCard.css';
import WeatherChart from '../WeatherChart/WeatherChart';

const WhetherCard = ({
  whether,
  localization,
  language,
  background,
  deleteCard,
  id,
}) => {
  const [temperatureSystem, changeSystem] = useState('c');
  const main = Object.assign({}, whether.main);
  const weather = Object.assign({}, whether.weather);
  const sys = Object.assign({}, whether.sys);
  const wind = Object.assign({}, whether.wind);

  const { description, icon } = Object.assign({}, weather[0]);
  const averageTemp = (main.temp_max + main.temp_min) / 2;

  const convertToFarengate = (Kelvin) => {
    return Math.round(Kelvin * 9 / 5 - 459.67).toString();
  };

  const convertToCelsy = (Kelvin) => {
    const celsy = Math.round(Kelvin - 273.15).toString();

    return (celsy > 0) ? `+${celsy}` : celsy;
  };

  const getActualDate = () => {
    const date = new Date();
    let result;

    switch (date.getDay()) {
      case 0: result = 'Mon'; break;
      case 1: result = 'Tue'; break;
      case 2: result = 'Wed'; break;
      case 3: result = 'Thi'; break;
      case 4: result = 'Fri'; break;
      case 5: result = 'Sat'; break;
      case 6: result = 'Sun'; break;
      default: break;
    }

    result += `, ${date.getDate()} `;

    switch (date.getMonth()) {
      case 0: result += 'January'; break;
      case 1: result += 'February'; break;
      case 2: result += 'March'; break;
      case 3: result += 'April'; break;
      case 4: result += 'May'; break;
      case 5: result += 'June'; break;
      case 6: result += 'Jule'; break;
      case 7: result += 'August'; break;
      case 8: result += 'September'; break;
      case 9: result += 'October'; break;
      case 10: result += 'November'; break;
      case 11: result += 'December'; break;
      default: break;
    }

    result += `, ${date.getHours()}:${date.getMinutes()}`;

    return result;
  };

  return (
    <div className="WhetherCard" style={{ background: background }}>
      <div className="WhetherCard__header">
        <div className="WhetherCard__city">
          {`${whether.name}, ${sys.country}`}
        </div>
        <div className="WhetherCard__iconWhether">
          <img
            className="WhetherCard__icon"
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weatherIcon"
          />
          <div className="WhetherCard__whetherDescription">
            {description}
          </div>
          <button
            className="WhetherCard__deleteCard"
            onClick={deleteCard(id)}
          >
              {`x`}
            </button>
        </div>
      </div>
      <div className="WhetherCard__date">
        {getActualDate()}
      </div>
      <div className="WhetherCard__chart">
        <WeatherChart
          averageTemp={convertToCelsy(averageTemp)}
        />
      </div>
      <div className="WhetherCard__templine">
        <div className="WhetherCard__tempcontainer">
          <div className="WhetherCard__tempToggle">
            {
              temperatureSystem === 'c'
                ? (
                  <span className="WhetherCard__temp">
                    {
                      convertToCelsy(main.temp)
                    }
                  </span>
                )
                : (
                  <span className="WhetherCard__temp">
                    {
                      convertToFarengate(main.temp)
                    }
                  </span>
                )
            }
            <span
              href="#1"
              className={
                temperatureSystem === 'c'
                  ? 'WhetherCard__temptype-active'
                  : 'WhetherCard__temptype'
              }
              onClick={() => {
                changeSystem('c');
              }}
            >
              ℃
            </span>
            {` | `}
            <span
              href="#1"
              className={
                temperatureSystem === 'f'
                  ? 'WhetherCard__temptype-active'
                  : 'WhetherCard__temptype'
              }
              onClick={() => {
                changeSystem('f');
              }}
            >
              ℉
            </span>
          </div>
          <div className="WhetherCard__feelslike">
            {
              temperatureSystem === 'c'
                ? `${localization[language].feelsLike} ${
                  convertToCelsy(main.feels_like)
                }℃`
                : `${localization[language].feelsLike} ${
                  convertToFarengate(main.feels_like)
                }℉`
            }
          </div>
        </div>
        <div>
          <div className="WhetherCard__additional">
            <div>
              {`${localization[language].wind}: `}
              <b className="WhetherCard__additional-blue">{`${wind.speed} m/s`}</b>
            </div>
            <div>
              {`${localization[language].humidity}:`}
              <b className="WhetherCard__additional-blue">{` ${main.humidity}`}</b>
            </div>
            <div>
              {`${localization[language].pressure}:`}
              <b className="WhetherCard__additional-blue">{` ${main.pressure}`}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WhetherCard.propTypes = {
  whether: PropTypes.object.isRequired,
  localization: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  deleteCard: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default WhetherCard;
