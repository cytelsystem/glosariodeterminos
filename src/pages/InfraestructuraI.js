import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/InfraestructuraI.json';



function InfraestructuraI() {


  return (
    <div>
      <ListItem nombre="Infraestructura I" data={data}/>
    </div>
  )


}



export default InfraestructuraI;
