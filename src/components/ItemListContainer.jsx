import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItemListContainer({ greeting }) {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simular datos de una API
    const allItems = [
      { id: 1, name: 'Producto 1', category: 'electronics' },
      { id: 2, name: 'Producto 2', category: 'clothing' },
      { id: 3, name: 'Producto 3', category: 'books' },
    ];
    const filteredItems = categoryId
      ? allItems.filter(item => item.category === categoryId)
      : allItems;
    setItems(filteredItems);
  }, [categoryId]);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{greeting}</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
