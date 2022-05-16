import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/JUnit.json';



function JUnit() {


  return (
    <div>
      <ListItem nombre="JUnit" data={data}/>
    </div>
  )


}



export default JUnit;
