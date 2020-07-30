import React from 'react';
import { CitySelector } from '../Components/citySelector';
import { cities } from '../Data/citiesList';
import { CityWeatherInfo } from './CityWeatherInfo copy'

export function Main(props) {
    return (
        <main className="main">
            {props.selectedCity && cities[props.selectedCity] ? (
                <img id="image-placeholder" src={cities[props.selectedCity].url} alt={`${cities[props.selectedCity].name} skyline`} />
            ) : (
                    <img id="image-placeholder"
                        src="https://images.unsplash.com/photo-1546614409-810f10108b74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1791&q=80"
                        alt="Crispy City" />
                )}
            <section id="select_city">
                <h2>Select your city</h2>
                <CitySelector selectedCity={props.selectedCity} getSelectedCity={props.getSelectedCity} />
            </section>
            <CityWeatherInfo selectedCity={props.selectedCity}/>
        </main>
    )
}