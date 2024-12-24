import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <Link to="/" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Inicio</Link>
      <Link to="/category/electronics" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Electrónica</Link>
      <Link to="/category/clothing" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Ropa</Link>
      <Link to="/category/books" style={{ margin: '0 1rem', color: '#fff', textDecoration: 'none' }}>Libros</Link>
    </nav>
  );
}

export default NavBar;
