import React, {Component} from 'react';
import Header from './containers/Header';
import Footer from './containers/Footer';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import AllProtests from './components/AllProtests';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import NewProtest from './components/NewProtest';
import './App.css';

const protestsURL = 'http://localhost:3000/'


export default class App extends Component {
  state = {
    protests: []
  }

  getProtests = () => {
      fetch(protestsURL)
          .then(response => response.json())
          .then(response => this.setState({
              protests: response
          }))
          .catch(error => console.log(error))
  }

  componentDidMount() {
      this.getProtests()
  }

  addNewProtest = (newProtest) => {
      console.log(newProtest)
      fetch(protestsURL, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newProtest)
      })
          .then(response => {console.log(response.json())})
          .then(this.getProtests)
          .catch(error => console.log(error))
  }

  render() {
    return (
      <>
        <Router>
          <Header />
            <main id='main'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/new/' render={props => {
                    return <NewProtest 
                                addNewProtest={this.addNewProtest}
                            />
                }} />
                <Route path='/protests/' render={props => {
                    return <AllProtests 
                                protests={this.state.protests}
                            />
                }} />
                <Route path='/about/' component={About} />
                <Route path='/contact/' component={Contact} />
              </Switch>
            </main>
          <Footer />
        </Router>
      </>
  )}
}