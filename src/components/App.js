import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Principal from '../pages/Principal';
import JavaScriptNode from '../pages/JavaScriptNode';
import Mysql from '../pages/Mysql';



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
      <Switch>
          <Route exact path="/" component={Mysql} />
          <Route exact path="/JavaScriptNode" component={JavaScriptNode} />
          <Route exact path="/Mysql" component={Mysql} />
      </Switch>
    </Router>
  );
}

export default App;