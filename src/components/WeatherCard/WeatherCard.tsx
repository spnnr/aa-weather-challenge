import React from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WEATHERCODE_ICON_MAPPING, WEATHERCODE_MAPPING } from "../../constants";

type WeatherDayProps = {
    day: string;
    weathercode: keyof typeof WEATHERCODE_MAPPING;
    temperature: number;
}

export class WeatherCard extends React.Component<WeatherDayProps> {
    render() {
        library.add(fas);
        const { day, weathercode, temperature: temp } = this.props;
        return (
            <div className="weather-card">
                {day}
                <div className="conditions__icon">
                    <FontAwesomeIcon
                        icon={["fas", `${WEATHERCODE_ICON_MAPPING[weathercode]}` as IconName]}
                        size="2x"
                    />
                </div>
                <div className="conditions__temperature conditions__temperature--small">
                    {`${Math.ceil(temp)}\u00b0`}
                </div>
            </div>
        );
    }
}