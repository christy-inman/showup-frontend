import React, {Component} from 'react';
import Header from './containers/Header';
// import Footer from './containers/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AllProtests from './components/AllProtests';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import NewProtest from './components/NewProtest';
import Login from './components/Login'
import Signup from './components/Signup'
import './App.css';

const protestsURL = 'http://localhost:3000'


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

  addNewUser = (user) => {
    console.log(user)
    fetch((protestsURL + '/signup'), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
      .then(response => {console.log(response.json())})
  }

  login = (user) => {
    fetch((protestsURL + '/login'), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  logout = (user) => {
    fetch((protestsURL + '/logout'), {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(res => console.log(res))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <body className='body'>
        <Router>
          <Header />
            <main id='main'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/new/' render={props => {
                    return <NewProtest 
                                addNewProtest={this.addNewProtest}
                                addNewUser={this.addNewUser}
                            />
                }} />
                <Route path='/protests/' render={props => {
                    return <AllProtests 
                                protests={this.state.protests}
                            />
                }} />
                <Route path='/about/' component={About} />
                <Route path='/contact/' component={Contact} />
                <Route path='/login/' render={props => {
                    return <Login 
                              login={this.login}
                              logout={this.logout}
                            />
                }} />
                <Route path='/signup/' render={props => {
                    return <Signup
                              signup={this.addNewUser}
                            />
                }} />

              </Switch>
            </main>
          {/* <Footer /> */}
        </Router>
      </body>
  )}
}