import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './WeatherCard.scss';
import WeatherChart from '../WeatherChart/WeatherChart';

const WeatherCard = ({
  weather,
  localization,
  language,
  background,
  deleteCard,
  id,
}) => {
  const [temperatureSystem, changeSystem] = useState('c');
  const main = Object.assign({}, weather.main);
  const weatherDetails = Object.assign({}, weather.weather);
  const sys = Object.assign({}, weather.sys);
  const wind = Object.assign({}, weather.wind);
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
    <div className="WeatherCard" style={{ background: background }}>
      <div className="WeatherCard__header">
        <div className="WeatherCard__city">
          {`${weather.name}, ${sys.country}`}
        </div>
        <div className="WeatherCard__iconWeather">
          <img
            className="WeatherCard__icon"
            src={`http://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`}
            alt="weatherIcon"
          />
          <div className="WeatherCard__weatherDescription">
            {weatherDetails[0].description}
          </div>
          <button
            className="WeatherCard__deleteCard"
            onClick={deleteCard(id)}
          >
            {`x`}
          </button>
        </div>
      </div>
      <div className="WeatherCard__date">
        {getActualDate()}
      </div>
      <div className="WeatherCard__chart">
        <WeatherChart
          averageTemp={convertToCelsy(averageTemp)}
        />
      </div>
      <div className="WeatherCard__templine">
        <div className="WeatherCard__tempcontainer">
          <div className="WeatherCard__tempToggle">
            {
              temperatureSystem === 'c'
                ? (
                  <span className="WeatherCard__temp">
                    {
                      convertToCelsy(main.temp)
                    }
                  </span>
                )
                : (
                  <span className="WeatherCard__temp">
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
                  ? 'WeatherCard__temptype-active'
                  : 'WeatherCard__temptype'
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
                  ? 'WeatherCard__temptype-active'
                  : 'WeatherCard__temptype'
              }
              onClick={() => {
                changeSystem('f');
              }}
            >
              ℉
            </span>
          </div>
          <div className="WeatherCard__feelslike">
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
          <div className="WeatherCard__additional">
            <div>
              {`${localization[language].wind}: `}
              <b className="WeatherCard__additional-blue">{`${wind.speed} m/s`}</b>
            </div>
            <div>
              {`${localization[language].humidity}:`}
              <b className="WeatherCard__additional-blue">{` ${main.humidity}`}</b>
            </div>
            <div>
              {`${localization[language].pressure}:`}
              <b className="WeatherCard__additional-blue">{` ${main.pressure}`}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.object.isRequired,
  localization: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  background: PropTypes.string,
  deleteCard: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

WeatherCard.defaultProps = {
  background: '#FFF1FE',
};

export default WeatherCard;
