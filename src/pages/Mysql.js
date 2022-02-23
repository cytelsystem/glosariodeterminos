import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/Mysql.json';
import './styles/styleDatos.scss';
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'



class Mysql extends React.Component {

  render() {
    return (

      <div>
      <h1>prueba mysql</h1>
      <a href="./src/prueba.txt">prueba archivo</a>
      </div>

    )
  }
}




export default Mysql;
