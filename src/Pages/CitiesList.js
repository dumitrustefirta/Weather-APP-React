import React from 'react';
import { cities } from '../Data/citiesList';
import { CityRow } from '../Components/CityRow'


export function CitiesList(props) {

    const citiesKeys = Object.keys(cities);

    const getFilteredCities = () => {
        return citiesKeys.filter(city => {
            if (city !== props.selectedCity) {
                return city
            }
        })
    }

    return (
        <main className="main__list">
            <div className="cities-list">
                {getFilteredCities().map(city => {
                    return (<CityRow key={city} cityName={cities[city].name} />)
                })}
            </div>
        </main>
    )
}