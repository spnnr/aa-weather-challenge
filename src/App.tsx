import React from "react";
import { CityControl, Weather } from './components';
import { CITIES } from './constants';

type AppState = {
    cities: string[];
    currentCity: string;
}

class App extends React.Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        const cities = CITIES.map(city => city.name);
        const currentCity = CITIES[0].name || 'Add a city';
        this.state = {
        cities,
        currentCity,
        }
        this.handleCityClick = this.handleCityClick.bind(this);
    }

    handleCityClick(e: React.MouseEvent) {
        const button = e.target as HTMLButtonElement;
        this.setState({currentCity: button.innerText.toLowerCase()});
    }

    render() {
        return (
            <div className="app">
                <CityControl
                activeCity={this.state.currentCity}
                cities={this.state.cities}
                handleCityClick={this.handleCityClick}
                />
                <Weather city={this.state.currentCity} />
            </div>
        );
    }
}

export default App;
