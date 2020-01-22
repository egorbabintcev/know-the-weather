import React, { Component, lazy, Suspense } from 'react';
import Loading from './Loading.jsx';
const WeatherDisplay = lazy(() => import('./WeatherDisplay.jsx'));
const WeatherInfo = lazy(() => import('./WeatherInfo.jsx'));
const WeatherPredict = lazy(() => import('./WeatherPredict.jsx'));

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.fetchWeather = this.fetchWeather.bind(this);
    }

    componentDidMount() {
        this.fetchWeather();
    }

    fetchWeather() {
        const proxy = "https://cors-anywhere.herokuapp.com/";
    
        window.navigator.geolocation.getCurrentPosition(loc => {
            const apiKey = '45ebfa2ec98ccdf3e369c1c976bf5327';
            const lat = loc.coords.latitude;
            const lon = loc.coords.longitude;
            const darksky = `https://api.darksky.net/forecast/${apiKey}/${lat},${lon}?units=ca&exclude=minutely,hourly,alerts,flags`;
            fetch(proxy + darksky)
                .then(resp => resp)
                .then(data => { setTimeout(() => {
                    data.json()
                        .then(json => { this.setState({ weather: json }) })
                }, 250) })
        })        
    }

    render() {
        if (!this.state.weather) return <Loading />;   
        return (
            <div className="container">
                <div className="weather">
                    <Suspense fallback={<Loading />}>                        
                        <WeatherDisplay weather={this.state.weather.currently} city={this.state.weather.timezone} />
                        <WeatherInfo weather={this.state.weather.currently} />
                        <div className="clear"></div>          
                        <WeatherPredict predict={this.state.weather.daily} />
                    </Suspense>
                </div>
            </div>
        );
    }
}

export default App;
