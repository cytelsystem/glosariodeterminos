import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/JavaScriptNode.json';



function JavaScriptNode() {


  return (
    <div>
      <ListItem nombre="JavaScript" data={data}/>
    </div>
  )


}



export default JavaScriptNode;
