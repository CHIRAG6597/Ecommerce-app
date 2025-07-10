import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
var [products, setProducts] = useState([]);
const [search, setSearch] = useState("");

const filteredProducts = products.filter((p) =>
  p.title.toLowerCase().includes(search.toLowerCase())
);


useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error("Error fetching products:", error));
}, []);

return ( 
<div className="home-page">
  <input
  type="text"
  placeholder="Search products..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="search-box"
/>
    <div className="product-grid">
      {filteredProducts.map(product => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>${product.price}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  </div>
);
}
