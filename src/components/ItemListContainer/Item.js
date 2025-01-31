import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.price} USD</p>
      <Link to={`/item/${item.id}`}>Ver Detalle</Link>
    </div>
  );
};

export default Item;
