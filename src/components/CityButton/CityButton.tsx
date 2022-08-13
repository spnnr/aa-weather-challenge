import React from "react";

interface CityButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    name: string;
    currentCity: string;
};

export class CityButton extends React.Component<CityButtonProps> {
    render() {
        const {name, currentCity, onClick} = this.props;
        const active = currentCity.toLowerCase() === name.toLowerCase();
        return (
            <button type="button" className={`btn ${active ? 'btn--active' : '' }`} onClick={onClick}>
                {name}
            </button>
        );
    }
}