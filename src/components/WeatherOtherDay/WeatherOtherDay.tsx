import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type WeatherOtherDayProps = {
    day: string;
    data: {};
}

export class WeatherOtherDay extends React.Component<WeatherOtherDayProps> {
    render() {
        const { day, data } = this.props;
        return (
            <div className="day">
                {day}
                <div className="conditions__icon"><FontAwesomeIcon icon={["fas", "cloud"]} size="2x" /></div>
                <div className="conditions__temperature conditions__temperature--small">23&#176;</div>
            </div>
        );
    }
}