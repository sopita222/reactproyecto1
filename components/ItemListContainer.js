import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={styles.container}>
      <h2>{greeting}</h2>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
  }
};

export default ItemListContainer;
