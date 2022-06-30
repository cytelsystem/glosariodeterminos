import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/MongoDB.json';



function MongoDB() {


  return (
    <div>
      <ListItem nombre="MongoDB" data={data}/>
    </div>
  )


}



export default MongoDB;
