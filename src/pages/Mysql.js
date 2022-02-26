import React from 'react';
import data from '../data/Mysql.json';
import './styles/styleDatos.scss';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'


function Mysql() {


  return (

<React.Fragment>

      <h1>Mysql</h1>
      <div className="container-fluid styledatos">
                    <ul className="row list-unstyled">
                    {data.results.map(detalle =>(

                      <li  key={detalle.id}>

                          <Accordion >
                            <Accordion.Item eventKey="0">
                              <Accordion.Header><Row>
                                <Col xs={4} className="col1">
                                  <h4>{detalle.name}</h4>
                                </Col>

                                <Col xs={8} className="col2">
                                  <p>{detalle.detalle}</p>
                                </Col>
                              </Row></Accordion.Header>
                              <Accordion.Body>

                             <a href={require(`../Ejemplos/${detalle.ejemplo1}`)}>Ejemplo1</a>
                             <a href={require(`../Ejemplos/${detalle.ejemplo2}`)}>Ejemplo2</a>
                               <Button variant="primary" size="lg">
                                Block level button
                              </Button>



                             </Accordion.Body>
                            </Accordion.Item>

                          </Accordion>
                      </li>

                    ))}
                  </ul>

      </div>
     </React.Fragment>


  )


}



export default Mysql;
