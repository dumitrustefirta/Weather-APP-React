import React, { useState, useEffect } from 'react';
import { cities } from '../Data/citiesList';
import { getWeatherByCity } from '../services';

export function CityWeatherInfo(props) {

    const [data, setData] = useState(null);

    useEffect(() => {
        getWeatherByCity(cities[props.selectedCity].name).then(data => setData(data))

    }, [props.selectedCity])

    if (!props.selectedCity) return null
    if (data) {
        const { name, main } = data;
        return (
            <div className="container">
                <div className="location">
                    <p>-</p>
                    <hr />
                </div>
                <div className="weather-container">
                    <div className="weather-icon">
                        {props.selectedCity ? (
                            <img src={`images/${data.weather[0].icon}.png`} alt='Weather Icon' />
                        ) : (
                                <img src="images/unknown.png" alt="icon" />
                            )}
                    </div>
                    <div className="temperature-value">
                        {name}: {main.temp} <span>&#x2103;</span>
                    </div>
                    <div className="temperature-description">
                        <em><p> - </p></em>
                    </div>
                    <div className="humidity"></div>
                    <div className="pressure"></div>
                    <div className="wind-speed"></div>

                </div>
            </div>
        )
    }
    return null
}