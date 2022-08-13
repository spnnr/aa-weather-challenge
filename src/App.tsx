import React from "react";
import { CityButton, WeatherToday, WeatherOtherDay } from './components';

type AppState = {
  cities: string[];
  currentCity: string;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cities: ['ottawa', 'toronto', 'vancouver'],
      currentCity: 'ottawa',
    }
    this.handleCityClick = this.handleCityClick.bind(this);
  }

  handleCityClick(e: React.MouseEvent) {
    const button = e.target as HTMLButtonElement;
    this.setState({currentCity: button.innerText.toLowerCase()});
  }

  render() {
    const citiesList = this.state.cities.map((city: string) =>
      <CityButton
        key={city}
        name={city}
        onClick={this.handleCityClick}
        currentCity={this.state.currentCity}
      />
    );
    return (
      <div className="app">
        <header className="cities">
          {citiesList}
        </header>
        <main className="weather">
          <WeatherToday data={{}} />
          <div className="weather-future">
            <WeatherOtherDay day="Wed" data={{}} />
            <WeatherOtherDay day="Thu" data={{}} />
            <WeatherOtherDay day="Fri" data={{}} />
            <WeatherOtherDay day="Sat" data={{}} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
