import React from 'react';
import './styles/listItem.scss'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'



function ListItem(props) {

  const data = props.data;


  return (

    <React.Fragment>
      <div className="container-fluid listItem">
                    <h1>{props.nombre}</h1>
                    <ul className="row list-unstyled">
                    {data.results.map(detalle =>(

                      <li  key={detalle.id}>

                          <Accordion >
                            <Accordion.Item eventKey="0" className="listItem-Item">
                              <Accordion.Header>
                                <Row>
                                  <Col xs={4} sm={4} md={2} lg={2}  className="col1">
                                    <h4>{detalle.name}</h4>
                                  </Col>

                                  <Col xs={8} sm={8} md={10} lg={10}  className="col2">
                                    <p>{detalle.detalle}</p>
                                  </Col>
                                </Row>
                              </Accordion.Header>
                              <Accordion.Body>
                                <a href={require(`../Ejemplos/${detalle.ejemplo1}`)} target="_blank">Ejemplo1</a>
                                <a href={require(`../Ejemplos/${detalle.ejemplo2}`)} target="_blank">Ejemplo2</a>
                                <a href={require(`../Ejemplos/${detalle.ejemplo3}`)} target="_blank">Ejemplo3</a>

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



export default ListItem;