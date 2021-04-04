import React from 'react';
import './App.css';
import './components/Header/Header.css';
import Header from './components/Header/Header.jsx';
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

    if (!!localStorage.getItem('lang')) {
      this.setState({
        lang: localStorage.getItem('lang'),
      });
    }
  }

  loadWhether = (city) => {
    // eslint-disable-next-line max-len
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.state.key}`)
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
        <Header
          localization={this.state.localization}
          setSearchNameCity={this.setSearchNameCity}
          searchNameCity={this.state.searchNameCity}
          addCard={this.addCard}
          setBackgroundCard={this.setBackgroundCard}
          changeLanguage={this.changeLanguage}
          lang={this.state.lang}
        />
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
