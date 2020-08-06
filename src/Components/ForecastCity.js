import React, { useState, useEffect } from 'react';
import { getforecastCity } from '../services';

export function ForecastCity(props) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // if (!props.selectedCity || !cities[props.selectedCity]) return
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
            console.log(result)
            setData(result);
            setIsLoading(false);
        })
    }, [props.cityName])


    if (isLoading) {
        return (<p>Loading...</p>);
    }
    if (data) {
        for(let day in data){
            console.log(data[day])
            data[day].map(item => {
                const fixedTime = new Date(item.dt_txt).getHours();
                if(fixedTime === 12) {
                    return (
                        <div className='forecast-box__daily'>
                                {item.main.temp}
                        </div>
                    )

                }

            })
        }
    }
    return (<p>Sorry could not get data, please refresh page</p>)

}