import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Mi Tienda</h1>
      <ul style={styles.navLinks}>
        <li><a href="#home">Inicio</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#333',
    color: 'white'
  },
  logo: { fontSize: '1.5rem' },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem'
  }
};

export default NavBar;
