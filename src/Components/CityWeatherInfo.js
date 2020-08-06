import React, { useState, useEffect } from 'react';
import { cities } from '../Data/citiesList';
import { getWeatherByCity } from '../services';

export function CityWeatherInfo(props) {

    const [data, setData] = useState(null);

    useEffect(() => {
        if (!props.selectedCity || !cities[props.selectedCity]) return
        getWeatherByCity(cities[props.selectedCity].name).then(data => setData(data))

    }, [props.selectedCity])

    if (!props.selectedCity) return null
    if (data) {
        const { name, main } = data;
        return (
            <div className="container">
                <div className="location">
                    {name}, {data.sys.country}
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
                        {Math.floor(main.temp)} <span>&#x2103;</span>
                    </div>
                    <div className="temperature-description">
                        <em>{data.weather[0].description}</em>
                    </div>
                    <div className="humidity">{`Humidity: ${data.main.humidity} %`}</div>
                    <div className="pressure">{`Pressure: ${data.main.pressure} hPa`}</div>
                    <div className="wind-speed">{`Wind speed: ${Math.floor(data.wind.speed)} m/s`}</div>
                </div>
            </div>
        )
    }
    return null
}