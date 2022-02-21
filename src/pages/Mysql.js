import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/Mysql.json';
import './styles/styleDatos.scss';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Caracteristicas from '../components/Caracteristicas';

class Mysql extends React.Component {

  render() {
    return (
      <React.Fragment>
      <h1>Mysql</h1>
      <div className="container-fluid styledatos">
                    <ul className="row list-unstyled">
                    {data.results.map(detalle =>(
                      <li  key={detalle.id}>
                          <Link to={detalle.Url} className="btn btn-secondary">
                          
                              <Row>
                                <Col xs={4} className="col1">
                                  <h4>{detalle.name}</h4>
                                </Col>

                                <Col xs={8} className="col2">
                                  <p>{detalle.detalle}</p>
                                </Col>
                              </Row>


                          </Link>
                      </li>




                    ))}
                  </ul>



      </div>
     </React.Fragment>
    )
  }
}

export default Mysql;
