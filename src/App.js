import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardList from './components/CardList/CardList';

class App extends React.Component {
  state = {
    lang: 'en',
    savedCards: [],
    autocompleted: [],
    key: '1c5a9a29fe1346947d780b45fcf95006',
    background: '#FFF1FE',
    searchNameCity: '',
    localization: {
      en: {
        placeholder: 'City name...',
        searchButton: 'Add',
        feelsLike: 'Feels like',
        wind: 'Wind',
        humidity: 'Humidity',
        pressure: 'Pressure',
      },
      ua: {
        placeholder: 'Назва міста...',
        searchButton: 'Додати',
        feelsLike: 'Відчувається як',
        wind: 'Вітер',
        humidity: 'Вологість',
        pressure: 'Тиск',
      },
      ru: {
        placeholder: 'Имя города...',
        searchButton: 'Добавить',
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
        this.loadWeather(this.state.location.city);
      });
    } else {
      this.setState({
        savedCards: JSON.parse(localStorage.getItem('savedCards')),
      });
    }

    if (!!localStorage.getItem('lang')) {
      this.setState({
        lang: localStorage.getItem('lang'),
      });
    }

    if (!!localStorage.getItem('autocompleted')) {
      this.setState({
        autocompleted: JSON.parse(localStorage.getItem('autocompleted')),
      });
    }
  }

  loadWeather = (city) => {
    // eslint-disable-next-line max-len
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.state.key}`)
      .then(response => response.json())
      .then((result) => {
        if (result.cod === 200) {
          this.setState(state => ({
            weather: result,
            savedCards: [result, ...state.savedCards],
          }));
        }

        if (
          !this.state.autocompleted.includes(result.name)
          && (result.cod === 200)
          && (result.name !== null)
        ) {
          this.setState(state => ({
            autocompleted: [...state.autocompleted, result.name],
          }));
        }
      })
      .then(() => {
        localStorage.setItem(
          'savedCards', JSON.stringify(this.state.savedCards)
        );
        localStorage.setItem(
          'autocompleted', JSON.stringify(this.state.autocompleted)
        );
      });
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
      searchNameCity: e,
    });
  }

  addCard = () => {
    this.loadWeather(this.state.searchNameCity);
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

      localStorage.setItem(
        'savedCards', JSON.stringify(editedList)
      );
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          localization={this.state.localization[this.state.lang]}
          setSearchNameCity={this.setSearchNameCity}
          addCard={this.addCard}
          setBackgroundCard={this.setBackgroundCard}
          changeLanguage={this.changeLanguage}
          lang={this.state.lang}
          autocompleted={this.state.autocompleted}
        />
        <CardList
          savedCards={this.state.savedCards}
          localization={this.state.localization}
          language={this.state.lang}
          background={this.state.background.color}
          deleteCard={this.deleteCard}
        />
      </div>
    );
  }
}

export default App;
