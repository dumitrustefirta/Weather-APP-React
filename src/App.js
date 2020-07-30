import React, { Component } from 'react';
import './App.css';
import { Header, Footer} from './Components';
import { Home, Forecast, CitiesList, About} from './Pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
     selectedCity: localStorage.getItem('selectedCity') || ''
    }

  }
  getSelectedCity = (city) => {
    this.setState({selectedCity: city}, () => {localStorage.setItem('selectedCity', this.state.selectedCity)})
  }
  render() {
    return (
      <Router>
        <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home selectedCity={this.state.selectedCity} getSelectedCity={this.getSelectedCity}/>
          </Route>
          <Route path="/forecast">
            <Forecast selectedCity={this.state.selectedCity}/>
          </Route>
          <Route path="/list">
            <CitiesList selectedCity={this.state.selectedCity} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
