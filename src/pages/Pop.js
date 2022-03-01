import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/Pop.json';



function Pop() {


  return (
    <div>
      <ListItem nombre="Pop Programacion Orientada Objetos" data={data}/>
    </div>
  )


}



export default Pop;
