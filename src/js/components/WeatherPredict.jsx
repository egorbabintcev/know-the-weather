import React, { Component } from 'react';
import moment from 'moment';
import WeatherPredictDay from './WeatherPredictDay';

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
    const diff = -(1630 - wrapperWidth) / 16;
    this.setState((state) => {
      if (state.translate - 15 < diff) {
        return { translate: diff };
      }
      return { translate: state.translate - 15 };
    });
  }

  slidePrev() {
    this.setState((state) => {
      if (state.translate + 15 > 0) {
        return { translate: 0 };
      }
      return { translate: state.translate + 15 };
    });
  }

  render() {
    const {
      wrapper,
      slideNext,
      slidePrev,
      props: {
        theme,
        predict: { summary: weekSummary },
      },
      state: { translate },
    } = this;
    let { predict } = this.props;
    predict = predict.data.map((day) => {
      const {
        icon,
        temperatureLow,
        temperatureHigh,
        summary,
        time,
      } = day;
      const unix = moment.unix(time);
      const params = {
        weekday: unix.format('ddd'),
        date: unix.format('DD MMM'),
        tempLow: Math.floor(temperatureLow),
        tempHigh: Math.round(temperatureHigh),
        icon,
        summary,
      };

      return <WeatherPredictDay params={params} key={time} />;
    });
    const translateStyle = { transform: `translateX(${translate}%)` };

    return (
      <div className="weather-predict weather-predict" ref={wrapper}>
        <h3 className="weather-predict__summary">Predict: {weekSummary}</h3>
        <button type="button" className="weather-predict__button weather-predict__button_prev" onClick={slidePrev}>
          <i className="fal fa-angle-left" />
        </button>
        <button type="button" className="weather-predict__button weather-predict__button_next" onClick={slideNext}>
          <i className="fal fa-angle-right" />
        </button>
        <div className={`weather-predict__cards weather-predict__cards_${theme}`}>
          <div className="weather-predict__cards-wrapper" style={translateStyle}>
            {predict}
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherPredict;
