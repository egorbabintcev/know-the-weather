import React, { Component, lazy, Suspense } from 'react';
import Loading from './Loading.jsx';
const WeatherDisplay = lazy(() => import('./WeatherDisplay.jsx'));
const WeatherInfo = lazy(() => import('./WeatherInfo.jsx'));

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        getWeather('45ebfa2ec98ccdf3e369c1c976bf5327')
            .then(weather => {
                this.setState({ weather });
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
                    </Suspense>
                </div>
            </div>
        );
    }
}

function getWeather(apiKey) {    ;    
    const proxy = "https://cors-anywhere.herokuapp.com/"
    
    return new Promise((resolve, reject) => {
        window.navigator.geolocation.getCurrentPosition(loc => {
            const lat = loc.coords.latitude;
            const lon = loc.coords.longitude;
            const darksky = `https://api.darksky.net/forecast/${apiKey}/${lat},${lon}?units=ca&exclude=minutely,hourly,alerts,flags`;
            fetch(proxy + darksky)
                .then(resp => resp)
                .then(data => { setTimeout(() => resolve(data.json()), 250) })
        })
    })
}

export default App;
