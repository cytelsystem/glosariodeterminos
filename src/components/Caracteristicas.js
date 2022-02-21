import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'


function Caracteristicas () {
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Home">
          <a href="./Ejemplos/SELECTDATABASE.jpg" target="_black">Ejemplo1</a>
          <a href="./Ejemplos/SELECTDATABASE.txt" target="_black">Ejemplo2</a>

          </Tab>
          <Tab eventKey="profile" title="Profile">

          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>

          </Tab>
        </Tabs>
  )
}

export default Caracteristicas;