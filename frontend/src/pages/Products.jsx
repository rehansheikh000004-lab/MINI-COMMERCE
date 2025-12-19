import { useEffect, useState } from "react";
import API from "../api";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/api/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div className="grid">
      {products.map(p => (
        <div key={p._id} className="card">
          <h3>{p.title}</h3>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}
