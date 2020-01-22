import React, { Component } from 'react';

class WeatherInfo extends Component {
    render() {
        const weather = this.props.weather;
        const windSpeed = Math.round(weather.windSpeed)
        const humidity = weather.humidity * 100;
        const pressure = Math.round(weather.pressure * 0.750062);
        const precipType = weather.precipProbability === 0 ? 'Precip' : weather.precipType.charAt(0).toUpperCase() + weather.precipType.substr(1);
        const precipProbability = (weather.precipProbability * 100).toFixed();
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
}

export default WeatherInfo;
