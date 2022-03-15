import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/GitHub.json';



function GitHub() {


  return (
    <div>
      <ListItem nombre="Git y GitHub" data={data}/>
    </div>
  )


}



export default GitHub;
