import React, { Component } from 'react';

class WeatherPredictDay extends Component {
    render() {
        return (
            <div className="weather-predict__card">
                <h3 className="weather-predict__card-weekday">{this.props.weekday}</h3>
                <p className="weather-predict__card-date">{this.props.date}</p>
                <img src={`/img/icons/${this.props.icon}.svg`} alt="" className="weather-predict__card-icon"/>
                <p className="weather-predict__card-temp">{`${this.props.tempLow}° / ${this.props.tempHigh}°`}</p>
                <span className="weather-predict__card-summary">{this.props.summary}</span>
            </div>
        );
    }
}

export default WeatherPredictDay;
