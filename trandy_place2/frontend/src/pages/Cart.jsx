
import React, { useState, useEffect } from 'react';

// Simule une API locale (tu peux remplacer par tes appels API)
const fakeApiGetCart = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        items: [
          { produit: { id: 1, nom_produit: "Smartphone Galaxy Pro", prix: 8999 }, quantite: 2 },
          { produit: { id: 2, nom_produit: "T-shirt Coton Bio", prix: 299 }, quantite: 3 }
        ]
      });
    }, 1000);
  });
};

export default function Cart() {
  const [cart, setCart] = useState({ items: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fakeApiGetCart()
      .then(data => {
        setCart(data);
        setLoading(false);
      })
      .catch(() => {
        setCart({ items: [] });
        setLoading(false);
      });
  }, []);

  // Calcul total
  const total = cart.items.reduce((sum, i) => sum + i.produit.prix * i.quantite, 0);

  if (loading) {
    return (
      <p className="text-center text-lg mt-12 text-gray-600">
        Chargement du panier...
      </p>
    );
  }

  if (cart.items.length === 0) {
    return (
      <div className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600">Panier</h1>
        <p className="text-gray-700 text-lg">Votre panier est vide.</p>
        <p className="mt-6 text-xl font-semibold">Total : 0.00 €</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-indigo-600">Panier</h1>

      <div className="divide-y divide-gray-300">
        {cart.items.map(i => (
          <div key={i.produit.id} className="flex justify-between py-4 items-center">
            <div>
              <h2 className="font-semibold text-lg text-gray-800">{i.produit.nom_produit}</h2>
              <p className="text-gray-500">Quantité : {i.quantite}</p>
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {(i.produit.prix * i.quantite).toFixed(2)} €
            </div>
          </div>
        ))}
      </div>

      <div className="text-right mt-8 text-2xl font-extrabold text-indigo-700">
        Total : {total.toFixed(2)} €
      </div>

      <div className="mt-8 text-right">
        <button
          onClick={() => alert('Passer au paiement')}
          className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition"
        >
          Passer au paiement
        </button>
      </div>
    </div>
  );
}
