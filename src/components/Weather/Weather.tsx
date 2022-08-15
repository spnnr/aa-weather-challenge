import React from "react";
import { NUMBER_OF_DAYS_TO_SHOW } from '../../constants';
import { getWeatherFromAPI, WeatherForecast } from "../../api";
import { WeatherCard } from "../WeatherCard";
import { CurrentWeather } from "../CurrentWeather";

type WeatherProps = {
    city: string;
}
type WeatherState = {
    forecast: WeatherForecast | null;
}

export class Weather extends React.Component<WeatherProps, WeatherState> {
    constructor(props: WeatherProps) {
        super(props);
        this.state = {
            forecast: null,
        };
    }
    
    async componentDidMount() {
        const forecast = await getWeatherFromAPI(this.props.city);
        if (forecast) this.setState({ forecast });
    }

    async componentDidUpdate(prevProps: WeatherProps) {
        if (this.props.city !== prevProps.city) {
            const forecast = await getWeatherFromAPI(this.props.city);
            this.setState({ forecast });
        }
    }

    getDayOfWeek(date: string) {
        const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        const day = new Date(date).getDay();
        return days[day];
    }

    render() {
        const { forecast } = this.state;
        let forecastCards: React.ReactNode = [];
        if (forecast) {
            const dailyTemp = forecast.daily.temperature_2m_max.slice(1, NUMBER_OF_DAYS_TO_SHOW);
            const dailyConditions = forecast.daily.weathercode.slice(1, NUMBER_OF_DAYS_TO_SHOW);
            const dates = forecast.daily.time.slice(1, NUMBER_OF_DAYS_TO_SHOW);
            forecastCards = dates.map((date, index) => {
                const dayOfWeek = this.getDayOfWeek(date);
                return <WeatherCard
                    key={date}
                    day={dayOfWeek}
                    weathercode={dailyConditions[index]}
                    temperature={dailyTemp[index]}
                />;
            });
        }
        
        return (
            <main className={`weather ${!forecast ? 'weather--not-available' : ''}`}>
                {forecast &&
                    <>
                        <CurrentWeather data={forecast.current_weather} />
                        <div className="daily-weather">
                            {forecastCards}
                        </div>
                    </>
                }
                {!forecast &&
                    <div className="weather__na">Forecast data not available</div>
                }
            </main>
        );
    }
}

