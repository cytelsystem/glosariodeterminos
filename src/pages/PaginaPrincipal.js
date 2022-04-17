import React from 'react';
import  './styles/PaginaPrincipal.scss';
import imgPrincipal from '../images/PaginaPrincipal.webp'




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
      <p>En el menú hamburguesa se encuentran las materias de la versión moderna, algunas no tiene información todavía 5. </p>



    </div>


  )


}



export default PaginaPrincipal;

