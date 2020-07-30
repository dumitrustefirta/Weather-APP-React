import React, { Component } from 'react';
import { cities } from '../Data/citiesList';
import { getWeatherByCity } from '../services';

export class CityWeatherInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            selectedCity: ''
        }
    }
    componentDidMount() {
        if (this.props.selectedCity) {
            this.setState({ selectedCity: this.props.selectedCity });
            getWeatherByCity(cities[this.props.selectedCity].name).then(data => this.setState({ data }))
        }
    }

    componentDidUpdate() {
        if (this.props.selectedCity && this.state.selectedCity !== this.props.selectedCity) {
            this.setState({ selectedCity: this.props.selectedCity });
            getWeatherByCity(cities[this.props.selectedCity].name).then(data => this.setState({ data }))
        }
    }

    render() {
        if (!this.props.selectedCity) return null
        if (this.state.data) {
            const { name, main } = this.state.data;
            return (
                <div className="container">
                    <div className="location">
                        <p>-</p>
                        <hr />
                    </div>
                    <div className="weather-container">
                        <div className="weather-icon">
                            {this.props.selectedCity ? (
                                <img src={`images/${this.state.data.weather[0].icon}.png`} alt='Weather Icon' />
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
}