import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { cartItems } = useCart();
  const { darkMode, toggleTheme } = useTheme();
  return (
    <nav className="navbar">
      <Link to="/" className="logo">🛍️ ShopEase</Link>
      <Link to="/cart" className="cart-link">
        Cart ({cartItems.length})
      </Link>
      <button onClick={toggleTheme}>
        {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
    </nav>
  );
}
