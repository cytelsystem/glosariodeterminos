import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/Python.json';



function Python() {


  return (
    <div>
      <ListItem nombre="Python" data={data}/>
    </div>
  )


}



export default Python;
