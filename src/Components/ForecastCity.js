import React, { useState, useEffect } from 'react';
import { getforecastCity } from '../services';

export function ForecastCity(props) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getforecastCity(props.cityName).then((data) => {
            return data.list.reduce((list, item) => {
                const dateKeys = new Date(item.dt_txt).getDate();
                if (!list[dateKeys]) {
                    list[dateKeys] = [];
                }
                list[dateKeys].push(item);
                return list;
            }, {})
        }).then(result => {
            setData(result)
            setIsLoading(false)
        })
    }, [props.cityName])

    if (isLoading) {
        return (<p>Loading...</p>)
    }
    if (data) {
        console.log(data)
        return (
            <div className='forecast-box__daily'>
                <span>
                    {props.cityName}
                    {/* {data.main.weather[0].description} */}
                </span>
                {/* <span>{data.main.temp}&#x2103;</span> */}
                {/* <span>{data.weather[0].description}</span> */}
            </div>
        )
    }
    return (<p>Sorry could not get data, please refresh page</p>)

}