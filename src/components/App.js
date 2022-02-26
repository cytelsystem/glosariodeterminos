import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import JavaScriptNode from '../pages/JavaScriptNode';
import Mysql from '../pages/Mysql';
import Layout from './Layout';
import NotFound from '../pages/NotFound';



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
      <Layout>
        <Switch>
            <Route exact path="/" component={Mysql} />
            <Route exact path="/JavaScriptNode" component={JavaScriptNode} />
            <Route exact path="/Mysql" component={Mysql} />
            <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;