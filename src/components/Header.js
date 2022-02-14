import React from 'react';
import { Link } from 'react-router-dom';
import data from '../db.json';
import './styles/header.scss';

class Header extends React.Component {

  render() {
    return (
      <div className="header container-fluid sticky-top ">

        <div className="container">
          <ul className="row">
              {data.results.map(detalle =>(
                <li className="col-2 col-md-4" key={detalle.id}>
                    <div className="CharacterCard">
                        <div className="CharacterCard__name-container text-truncate">
                          <Link to={detalle.Url} className="btn btn-primary">{detalle.name}</Link>
                        </div>
                    </div>
                </li>
              ))}
          </ul>
      </div>

        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default Header;
