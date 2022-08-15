import React from 'react';
import { CityButton } from '../CityButton';

type CityControlProps = {
    cities: string[];
    activeCity: string;
    handleCityClick: (e: React.MouseEvent) => void;
}

export class CityControl extends React.Component<CityControlProps> {
    render() {
        const { cities, activeCity, handleCityClick } = this.props;
        const citiesList = cities.map((city: string) =>
            <CityButton
                key={city}
                name={city}
                onClick={handleCityClick}
                currentCity={activeCity}
            />
        );
        return (
            <header className="cities">
                {citiesList}
            </header>
        );
    }
}