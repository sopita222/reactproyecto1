import React from 'react';

const CartWidget = () => {
  return (
    <div style={styles.widget}>
      🛒 <span>3</span>
    </div>
  );
};

const styles = {
  widget: {
    backgroundColor: '#ff6347',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    color: 'white',
    fontSize: '1rem'
  }
};

export default CartWidget;
