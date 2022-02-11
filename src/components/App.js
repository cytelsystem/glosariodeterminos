import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import JavaScriptNode from '../pages/JavaScriptNode';
import Mysql from '../pages/Mysql';


function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/JavaScriptNode" component={JavaScriptNode} />
          <Route exact path="/Mysql" component={Mysql} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;