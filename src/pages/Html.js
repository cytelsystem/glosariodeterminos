import React from 'react';
import ListItem from '../components/ListItem';
import  data  from '../data/Html.json';



function Html() {


  return (
    <div>
      <ListItem nombre="Html" data={data}/>
    </div>
  )


}



export default Html;
