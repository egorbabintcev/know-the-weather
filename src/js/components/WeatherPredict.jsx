import React, { Component } from 'react';
import moment from 'moment';
import WeatherPredictDay from './WeatherPredictDay.jsx';

class WeatherPredict extends Component {
    constructor(props) {
        super(props);
        this.state = { translate: 0 };

        this.wrapper = React.createRef();
        this.slideNext = this.slideNext.bind(this);
        this.slidePrev = this.slidePrev.bind(this);
    }

    slideNext() {
        const wrapperWidth = this.wrapper.current.offsetWidth;  
        const diff = -(1615 - wrapperWidth) / 16;
        this.setState(state => {
            if (state.translate - 12 < diff) {
                return { translate: diff };
            }
            return { translate: state.translate - 12 };
        })
    }

    slidePrev() {
        this.setState(state => {
            if (state.translate + 12 > 0) {
                return { translate: 0 };
            }
            return { translate: state.translate + 12 };
        })
    }

    render() {
        const predict = this.props.predict.data.map((day, i) => {
            const time = moment.unix(day.time);
            const params = {
                weekday: time.format('ddd'),
                date: time.format('DD MMM'),
                tempLow: Math.floor(day.temperatureLow),
                tempHigh: Math.round(day.temperatureHigh),
                icon: day.icon,
                summary: day.summary
            }
            
            return <WeatherPredictDay {...params} key={i} />;
        })      
        const translate = { transform: `translateX(${this.state.translate}%)` }  

        return (
            <div className="weather-predict" ref={this.wrapper}>
                <button className="weather-predict__button weather-predict__button_prev" onClick={this.slidePrev}>&lt;</button>
                <button className="weather-predict__button weather-predict__button_next" onClick={this.slideNext}>&gt;</button>
                <div className="weather-predict__cards">
                    <div className="weather-predict__cards-wrapper" style={translate}>
                        {predict}
                    </div>                    
                </div>
            </div>
        );
    }
}

export default WeatherPredict;
