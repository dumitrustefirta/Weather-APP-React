import React, { useState, useEffect } from 'react';
import { getWeatherByCity } from '../services';

export function CityRow(props) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getWeatherByCity(props.cityName).then((data) => {
            setData(data);
            setIsLoading(false)
        })
            .catch(err => setIsLoading(false));

    }, [props.cityName])


    if (isLoading) {
        return (<p>Loading...</p>)
    }
    if (data) {
        return (
            <div className='cities-list__info'>
                {props.cityName}
                <span className='temp'>
                    <img src={`images/${data.weather[0].icon}.png`} alt='Weather Icon' />
                    {Math.floor(data.main.temp)}&#x2103;</span>
                <span className='second-info'>
                    {`Humidity: ${data.main.humidity}%, `}
                    {/* {`Pressure: ${data.main.pressure} hPa; `} */}
                    {data.weather[0].description}
                    </span>
            </div>
        )

    }
    return (<p>Sorry could not get data, please refresh page</p>)
}


