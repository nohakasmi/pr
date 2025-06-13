// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../services/api';
// import { useAuth } from '../hooks/useAuth';

// export default function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const { user } = useAuth();

//   useEffect(() => { api.get(`/products/${id}`).then(res => setProduct(res.data)); }, [id]);

//   if (!product) return <p>Chargement...</p>;
  
//   return (
//     <div className="max-w-2xl mx-auto">
//       <img src={product.photos[0]} alt={product.nom_produit} className="w-full h-96 object-cover rounded" />
//       <h1 className="text-3xl mt-4">{product.nom_produit}</h1>
//       <p className="text-xl text-gray-700 mt-2">{product.prix.toFixed(2)} €</p>
//       <p className="mt-4">{product.description}</p>
//       {/* Ajout au panier/buttons admin-seller options */}
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../hooks/useAuth';
import { useCart } from '../context/CartContext'; // 📍 ajuste le chemin si besoin

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { user } = useAuth();
  const { addToCart } = useCart(); // 🛒

  useEffect(() => {
    api.get(`/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Chargement...</p>;

  const handleAddToCart = () => {
    addToCart(product);
    alert('Produit ajouté au panier !');
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <img
        src={product.photos[0]}
        alt={product.nom_produit}
        className="w-full h-96 object-cover rounded"
      />
      <h1 className="text-3xl mt-4">{product.nom_produit}</h1>
      <p className="text-xl text-gray-700 mt-2">{product.prix.toFixed(2)} €</p>
      <p className="mt-4">{product.description}</p>

      {/* Bouton Ajouter au panier */}
      <button
        onClick={handleAddToCart}
        className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
      >
        🛒 Ajouter au panier
      </button>
    </div>
  );
}
