import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/AWS.json';



function AWS() {


  return (
    <div>
      <ListItem nombre="AWS" data={data}/>
    </div>
  )


}



export default AWS;
