import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type WeatherTodayProps = {
    data: {};
};

export class WeatherToday extends React.Component<WeatherTodayProps> {
    render() {
        const { data } = this.props;
        library.add(fas);
        return (
        <div className="weather-today">
            Today
            <div className="conditions">
                <span><FontAwesomeIcon icon={["fas", "cloud"]} size="3x" /></span>
                <div className="conditions__data">
                    <div className="conditions__temperature">25&#176;</div>
                    <div>Clouds</div>
                </div>
            </div>
        </div>);
    }
}