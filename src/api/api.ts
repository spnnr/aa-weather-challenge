import { CITIES, WEATHERCODE_MAPPING } from '../constants';

export interface CurrentWeatherForecast {
    temperature: number;
    weathercode: keyof typeof WEATHERCODE_MAPPING;
}

export interface WeatherForecast {
    current_weather: CurrentWeatherForecast;
    daily: {
        temperature_2m_max: number[];
        weathercode: (keyof typeof WEATHERCODE_MAPPING)[];
        time: string[];
    };
}

export async function getWeatherFromAPI(city: string): Promise<WeatherForecast | null> {
    const cityObject = CITIES.find(el => el.name === city);
    let response: WeatherForecast | null = null;
    if (cityObject) {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${cityObject?.lat}&longitude=${cityObject?.lon}&daily=temperature_2m_max,weathercode&current_weather=true&timezone=America%2FLos_Angeles`;
        try {
            response = await (await fetch(url)).json();
        } catch (e) {
            console.error(e);
        }
    }
    return response;
}