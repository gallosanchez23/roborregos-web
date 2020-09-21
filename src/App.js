// @flow

import React, { Component } from 'react'
import { loadCSS } from 'fg-loadcss/src/loadCSS'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Members from './components/Members/Members'
import Contact from './components/Contact/Contact'
import Candidates from './components/Candidates/Candidates'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import routesData from './data/routes.json'
import membersData from './data/members.json'

type Props = {};

class App extends Component<Props> {
  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    )
  }

  render() {
    document.title = 'RoBorregos'

    return (
      <Router>
        <div className="app-container">
          <NavBar routes={routesData.routes} />

          <Route exact path="/" component={() => <Home />} />

          <Route path="/about" component={() => <About />} />

          <Route
            path="/members"
            component={() => <Members membersData={membersData} />}
          />

          <Route path="/contact" component={() => <Contact />} />

          <Route path="/candidates" component={() => <Candidates />} />
        </div>
      </Router>
    )
  }
}

export default App
