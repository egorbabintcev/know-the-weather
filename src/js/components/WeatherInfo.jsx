import React from 'react';

function WeatherInfo(props) {
  let {
    weather: {
      windSpeed,
      humidity,
      pressure,
      precipType,
      precipProbability,
    },
  } = props;
  windSpeed = Math.round(windSpeed);
  humidity *= 100;
  pressure = Math.round(pressure * 0.750062);
  precipType = precipProbability === 0 ? 'Precip' : precipType.charAt(0).toUpperCase() + precipType.substr(1);
  precipProbability = (precipProbability * 100).toFixed();

  return (
    <div className="weather-info">
      <ul className="weather-info__list">
        <li className="weather-info__list-item"><strong>Wind speed:</strong> {windSpeed} km/h</li>
        <li className="weather-info__list-item"><strong>Humidity:</strong> {humidity}%</li>
        <li className="weather-info__list-item"><strong>Pressure:</strong> {pressure} mmHg</li>
        <li className="weather-info__list-item"><strong>{precipType} probability:</strong> {precipProbability}%</li>
      </ul>
    </div>
  );
}

export default WeatherInfo;
