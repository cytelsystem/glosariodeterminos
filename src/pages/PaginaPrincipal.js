import React from 'react';
import  './styles/PaginaPrincipal.scss';
import imgPrincipal from '../images/PaginaPrincipal.webp'



function PaginaPrincipal() {


  return (

    <div className="container-fluid paginaPrincipal">
         <img class="d-block w-100" src={imgPrincipal} alt="Imagen Pagina principal Tecnologia"/>
      <h1>PaginaPrincipal</h1>

    </div>

  )


}



export default PaginaPrincipal;
