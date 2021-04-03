import React from 'react';
import './App.css';
import './components/Header/Header.css';
import CardList from './components/CardList/CardList';

class App extends React.Component {
  state = {
    lang: 'en',
    savedCards: [],
    key: '1c5a9a29fe1346947d780b45fcf95006',
    background: '#FFF1FE',
    searchNameCity: '',
    localization: {
      en: {
        placeholder: 'City name...',
        searchBitton: 'Add',
        feelsLike: 'Feels like',
        wind: 'Wind',
        humidity: 'Humidity',
        pressure: 'Pressure',
      },
      ua: {
        placeholder: 'Назва міста...',
        searchBitton: 'Додати',
        feelsLike: 'Відчувається як',
        wind: 'Вітер',
        humidity: 'Вологість',
        pressure: 'Тиск',
      },
      ru: {
        placeholder: 'Имя города...',
        searchBitton: 'Добавить',
        feelsLike: 'Чувствуется как',
        wind: 'Ветер',
        humidity: 'Влажность',
        pressure: 'Давление',
      },
    },
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    if (JSON.parse(localStorage.getItem('savedCards')) === null) {
      fetch('https://geolocation-db.com/json/')
      .then(response => response.json())
      .then((result) => {
        this.setState({ location: result });
      })
      .then(() => {
        this.loadWhether(this.state.location.city);
      });
    } else {
      this.setState({
        savedCards: JSON.parse(localStorage.getItem('savedCards')),
      });
    }
  }

  loadWhether = (city) => {
    // eslint-disable-next-line max-len
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.state.key}`)
      .then(response => response.json())
      .then((result) => {
        (result.cod === 200) &&
        this.setState(state => ({
          whether: result,
          savedCards: [result, ...state.savedCards],
        }));
      })
      .then(() => {
        localStorage.setItem('savedCards', JSON.stringify(this.state.savedCards));
      });

      if (localStorage.getItem('lang') !== null) {
        this.setState({
          lang: localStorage.getItem('lang'),
        });
      }
  }

  changeLanguage = (e) => {
    this.setState({ lang: e.target.value });
    localStorage.setItem('lang', e.target.value);
  }

  setBackgroundCard = (background) => {
    return () => {
      this.setState({
        background,
      });
    }
  }

  setBackgroundChart = (chartBackground) => {
    return () => {
      this.setState({
        chartBackground,
      });
    }
  }

  setSearchNameCity = (e) => {
    this.setState({
      searchNameCity: e.target.value,
    });
  }

  addCard = () => {
    this.loadWhether(this.state.searchNameCity);
    this.setState({
      searchNameCity: '',
    });
  }

  deleteCard = (id) => {
    return () => {
      const editedList = this.state.savedCards.filter((_, index) => {
        return id !== index;
      });
      this.setState({
        savedCards: editedList
      });
      localStorage.setItem('savedCards', JSON.stringify(editedList));
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <div>
            <input
              type="text"
              className="Header__searchBar"
              placeholder={this.state.localization[this.state.lang].placeholder}
              onChange={this.setSearchNameCity}
              value={this.state.searchNameCity}
            />
            <button
              className="Header__searchButton"
              type="button"
              onClick={this.addCard}
            >
              {this.state.localization[this.state.lang].searchBitton}
            </button>
          </div>
          <div className="Header__modificators">
            <div className="Header__palette">
              Palette:
              <button
                className="Header__paletteButtons"
                onClick={this.setBackgroundCard('#FFF1FE')}
              ></button>
              <button
                className="Header__paletteButtons"
                onClick={this.setBackgroundCard('#F1F2FF')}
              ></button>
              <button
                className="Header__paletteButtons"
                onClick={this.setBackgroundCard('#459DE9')}
              ></button>
              <button
                className="Header__paletteButtons"
                onClick={this.setBackgroundCard('#F2F2F2')}
              ></button>
              <button
                className="Header__paletteButtons"
                onClick={this.setBackgroundCard('#C5C5C5')}
              ></button>
              <button
                className="Header__paletteButtons"
                onClick={this.setBackgroundCard('#8D8D8D')}
              ></button>
            </div>

            <select
              className="Header__langSelector"
              onChange={this.changeLanguage}
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
        <CardList
          savedCards={this.state.savedCards}
          localization={this.state.localization}
          language={this.state.lang}
          background={this.state.background}
          deleteCard={this.deleteCard}
        />
      </div>
    );
  }
}

export default App;
