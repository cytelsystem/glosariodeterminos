import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/Testing.json';



function Testing() {


  return (
    <div>
      <ListItem nombre="Testing" data={data}/>
    </div>
  )


}



export default Testing;
