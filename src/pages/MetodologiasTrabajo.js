import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/MetodologiasTrabajo.json';



function MetodologiasTrabajo() {


  return (
    <div>
      <ListItem nombre="Metodologias de Trabajo" data={data}/>
    </div>
  )


}



export default MetodologiasTrabajo;
