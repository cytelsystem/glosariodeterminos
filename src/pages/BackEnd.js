import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/BackEnd.json';



function BackEnd() {


  return (
    <div>
      <ListItem nombre="Back-End" data={data}/>
    </div>
  )


}



export default BackEnd;
