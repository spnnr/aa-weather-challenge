import React from "react";

interface CityButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    name: string;
    currentCity: string;
};

export function CityButton(props: CityButtonProps) {
    const {name, currentCity, onClick} = props;
    const active = currentCity.toLowerCase() === name.toLowerCase();
        
    return (
        <button type="button" className={`btn ${active ? 'btn--active' : '' }`} onClick={onClick}>
            {name}
        </button>
    );
}