import React from 'react';
import Navbar from '../components/Navbar';
import Offcanvas from '../components/Offcanvas';

function Layout (props) {
  return (
    <React.Fragment>
        <Offcanvas />
        <Navbar />
        {props.children}
    </React.Fragment>
  );
}

export default Layout;