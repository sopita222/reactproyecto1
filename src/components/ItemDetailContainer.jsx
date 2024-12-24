import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from './ItemCount';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    // Simular datos de una API
    const allItems = [
      { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1' },
      { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2' },
      { id: 3, name: 'Producto 3', description: 'Descripción del Producto 3' },
    ];
    const foundItem = allItems.find(item => item.id === parseInt(itemId));
    setItem(foundItem);
  }, [itemId]);

  if (!item) {
    return <h2>Cargando...</h2>;
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <ItemCount stock={10} initial={1} onAdd={(quantity) => alert(`Agregaste ${quantity} al carrito`)} />
    </div>
  );
}

export default ItemDetailContainer;
