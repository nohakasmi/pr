import React, { createContext, useContext, useState } from 'react';

// Création du contexte
const CartContext = createContext();

// Provider du contexte
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Ajouter un article
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        // Incrémenter la quantité si l'article existe déjà
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Ajouter un nouvel article avec une quantité initiale
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Supprimer un article
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  // Vider le panier
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personnalisé pour utiliser le panier
export const useCart = () => {
  return useContext(CartContext);
};
