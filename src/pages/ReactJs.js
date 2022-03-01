import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/ReactJs.json';



function ReactJs() {


  return (
    <div>
      <ListItem nombre="ReactJs" data={data}/>
    </div>
  )


}



export default ReactJs;
