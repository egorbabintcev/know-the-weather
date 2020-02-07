import React from 'react';
import Loading from './Loading';

const WeatherDisplay = React.lazy(() => import('./WerDisplay'));
const WeatherInfo = React.lazy(() => import('./WeatherInfo'));
const WeatherPredict = React.lazy(() => import('./WeatherPredict'));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light',
    };
    this.fetchWeather = this.fetchWeather.bind(this);
    this.themeChange = this.themeChange.bind(this);
  }

  componentDidMount() {
    this.fetchWeather();
  }

  fetchWeather() {
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    window.navigator.geolocation.getCurrentPosition((loc) => {
      const apiKey = '45ebfa2ec98ccdf3e369c1c976bf5327';
      const { latitude: lat, longitude: lon } = loc.coords;
      const darksky = `https://api.darksky.net/forecast/${apiKey}/${lat},${lon}?units=ca&exclude=minutely,hourly,alerts,flags`;
      fetch(proxy + darksky)
        .then((resp) => resp)
        .then((data) => {
          setTimeout(() => {
            data.json()
              .then((json) => { this.setState({ weather: json }); });
          }, 250);
        });
    });
  }

  themeChange() {
    this.setState((state) => {
      const theme = state.theme === 'light' ? 'dark' : 'light';
      document.querySelector('body').classList.toggle('body_dark');
      return { theme };
    });
  }

  render() {
    const { weather, weather: { currently, daily, timezone }, theme } = this.state;
    if (!weather) return <Loading />;
    return (
      <div className="container">
        <div className={`weather weather_${theme}`}>
          <React.Suspense fallback={<Loading />}>
            <label htmlFor="theme" className="theme-toggle" onChange={this.themeChange}>
              <input id="theme" type="checkbox" className="theme-toggle__checkbox" />
              <span className="theme-toggle__label">Light</span>
              <div className="theme-toggle__slider" />
              <span className="theme-toggle__label">Dark</span>
            </label>
            <WeatherDisplay theme={theme} weather={currently} city={timezone} />
            <WeatherInfo weather={currently} />
            <div className="clear" />
            <WeatherPredict theme={theme} predict={daily} />
          </React.Suspense>
        </div>
      </div>
    );
  }
}

export default App;
