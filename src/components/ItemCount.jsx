import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem' }}>
      <button onClick={handleSubtract} disabled={count <= 1}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd} disabled={count >= stock}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
