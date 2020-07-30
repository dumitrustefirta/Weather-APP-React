import React from 'react';
import { Main } from '../Components/Main';

export function Home(props) {
    return (
        <Main selectedCity={props.selectedCity} getSelectedCity={props.getSelectedCity}/>
    )
}