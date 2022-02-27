import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/Mysql.json';



function Mysql() {


  return (
    <div>
      <ListItem nombre="Mysql" data={data}/>
    </div>
  )


}



export default Mysql;
