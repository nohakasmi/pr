
// import React, { useState, useEffect } from 'react';

// // Simule une API locale (à remplacer par appel réel)
// const fakeApiGetCart = () => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve({
//         items: [
//           { produit: { id: 1, nom_produit: "Smartphone Galaxy Pro", prix: 8999 }, quantite: 2 },
//           { produit: { id: 2, nom_produit: "T-shirt Coton Bio", prix: 299 }, quantite: 3 }
//         ]
//       });
//     }, 1000);
//   });
// };

// export default function Cart() {
//   const [cart, setCart] = useState({ items: [] });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fakeApiGetCart()
//       .then(data => {
//         setCart(data);
//       })
//       .catch(() => {
//         setCart({ items: [] });
//       })
//       .finally(() => {
//         setLoading(false);  // toujours arrêter le loading, même en erreur
//       });
//   }, []);

//   // Calcul du total
//   const total = cart.items.reduce((sum, item) => sum + item.produit.prix * item.quantite, 0);

//   if (loading) {
//     return (
//       <p className="text-center text-lg mt-12 text-gray-600">
//         Chargement du panier...
//       </p>
//     );
//   }

//   if (cart.items.length === 0) {
//     return (
//       <div className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md text-center">
//         <h1 className="text-3xl font-bold mb-4 text-indigo-600">Panier</h1>
//         <p className="text-gray-700 text-lg">Votre panier est vide.</p>
//         <p className="mt-6 text-xl font-semibold">Total : 0.00 €</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
//       <h1 className="text-4xl font-bold mb-8 text-indigo-600">Panier</h1>

//       <div className="divide-y divide-gray-300">
//         {cart.items.map(item => (
//           <div key={item.produit.id} className="flex justify-between py-4 items-center">
//             <div>
//               <h2 className="font-semibold text-lg text-gray-800">{item.produit.nom_produit}</h2>
//               <p className="text-gray-500">Quantité : {item.quantite}</p>
//             </div>
//             <div className="text-lg font-semibold text-gray-900">
//               {(item.produit.prix * item.quantite).toFixed(2)} €
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-right mt-8 text-2xl font-extrabold text-indigo-700">
//         Total : {total.toFixed(2)} €
//       </div>

//       <div className="mt-8 text-right">
//         <button
//           onClick={() => alert('Passer au paiement')}
//           className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
//         >
//           Passer au paiement
//         </button>
//       </div>
//     </div>
//   );
// } 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Simule une API locale (à remplacer par appel réel)
const fakeApiGetCart = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Pour simuler une erreur, tu peux décommenter la ligne suivante
      // return reject(new Error("Erreur chargement panier"));

      resolve({
        items: [
          { produit: { id: 1, nom_produit: "Smartphone Galaxy Pro", prix: 8999 }, quantite: 2 },
          { produit: { id: 2, nom_produit: "T-shirt Coton Bio", prix: 299 }, quantite: 3 }
        ]
      });
    }, 1000);
  });
};

const formatPrice = (value) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);

export default function Cart() {
  const [cart, setCart] = useState({ items: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fakeApiGetCart()
      .then(data => {
        setCart(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message || "Erreur lors du chargement du panier");
        setCart({ items: [] });
      })
      .finally(() => setLoading(false));
  }, []);

  // Total des articles (quantité)
  const totalQuantity = cart.items.reduce((sum, item) => sum + item.quantite, 0);

  // Calcul du total prix
  const totalPrice = cart.items.reduce((sum, item) => sum + item.produit.prix * item.quantite, 0);

  if (loading) {
    return (
      <p className="text-center text-lg mt-12 text-gray-600">Chargement du panier...</p>
    );
  }

  if (error) {
    return (
      <div className="max-w-xl mx-auto mt-12 p-6 bg-red-100 rounded-lg shadow-md text-center text-red-700">
        <h1 className="text-3xl font-bold mb-4">Erreur</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (cart.items.length === 0) {
    return (
      <div className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600">Panier</h1>
        <p className="text-gray-700 text-lg">Votre panier est vide.</p>
        <p className="mt-6 text-xl font-semibold">Total : {formatPrice(0)}</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-2 text-indigo-600">Panier</h1>
      <p className="text-gray-600 mb-6">Total articles : {totalQuantity}</p>

      <div className="divide-y divide-gray-300">
        {cart.items.map(item => (
          <div key={item.produit.id} className="flex justify-between py-4 items-center">
            <div>
              <h2 className="font-semibold text-lg text-gray-800">{item.produit.nom_produit}</h2>
              <p className="text-gray-500">Quantité : {item.quantite}</p>
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {formatPrice(item.produit.prix * item.quantite)}
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-8 text-2xl font-extrabold text-indigo-700">
        Total : {formatPrice(totalPrice)}
      </div>

      <div className="mt-8 text-right">
        <button
          onClick={() => navigate('/checkout')}
          className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
        >
          Passer au paiement
        </button>
      </div>
    </div>
  );
}

