import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return <span>🛒 {totalItems}</span>;
};

export default CartWidget;
