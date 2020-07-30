import React, { Component } from 'react';
import { getWeatherByCity } from '../services';

export class CityRow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: null,
            isLoading: true
        }
    }

    componentDidMount() {
        this.setState({ selectedCity: this.props.selectedCity })
        getWeatherByCity(this.props.cityName).then((data) => {
            this.setState({
                data,
                isLoading: false
            })
        }).catch(err => this.setState({ isLoading: false }))
    }

    render() {
        if (this.state.isLoading) {
            return (<p>Loading...</p>)
        }
        if (this.state.data) {
            return (
                <div className='cities-list__info'>
                    {this.props.cityName}
                    <span>{this.state.data.main.temp}&#x2103;</span>
                    <span>{this.state.data.weather[0].description}</span>
                </div>
            )

        }
        return (<p>Sorry could not get data, please refresh page</p>)
    }
}

