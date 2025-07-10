import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";  
import { useNavigate } from 'react-router-dom';



export default function ProductDetail() { 
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const {addToCart} = useCart();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [id]); 

    if(!product){
        return <div>Loading...</div>;
    }
 
    return (
        <div className="product-detail">
            <img src={product.image} alt={product.title} /> 
            <div>
            <h2>{product.title}</h2>
            <p><strong>Price: ${product.price}</strong></p>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            <button onClick={() => { addToCart(product); navigate('/cart'); }}>Add to Cart 🛒</button>
      </div>
        </div>
    );  
}