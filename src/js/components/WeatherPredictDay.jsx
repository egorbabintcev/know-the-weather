import React from 'react';

function WeatherPredictDay(props) {
  const {
    summary,
    params: {
      weekday,
      date,
      icon,
      tempLow,
      tempHigh,
    },
  } = props;

  return (
    <div className="weather-predict__card">
      <h3 className="weather-predict__card-weekday">{weekday}</h3>
      <p className="weather-predict__card-date">{date}</p>
      <img src={`/img/icons/${icon}.svg`} alt="" className="weather-predict__card-icon" />
      <p className="weather-predict__card-temp">{`${tempLow}° / ${tempHigh}°`}</p>
      <span className="weather-predict__card-summary">{summary}</span>
    </div>
  );
}

export default WeatherPredictDay;
