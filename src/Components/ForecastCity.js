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
            setData(result);
            setIsLoading(false);
        })
    }, [props.cityName])


    if (isLoading) {
        return (<p>Loading...</p>);
    }
    if (data) {
        for (let day in data) {
            return (
                data[day].map((item, index) => {
                    const fixedTime = new Date(item.dt_txt).getHours();
                    if(fixedTime) return (
                        <div className='forecast-box__daily' key={index}>{
                            <span>{Math.floor(item.main.temp)}</span>
                        }</div>
                    )
                })
            )
        }
    }
    return (<p>Sorry could not get data, please refresh page</p>)
}