import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/Vagrant.json';



function Vagrant() {


  return (
    <div>
      <ListItem nombre="Vagrant" data={data}/>
    </div>
  )


}



export default Vagrant;
