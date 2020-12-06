import React from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Find from './views/find'
import Library from './views/library'
import Share from './views/share'
import Home from './views/home'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/find" component={Find} />
        <Route exact path="/share" component={Share} />
        <Route exact path="/library" component={Library} />
      </Router>
    );
  }
}

export default App;
