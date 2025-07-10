import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();
  console.log(cartItems); 

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Your cart is empty 🛒</h2>
        <Link to="/">Go shop now</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div>
            <h4>{item.title}</h4>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove ❌</button>
          </div>
        </div>
      ))}
    </div>
  );
}
