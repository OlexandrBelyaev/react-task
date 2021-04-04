import React from 'react';
import './CardList.scss';
import PropTypes from 'prop-types';
import WeatherCard from '../WeatherCard/WeatherCard';

const CardList = ({
  savedCards,
  localization,
  language,
  background,
  deleteCard,
  chartBackground,
}) => {
  return (
    <div className="CardList">
      {
        savedCards.map((card, index) =>
          <WeatherCard
            key={index}
            weather={card}
            localization={localization}
            background={background}
            deleteCard={deleteCard}
            id={index}
            language={language}
            chartBackground={chartBackground}
          />
        )
      }
    </div>
  );
};

CardList.propTypes = {
  savedCards: PropTypes.arrayOf(
    PropTypes.object,
  ),
  localization: PropTypes.object.isRequired,
  language: PropTypes.string.isRequired,
  background: PropTypes.string,
  deleteCard: PropTypes.func.isRequired,
};

CardList.defultProps = {
  savedCards: [],
  background: '#FFF1FE',
};

export default CardList;
