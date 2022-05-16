import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PaginaPrincipal from '../pages/PaginaPrincipal';
import MetodologiasTrabajo from '../pages/MetodologiasTrabajo';
import Html from '../pages/Html';
import Css from '../pages/Css';
import JavaScriptNode from '../pages/JavaScriptNode';
import Mysql from '../pages/Mysql';
import Testing from '../pages/Testing';
import Pop from '../pages/Pop';
import DesignThinking from '../pages/DesignThinking';
import ReactJs from '../pages/ReactJs';
import FrontEndII from '../pages/FrontEndII';
import InfraestructuraI from '../pages/InfraestructuraI';
import Linux from '../pages/Linux';
import PowerShell from '../pages/PowerShell';
import GitHub from '../pages/GitHub';
import Python from '../pages/Python';
import Docker from '../pages/Docker';
import AWS from '../pages/AWS';
import Vagrant from '../pages/Vagrant';
import DiseñoUXUI from '../pages/DiseñoUXUI';
import BackEnd from '../pages/BackEnd';
import JUnit from '../pages/JUnit';
import Layout from './Layout';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + '/'}>
      <Layout>
        <Switch>
            <Route exact path="/" component={PaginaPrincipal} />
            <Route exact path="/glosariodeterminos/" component={PaginaPrincipal} />
            <Route exact path="/MetodologiasTrabajo" component={MetodologiasTrabajo} />
            <Route exact path="/Html" component={Html} />
            <Route exact path="/Css" component={Css} />
            <Route exact path="/JavaScriptNode" component={JavaScriptNode} />
            <Route exact path="/Mysql" component={Mysql} />
            <Route exact path="/Testing" component={Testing} />
            <Route exact path="/Pop" component={Pop} />
            <Route exact path="/DesignThinking" component={DesignThinking} />
            <Route exact path="/ReactJs" component={ReactJs} />
            <Route exact path="/FrontEndII" component={FrontEndII} />
            <Route exact path="/InfraestructuraI" component={InfraestructuraI} />
            <Route exact path="/Linux" component={Linux} />
            <Route exact path="/PowerShell" component={PowerShell} />
            <Route exact path="/GitHub" component={GitHub} />
            <Route exact path="/Python" component={Python} />
            <Route exact path="/Docker" component={Docker} />
            <Route exact path="/aws" component={AWS} />
            <Route exact path="/Vagrant" component={Vagrant} />
            <Route exact path="/DiseñoUXUI" component={DiseñoUXUI} />
            <Route exact path="/BackEnd" component={BackEnd} />
            <Route exact path="/JUnit" component={JUnit} />
            <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;