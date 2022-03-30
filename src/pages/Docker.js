import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/Docker.json';



function Docker() {


  return (
    <div>
      <ListItem nombre="Docker" data={data}/>
    </div>
  )


}



export default Docker;
