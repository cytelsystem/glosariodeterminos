import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/Linux.json';



function Linux() {


  return (
    <div>
      <ListItem nombre="Linux" data={data}/>
    </div>
  )


}



export default Linux;
