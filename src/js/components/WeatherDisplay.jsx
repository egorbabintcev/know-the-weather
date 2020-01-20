import React, { Component } from 'react';

class WeatherDisplay extends Component {
    render() {
        const weather = this.props.weather;
        const temp = Math.round(weather.temperature);
        const appTemp = Math.round(weather.apparentTemperature);        

        return (
            <div className="weather-display">
                <div className="weather-display__temp">
                    <h2 className="weather-display__temp-main">{temp}°</h2>
                    <p className="weather-display__temp-apparent">Feels like: {appTemp}°</p>
                </div>
                <div className="weather-display__summary">
                    <div className="weather-display__summary-icon" data-icon={weather.icon} ></div>
                    <h2 className="weather-display__summary-title">{weather.summary}</h2>                    
                </div>
            </div>
        );
    }
}

export default WeatherDisplay;
