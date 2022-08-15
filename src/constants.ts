export const CITIES = [
    {name: 'vancouver', lat: 49.25, lon: -123.12},
    {name: 'ottawa', lat: 45.42, lon: -75.69},
    {name: 'new york', lat: 40.71, lon: -74.01}
];

// NOTE: we have to skip first day because it is today,
// and add one more day to show days 1-4
export const NUMBER_OF_DAYS_TO_SHOW = 5;

export const WEATHERCODE_MAPPING = {
    0: "Clear sky",
    1: "Mainly clear",
    2: "Partly cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing rime fog",
    51: "Light drizzle",
    53: "Moderate drizzle",
    55: "Dense drizzle",
    56: "Light freezing drizzle",
    57: "Dense freezing drizzle",
    61: "Light rain",
    63: "Moderate rain",
    65: "Heavy rain",
    66: "Freezing rain",
    67: "Heavy freezing rain",
    71: "Light snow",
    73: "Moderate snow",
    75: "Heavy snow",
    77: "Snow grains",
    80: "Light rain showers",
    81: "Moderate rain showers",
    82: "Violent rain showers",
    85: "Light snow showers",
    86: "Heavy snow showers",
    95: "Thunderstorm",
    96: "Thunderstorm with slight hail",
    99: "Thunderstorm with heavy hail",
};

export const WEATHERCODE_ICON_MAPPING = {
    0: "sun",
    1: "sun",
    2: "cloud-sun",
    3: "cloud",
    45: "smog",
    48: "smog",
    51: "cloud-sun-rain",
    53: "cloud-sun-rain",
    55: "cloud-sun-rain",
    56: "cloud-rain",
    57: "cloud-rain",
    61: "cloud-rain",
    63: "cloud-rain",
    65: "cloud-rain",
    66: "cloud-rain",
    67: "cloud-rain",
    71: "snowlfake",
    73: "snowlfake",
    75: "snowlfake",
    77: "snowlfake",
    80: "cloud-showers-heavy",
    81: "cloud-showers-heavy",
    82: "cloud-showers-water",
    85: "snowlfake",
    86: "snowflake",
    95: "cloud-bolt",
    96: "cloud-bolt",
    99: "cloud-bolt",
}