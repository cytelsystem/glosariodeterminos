import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/PowerShell.json';



function PowerShell() {


  return (
    <div>
      <ListItem nombre="PowerShell" data={data}/>
    </div>
  )


}



export default PowerShell;
