import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/DesignThinking.json';



function DesignThinking() {


  return (
    <div>
      <ListItem nombre="Design Thinking" data={data}/>
    </div>
  )


}



export default DesignThinking;
