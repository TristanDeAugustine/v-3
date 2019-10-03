import React, { Component } from 'react'
import Journal from './components/Journal.jsx'
import Tasks from './components/Tasks.jsx'
import Calendar from './components/Calendar.jsx'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Cal from './images/Calendar.jpg'
import Jour from './images/Journal.jpg'
import Tas from './images/List.jpg'
import Homepage from './components/Homepage.jsx'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Journal" component={Journal} />
          <Route exact path="/Tasks" component={Tasks} />
          <Route exact path="/Calendar" component={Calendar} />
        </Switch>
      </Router>
    )
  }
}

export default App
