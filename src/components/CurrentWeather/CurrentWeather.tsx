import React from 'react';
import { IconName, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CurrentWeatherForecast } from '../../api';
import { WEATHERCODE_ICON_MAPPING, WEATHERCODE_MAPPING } from '../../constants';

type CurrentWeatherProps = {
    data: CurrentWeatherForecast;
};

export class CurrentWeather extends React.Component<CurrentWeatherProps> {
    render() {
        const { data } = this.props;
        const {temperature, weathercode} = data || {};
        library.add(fas);
        
        return (
        <div className="current-weather">
            Today
            <div className="conditions">
                <span>
                    <FontAwesomeIcon
                        icon={["fas", `${WEATHERCODE_ICON_MAPPING[weathercode]}` as IconName]}
                        size="3x"
                    />
                </span>
                <div className="conditions__data">
                    <div className="conditions__temperature">{`${Math.ceil(temperature)}\u00b0`}</div>
                    <div>{WEATHERCODE_MAPPING[weathercode]}</div>
                </div>
            </div>
        </div>);
    }
}