import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import AllProtests from '../components/AllProtests';
import Home from '../components/Home';
import Contact from '../components/Contact';
import About from '../components/About';
import NewProtest from '../components/NewProtest';
import './Main.css'

export default class Main extends Component {
    render() {
        return(
        <Router>
            <main id='main'>
                <h1>Main</h1>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/new/' component={NewProtest} />
                    <Route path='/protests/' component={AllProtests} />
                    <Route path='/about/' component={About} />
                    <Route path='/contact/' component={Contact} />
                </Switch>
            </main>
        </Router>
        )
    }
}