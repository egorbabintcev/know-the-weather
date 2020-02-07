import React from 'react';

function WeatherDisplay(props) {
  const {
    weather: {
      icon,
      summary,
    },
    theme,
  } = props;
  let {
    weather: {
      temperature: temp,
      apparentTemperature: appTemp,
    },
  } = props;
  temp = Math.round(temp);
  appTemp = Math.round(appTemp);

  return (
    <div className={`weather-display weather-display_${theme}`}>
      <div className="weather-display__temp">
        <h2 className="weather-display__temp-main">{temp}°</h2>
        <p className="weather-display__temp-apparent">Feels like: {appTemp}°</p>
      </div>
      <div className="weather-display__summary">
        <img src={`/img/icons/${icon}.svg`} alt="" className="weather-display__summary-icon" />
        <h2 className="weather-display__summary-title">{summary}</h2>
      </div>
    </div>
  );
}

export default WeatherDisplay;
