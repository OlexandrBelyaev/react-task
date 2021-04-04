import React from 'react';
import './Palette.scss';

const Palette = ({ setBackgroundCard }) => {
  const colorsOfButtons = ['#FFF1FE', '#F1F2FF', '#459DE9', '#F2F2F2', '#C5C5C5', '#8D8D8D'];
  return (
    <div className="Palette">
      Palette:
      {
        colorsOfButtons.map((color, index) => (
          <button
            key={`button${index}`}
            className="Palette__buttons"
            onClick={setBackgroundCard({color})}
          ></button>
        ))
      }
    </div>
  );
}

export default Palette;