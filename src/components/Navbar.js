import React from 'react';
import { Link } from 'react-router-dom';
import data from '../db.json';
import './styles/navbar.scss';

class Navbar extends React.Component {

  render() {

    return (

      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top ">

          <div className="container-fluid">
            <ul className="row list-unstyled">
                {data.results.map(detalle =>(
                  <li className="col-4 col-md-6 col-sm-4" key={detalle.id}>
                     <Link to={detalle.Url} className="btn btn-secondary">{detalle.name}</Link>
                  </li>
                ))}
            </ul>
        </div>

      </nav>

    )

  }
}

export default Navbar;
