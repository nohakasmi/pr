// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';
// import { ShoppingCart } from 'lucide-react'; // icône panier

// export default function Header() {
//   const { user } = useAuth();

//   return (
//     <header className="bg-white shadow p-4 flex justify-between items-center">
//       <Link to="/" className="text-2xl font-bold text-purple-500">TrandyPlace</Link>

//       <nav className="flex items-center space-x-4">
//         {/* Lien panier vers /cart */}
//         <Link
//           to="/cart"
//           className="relative text-gray-700 hover:text-purple-600"
//         >
//           <ShoppingCart className="w-6 h-6" />
//           {/* Badge nombre d'articles possible ici */}
//           {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">3</span> */}
//         </Link>

//         {!user && (
//           <>
//             <Link
//               to="/login"
//               className="bg-white text-indigo-600 px-4 py-1 rounded-full font-medium hover:bg-gray-100 shadow"
//             >
//               Se connecter
//             </Link>
//             <Link
//               to="/register"
//               className="bg-indigo-600 text-white px-4 py-1 rounded-full font-medium hover:bg-indigo-700 shadow"
//             >
//               S'inscrire
//             </Link>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// }
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ShoppingCart } from 'lucide-react'; // icône panier

export default function Header() {
  const { user } = useAuth();

  const cartItemCount = 3; // Remplace par ta logique réelle

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-purple-500">
        TrandyPlace
      </Link>

      <nav className="flex items-center space-x-4">
        {/* Lien panier avec icône + bouton "Panier" */}
        <Link
          to="/cart"
          className="relative flex items-center space-x-2 text-gray-700 hover:text-purple-600"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="font-medium">Panier</span>

          {/* Badge nombre d'articles dans le panier */}
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-10 bg-red-500 text-white text-xs rounded-full px-1">
              {cartItemCount}
            </span>
          )}
        </Link>

        {!user && (
          <>
            <Link
              to="/login"
              className="bg-white text-indigo-600 px-4 py-1 rounded-full font-medium hover:bg-gray-100 shadow"
            >
              Se connecter
            </Link>
            <Link
              to="/register"
              className="bg-indigo-600 text-white px-4 py-1 rounded-full font-medium hover:bg-indigo-700 shadow"
            >
              S'inscrire
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
