import React from 'react';
import './CardList.css';
import PropTypes from 'prop-types';
import WhetherCard from '../WhetherCard/WhetherCard';

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
          <WhetherCard
            key={index}
            whether={card}
            localization={localization}
            language={language}
            background={background}
            deleteCard={deleteCard}
            id={index}
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
  background: PropTypes.string.isRequired,
  deleteCard: PropTypes.func.isRequired,
};

CardList.defultProps = {
  savedCards: [],
};

export default CardList;
