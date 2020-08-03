import React from 'react';
import { ForecastCity } from '../Components/ForecastCity';
import { cities } from '../Data/citiesList'

export function Forecast(props) {

    return (
        <main className="main-forecast">
            <div className="city-name">{props.selectedCity}</div>
            <div className="forecast-box">
                <ForecastCity cityName={cities[props.selectedCity].name}/>
            </div>
        </main>
    )
}