import React from 'react';
import  './styles/PaginaPrincipal.scss';
import imgPrincipal from '../images/PaginaPrincipal.webp'
import Button from 'react-bootstrap/Button'



function PaginaPrincipal() {


  return (

    <div className="container-fluid paginaPrincipal" style={{
                                                              backgroundImage: `url(${imgPrincipal})`,
                                                              backgroundPosition: 'center',
                                                              backgroundSize: 'cover',
                                                              backgroundRepeat: 'no-repeat',
                                                              height:'100vh',
                                                              with: '100vw'
                                                            }}>

      <h1>PaginaPrincipal</h1>
      <p>En el menú hamburguesa se encuentran las materias de la versión moderna, algunas no tiene información todavía.</p>
      <a class="btn btn-outline-primary" href="https://cytelsystem.github.io/glosariodeterminosAnterior/" target="_blank">Glosario Version anterior</a>
    </div>


  )


}



export default PaginaPrincipal;

