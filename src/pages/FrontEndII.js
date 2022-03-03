import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/FrontEndII.json';



function FrontEndII() {


  return (
    <div>
      <ListItem nombre="Front-End II" data={data}/>
    </div>
  )


}



export default FrontEndII;
