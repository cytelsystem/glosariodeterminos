import React from 'react';
import { Link } from 'react-router-dom';

import './styles/header.scss';




class Header extends React.Component {
  render() {
    return (
      <div className="header container-fluid sticky-top ">

        <div class="btn-group btn-group-justified">
          <Link to="Mysql" className="btn btn-primary">Mysql</Link>
          <Link to="JavaScriptNode" className="btn btn-primary">JavaScript Node</Link>
         </div>

        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default Header;
