import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Principal from '../pages/Principal';
import JavaScriptNode from '../pages/JavaScriptNode';
import Mysql from '../pages/Mysql';



function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/JavaScriptNode" component={JavaScriptNode} />
          <Route exact path="/Mysql" component={Mysql} />
          <Route exact path="/" component={Principal} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;